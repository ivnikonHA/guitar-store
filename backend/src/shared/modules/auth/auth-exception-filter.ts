import { NextFunction,Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { Logger } from '../../libs/logger/logger.interface.js';
import { ExceptionFilter } from '../../libs/rest/index.js';
import { Component } from '../../types/component.enum.js';
import { BaseUserException } from './errors/base-user.exception.js';

@injectable()
export class AuthExceptionFilter implements ExceptionFilter {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger
  ) {
    this.logger.info('Register AuthExceptionFilter');
  }

  public catch(error: Error, _req: Request, res: Response, next: NextFunction): void {
    if(! (error instanceof BaseUserException)) {
      return next(error);
    }

    this.logger.error(`[Auth module] ${error.message}`, error);
    res.status(error.httpStatusCode)
      .json({
        type: 'AUTHORIZATION',
        error: error.message
      });
  }
}
