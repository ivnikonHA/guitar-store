import { ParamsDictionary} from 'express-serve-static-core';

export type ParamProductId = {
  id: string;
} | ParamsDictionary;
