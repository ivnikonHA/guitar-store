import dayjs from 'dayjs';

import { generateRandomValue, getRandomItem } from '../../helpers/index.js';
import { ARTICLE, INDEX, PRICE, WEEK_DAY} from './consts.js';
import { GuitarType, MockDataType, ProductType, StringsCountType } from '../../types/index.js';

export class GuitarProductGenerator {
  constructor(
    private readonly mockData: MockDataType
  ) {}

  public generate(): ProductType {
      return {
        name: getRandomItem<string>(this.mockData.names),
        description: getRandomItem<string>(this.mockData.descriptions),
        publishDate: dayjs()
          .subtract(generateRandomValue(WEEK_DAY.FIRST, WEEK_DAY.LAST), 'day')
          .toISOString(),
        photo: `catalog-product-${generateRandomValue(INDEX.FIRST, INDEX.LAST)}.png`,
        guitarType: getRandomItem<GuitarType>(Object.values(GuitarType)),
        article: `A${generateRandomValue(ARTICLE.START, ARTICLE.END)}`,
        stringsCount: getRandomItem<StringsCountType>(Object.values(StringsCountType)),
        price: generateRandomValue(PRICE.MIN, PRICE.MAX)
      };
  }
}
