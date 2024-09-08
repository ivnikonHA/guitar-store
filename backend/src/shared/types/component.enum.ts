export const Component = {
  RestApplication: Symbol.for('RestApplication'),
  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  DatabaseClient: Symbol.for('DatabaseClient'),
  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),
  UserController: Symbol.for('UserController'),
  ProductService: Symbol.for('ProductService'),
  ProductModel: Symbol.for('ProductModel'),
  ProductController: Symbol.for('ProductController'),
  ExceptionFilter: Symbol.for('ExceptionFilter'),
  AuthService: Symbol.for('AuthService'),
  AuthExceptionFilter: Symbol.for('AuthExceptionFilter')
} as const;
