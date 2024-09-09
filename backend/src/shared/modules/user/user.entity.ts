import { defaultClasses ,getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

import { createSHA256 } from '../../helpers/index.js';
import { UserType } from '../../types/index.js';

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  }
})

export class UserEntity {
  @prop({ unique: true, required: true })
  public email: string;

  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  private password?: string;

  constructor(userData: UserType) {
    this.email = userData.email;
    this.name = userData.name;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }

  public verifyPassword(password: string, salt: string) {
    const hash = createSHA256(password, salt);

    return hash === this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
