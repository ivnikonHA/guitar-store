import dayjs from 'dayjs';

import { generateRandomValue, getRandomItem } from '../../helpers/index.js';
// import { CategoryType, CityType, GoodsType, MockServerDataType } from '../../types/index.js';
import { INDEX, PRICE, WEEK_DAY} from './consts.js';
import { MockDataType } from '../../types/index.js';
import { OfferGenerator } from './offer-generator.interface.js';

export class TSVOfferGenerator implements OfferGenerator {
  constructor(
    private readonly mockData: MockDataType
  ) {}

  public generate(): string {
    const name = getRandomItem<string>(this.mockData.names);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs()
      .subtract(generateRandomValue(WEEK_DAY.FIRST, WEEK_DAY.LAST), 'day')
      .toISOString();
    const photo = `preview-image-${generateRandomValue(INDEX.FIRST, INDEX.LAST)}.jpg`;
    const type = '';
    const article = `A${generateRandomValue(10000, 99999)}`;
    const stringsCount = '';
    const price = generateRandomValue(PRICE.MIN, PRICE.MAX).toString();
  
  // }
    return '';
  }
}
