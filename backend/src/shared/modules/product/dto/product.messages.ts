import { ProductArticleLength, ProductDecriptionLength, ProductNameLength, ProductPrice } from '../product.consts.js';

export const ProductValidationMessage = {
  name: {
    invalidFormat: 'Name must be a string',
    minLength: `Minimum name length must be ${ProductNameLength.Min}`,
    maxLength: `Maximum name length must be ${ProductNameLength.Max}`
  },
  description: {
    invalidFormat: 'Description must be a string',
    minLength: `Minimum description length must be ${ProductDecriptionLength.Min}`,
    maxLength: `Maximum description length must be ${ProductDecriptionLength.Max}`
  },
  publishDate: {
    invalidFormat: 'publishDate must be a valid ISO date',
  },
  photo: {
    invalidFormat: 'photo path must be a string'
  },
  guitarType: {
    invalidFormat: `Type must be 'электро', 'аккустика' or 'укулеле'`
  },
  article: {
    invalidFormat: 'Article must be a string',
    minLength: `Minimum article length must be ${ProductArticleLength.Min}`,
    maxLength: `Maximum article length must be ${ProductArticleLength.Max}`
  },
  stringsCount: {
    invalidFormat: `Strings count must be '4', '6', '7' or '12'`
  },
  price: {
    invalidFormat: 'price must be integer',
    minValue: `Minimum price is ${ProductPrice.Min}`,
    maxValue: `Maximum price is ${ProductPrice.Max}`,
  }
}
