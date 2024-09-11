import dayjs from 'dayjs';
import { SortType, SortDirection } from '../../consts';
import { ProductType } from '../../types/product';

const sortPriceDescending = (firstElement: ProductType, secondElement: ProductType) => secondElement.price - firstElement.price;
const sortPriceAcsending = (firstElement: ProductType, secondElement: ProductType) => firstElement.price - secondElement.price;
const sortDateAscending = (firstElement: ProductType, secondElement: ProductType) => dayjs(firstElement.publishDate).diff(secondElement.publishDate, 'seconds');
const sortDateDescending = (firstElement: ProductType, secondElement: ProductType) => dayjs(firstElement.publishDate).diff(secondElement.publishDate, 'seconds') * (-1);

const sorting = {
  [SortType.PRICE]: (products: ProductType[], sortDirection: number) => sortDirection === SortDirection.ACSENDING ? products.toSorted(sortPriceAcsending): products.toSorted(sortPriceDescending),
  [SortType.DATE]: (products: ProductType[], sortDirection: number) => sortDirection === SortDirection.ACSENDING ? products.toSorted(sortDateAscending): products.toSorted(sortDateDescending)
};

export { sorting };
