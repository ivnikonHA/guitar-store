import 'reflect-metadata';

import { Container } from 'inversify';

import { createRestApplicationContainer, RestApplication } from './rest/index.js';
import { Component } from './shared/types/index.js';
import { createProductContainer } from './shared/modules/product/product.container.js';

async function bootstrap() {
  const appContainer = Container.merge(
    createRestApplicationContainer(),
    createProductContainer()
  )


  const application = appContainer.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();
