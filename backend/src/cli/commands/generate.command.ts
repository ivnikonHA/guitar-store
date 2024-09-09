import { readFile } from 'node:fs/promises';

import { Command } from './command.interface.js';
import { getErrorMessage } from '../../shared/helpers/index.js';
import { MongoDatabaseClient } from '../../shared/libs/database-client/index.js';
import { Logger, PinoLogger } from '../../shared/libs/logger/index.js';
import { MockDataType } from '../../shared/types/index.js';
import { GuitarProductGenerator } from '../../shared/libs/product-generator/index.js';
import { ProductService } from '../../shared/modules/product/product.service.js';
import { ProductModel } from '../../shared/modules/product/product.entity.js';

export class GenerateCommand implements Command {
  private logger: Logger;
  private databaseClient: MongoDatabaseClient;
  private productGenerator: GuitarProductGenerator;
  private initialData: MockDataType;
  private productService: ProductService;

  constructor()
  {
    this.logger = new PinoLogger();
    this.databaseClient = new MongoDatabaseClient(this.logger);
    this.productService = new ProductService(this.logger, ProductModel);
  }

  private async load(filepath: string) {
    try {
      const loadedData = await readFile(filepath, { encoding: 'utf-8' });
      return JSON.parse(loadedData);
    } catch {
      throw new Error(`Can't load data from ${filepath}`);
    }
  }

  public getName(): string {
    return '--generate';
  }

  public async execute(...parameters: string[]): Promise<void> {
    if(parameters.length < 3) {
      console.error('There is less than 3 parameters.');
    }
    const [count, filepath, uri] = parameters;
    const offerCount = Number.parseInt(count, 10);

    this.initialData = await this.load(filepath);
    this.productGenerator = new GuitarProductGenerator(this.initialData);

    try {
      await this.databaseClient.connect(uri);
    } catch(error) {
      this.logger.error('Can\'t generate data', new Error(getErrorMessage(error)));
    }

    for(let i = 0; i < offerCount; i++) {
      const product = this.productGenerator.generate();
      const result = await this.productService.create(product);
      console.log(result);
    }

    await this.databaseClient.disconnect();
  }
}
