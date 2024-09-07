//import got from 'got';

import { getErrorMessage } from '../../shared/helpers/index.js';
//import { TSVFileWriter } from '../../shared/libs/file-writer/tsv-file-writer.js';
//import { TSVOfferGenerator } from '../../shared/libs/offer-generator/tsv-offer-generator.js';
//import { MockServerDataType } from '../../shared/types/mock-server-data.type.js';
import { Command } from './command.interface.js';
import { MongoDatabaseClient } from '../../shared/libs/database-client/index.js';
import { PinoLogger } from '../../shared/libs/logger/pino.logger.js';
import { readFile } from 'node:fs/promises';
import { MockDataType } from '../../shared/types/index.js';

export class GenerateCommand implements Command {
  private logger;
  private databaseClient;
  constructor()
  {
    this.logger = new PinoLogger();
    this.databaseClient = new MongoDatabaseClient(this.logger);
  }
  private initialData: MockDataType;

  private async load(filepath: string) {
    try {
      const loadedData = await readFile(filepath, { encoding: 'utf-8' });
      return JSON.parse(loadedData);
    } catch {
      throw new Error(`Can't load data from ${filepath}`);
    }
  }

  // private async write(filepath: string, offerCount: number) {
  //   const tsvOfferGenerator = new TSVOfferGenerator(this.initialData);
  //   const tsvFileWriter = new TSVFileWriter(filepath);

  //   const queue = [];
  //   for(let i = 0; i < offerCount; i++) {
  //     queue.push(tsvFileWriter.write(tsvOfferGenerator.generate()));
  //   }
  //   Promise.all(queue);
  // }

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
    try {
      await this.databaseClient.connect(uri);
      this.logger.info(`File ${filepath} with ${offerCount} records by ${uri} was created`);
    } catch(error) {
      this.logger.error('Can\'t generate data', new Error(getErrorMessage(error)));
    }
    for(let i = 0; i < offerCount; i++) {

    }
  }
}
