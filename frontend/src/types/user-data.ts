export type UserData = {
  name: string;
  email: string;
  token: string;
};

export type CreateUserDTO = {
  email: string;
  name: string;
  password: string;
}

export type LoginUserDto = {
  email: string;
  password: string;
}
