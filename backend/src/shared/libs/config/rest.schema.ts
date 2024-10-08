import convict from 'convict';
import validator from 'convict-format-with-validator';

convict.addFormats(validator);

export type RestSchema = {
  HOST: string;
  PORT: number;
  SALT: string;
  JWT_SECRET: string;
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_PORT: string;
  DB_NAME: string;
  UPLOAD_DIRECTORY: string;
}

export const configRestSchema = convict<RestSchema>({
  HOST: {
    doc: 'Host for incoming connections.',
    format: 'ipaddress',
    env: 'HOST',
    default: '127.0.0.1'
  },
  PORT: {
    doc: 'Port for incoming connections.',
    format: 'port',
    env: 'PORT',
    default: 4000
  },
  SALT: {
    doc: 'Salt for password hash',
    format: String,
    env: 'SALT',
    default: ''
  },
  JWT_SECRET: {
    doc: 'Secret for JWT',
    format: String,
    env: 'JWT_SECRET',
    default: ''
  },
  DB_HOST: {
    doc: 'IP address of the database server (MongoDB)',
    format: 'ipaddress',
    env: 'MONGO_HOST',
    default: '127.0.0.1'
  },
  DB_USER: {
    doc: 'Username to connect to database',
    format: String,
    env: 'MONGO_USER',
    default: null
  },
  DB_PASSWORD: {
    doc: 'Password to connect to database',
    format: String,
    env: 'MONGO_PASSWORD',
    default: null
  },
  DB_PORT: {
    doc: 'Port to connect to database',
    format: 'port',
    env: 'MONGO_PORT',
    default: '27017'
  },
  DB_NAME: {
    doc: 'Database name',
    format: String,
    env: 'MONGO_DB',
    default: 'guitar-shop'
  },
  UPLOAD_DIRECTORY: {
    doc: 'Directory for upload files',
    format: String,
    env: 'UPLOAD_DIRECTORY',
    default: null
  },
});
