import { GuitarType } from './guitar-type.type.js'
import { StringsCountType } from './strings-count.type.js'

export type ProductType = {
    name: string,
    description: string,
    publishDate: string,
    photo: string,
    type: GuitarType,
    article: string,
    stringsCount: StringsCountType,
    price: number
}