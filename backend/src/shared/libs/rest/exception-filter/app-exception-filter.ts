import { NextFunction,Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';

import { Component } from '../../../types/component.enum.js';
import { Logger } from '../../logger/logger.interface.js';
import { HttpError } from '../errors/http-error.js';
import { ExceptionFilter } from './exception-filter.interface.js';

@injectable()
export class AppExceptionFilter implements ExceptionFilter {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger
  ){
    this.logger.info('Register AppExceptionFilter');
  }

  private handleHttpError(error: HttpError, _req: Request, res: Response, _next: NextFunction) {
    this.logger.error(`[${error.detail}]: ${error.httpStatusCode} - ${error.message}`, error);
    res
      .status(error.httpStatusCode)
      .json({error: error.message});
  }

  private handleOtherErrors(error: Error, _req: Request, res: Response, _next: NextFunction): void {
    this.logger.error(error.message, error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({error: error.message});
  }

  public catch(error: Error, req: Request, res: Response, next: NextFunction): void {
    if(error instanceof HttpError) {
      this.handleHttpError(error, req, res, next);
    }
    this.handleOtherErrors(error, req, res, next);
  }
}
