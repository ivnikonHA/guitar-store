import { PasswordLength, UserNameLength } from '../user.consts.js';

export const CreateUserMessages = {
  email: {
    invalidFormat: 'email must be a valid address'
  },
  name: {
    invalidFormat: 'name must be a string',
    lengthField: `min length is ${UserNameLength.Min}, max is ${UserNameLength.Max}`,
  },
  password: {
    invalidFormat: 'password must be a string',
    lengthField: `min length for password is ${PasswordLength.Min}, max is ${PasswordLength.Max}`
  }
} as const;
