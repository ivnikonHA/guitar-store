import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';

import { fillDTO } from '../../helpers/common.js';
//import { Config, RestSchema } from '../../libs/config/index.js';
import { Logger } from '../../libs/logger/index.js';
import {
  BaseController,
  HttpError,
 // PrivateRouteMiddleware,
//  PublicRouteMiddleware,
//  UploadFileMiddleware,
  ValidateDtoMiddleware
} from '../../libs/rest/index.js';
import { Component } from '../../types/component.enum.js';
import { HttpMethod } from '../../libs/rest/index.js';
//import { AuthService } from '../auth/auth-service.interface.js';
import { CreateUserDTO } from './dto/create-user.dto.js';
//import { LoginUserDto } from './dto/login-user.dto.js';
//import { LoggedUserRdo } from './rdo/logged-user.rdo.js';
import { UserRdo } from './rdo/user.rdo.js';
import { UserService } from './user.service.js';

@injectable()
export class UserController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    //@inject(Component.Config) private readonly config: Config<RestSchema>,
    @inject(Component.UserService) private readonly userService: UserService,
    //@inject(Component.AuthService) private readonly authService: AuthService
  ){
    super(logger);

    this.logger.info('Register routes for UserController');
    this.addRoute({
      path: '/register',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [
        //new PublicRouteMiddleware(),
        new ValidateDtoMiddleware(CreateUserDTO)
      ]
    });
    // this.addRoute({
    //   path: '/login',
    //   method: HttpMethod.Get,
    //   handler: this.checkAuthenticate
    // });
    // this.addRoute({
    //   path: '/login',
    //   method: HttpMethod.Post,
    //   handler: this.login,
    //   middlewares: [new ValidateDtoMiddleware(LoginUserDto)]
    // });
  }

  public async create(req: Request, res: Response): Promise<void> {
    const newUser = req.body;
    const existUser = await this.userService.findByEmail(newUser.email);
    if(existUser) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        `User with email ${newUser.email} exists.`,
        'UserController'
      );
    }
    const result = await this.userService.create(newUser);
    this.created(res, fillDTO(UserRdo, result));
  }

  // public async login(req: Request, res: Response): Promise<void> {
  //   const newUser = req.body;
  //   const user = await this.authService.verify(newUser);
  //   const token = await this.authService.authenticate(user);
  //   const responseData = fillDTO(LoggedUserRdo, {
  //     email: user.email,
  //     token
  //   });

  //   this.ok(res, responseData);
  // }

  // public async checkAuthenticate({ tokenPayload }: Request, res: Response) {
  //   if(tokenPayload?.email) {
  //     const foundedUser = await this.userService.findByEmail(tokenPayload.email);

  //     if(foundedUser) {
  //       this.ok(res, fillDTO(LoggedUserRdo, foundedUser));
  //       return;
  //     }
  //   }
  //   throw new HttpError(
  //     StatusCodes.UNAUTHORIZED,
  //     'Unauthorized',
  //     'UserController'
  //   );
  // }
}
