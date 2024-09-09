import 'reflect-metadata';

import { Container } from 'inversify';

import { createRestApplicationContainer, RestApplication } from './rest/index.js';
import { Component } from './shared/types/index.js';
import { createProductContainer } from './shared/modules/product/product.container.js';
import { createUserContainer } from './shared/modules/user/user.container.js';
import { createAuthContainer } from './shared/modules/auth/auth.container.js';

async function bootstrap() {
  const appContainer = Container.merge(
    createRestApplicationContainer(),
    createProductContainer(),
    createUserContainer(),
    createAuthContainer()
  )


  const application = appContainer.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();
