import { Container } from 'inversify';
import { types } from '@typegoose/typegoose';

import { ProductService } from './product.service.js';
import { ProductEntity, ProductModel } from './product.entity.js';
import { ProductController } from './product.controller.js';
import { Component } from '../../types/component.enum.js';
import { Controller } from '../../libs/rest/index.js';

export function createProductContainer() {
  const productContainer = new Container();

  productContainer.bind<ProductService>(Component.ProductService).to(ProductService);
  productContainer.bind<types.ModelType<ProductEntity>>(Component.ProductModel).toConstantValue(ProductModel);
  productContainer.bind<Controller>(Component.ProductController).to(ProductController).inSingletonScope();

  return productContainer;
}
