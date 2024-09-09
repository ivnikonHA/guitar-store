import { IsEmail, IsString, Length } from 'class-validator';

import { PasswordLength, UserNameLength } from '../user.consts.js';
import { CreateUserMessages } from './create-user.messages.js';

export class CreateUserDTO {
  @IsEmail({}, { message: CreateUserMessages.email.invalidFormat })
  public email: string;

  @IsString({ message: CreateUserMessages.name.invalidFormat })
  @Length(
    UserNameLength.Min,
    UserNameLength.Max,
    { message: CreateUserMessages.name.lengthField }
  )
  public name: string;

  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(
    PasswordLength.Min,
    PasswordLength.Max,
    { message: CreateUserMessages.password.lengthField }
  )
  public password: string;
}
