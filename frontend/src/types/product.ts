export enum GuitarType {
  Electric = 'электро',
  Acoustic = 'аккустика',
  Ukulele = 'укулеле'
}

export enum StringsCountType {
  Four = '4',
  Six = '6',
  Seven = '7',
  Twelve = '12'
}

export type ProductType = {
  id: string,
  name: string,
  description: string,
  publishDate: string,
  photo: string,
  guitarType: GuitarType,
  article: string,
  stringsCount: StringsCountType,
  price: number,
  createdAt: string
}

export type CreateProductDto = {
  name: string;
  description: string;
  publishDate: string;
  photo: string;
  guitarType: GuitarType;
  article: string;
  stringsCount: StringsCountType;
  price: number;
}

export type UpdateProductDto = {
  id: string;
  name?: string;
  description?: string;
  publishDate?: string;
  photo?: string;
  guitarType?: GuitarType;
  article?: string;
  stringsCount?: StringsCountType;
  price?: number;
}

