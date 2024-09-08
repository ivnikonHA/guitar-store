import { NextFunction,Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Types } from 'mongoose';

import { HttpError, Middleware } from '../index.js';

export class ValidateObjectIdMiddleware implements Middleware {
  constructor(
    private param: string
  ){}

  public execute({ params }: Request, _res: Response, next: NextFunction): void {
    const objectId = params[this.param];

    if(Types.ObjectId.isValid(objectId)) {
      return next();
    }

    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      `${objectId} is invalid ObjectId`,
      'ValidateObjectIdMiddleware'
    );
  }
}
