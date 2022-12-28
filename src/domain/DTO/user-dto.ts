export interface IUserParams {
  email: string;
  password: string;
}

export interface IUserDTO {
  readonly message: string;
  readonly success: boolean;
  readonly token_type:string;
  readonly access_token:string;
  readonly expires_in:number;
  readonly refresh_token:string;
}

export interface IUserCreate extends IUserParams {
  rol: string;
  username: string;
}

export class UserDTO implements IUserDTO {
  readonly message: string;
  readonly success: boolean;
  readonly access_token: string;
  readonly expires_in: number;
  readonly refresh_token: string;
  readonly token_type: string;

  constructor(params: IUserDTO) {
    this.message = params.message;
    this.success = params.success;
    this.access_token = params.access_token;
    this.expires_in = params.expires_in;
    this.refresh_token = params.refresh_token;
    this.token_type = params.token_type
  }
}

export class UserAdd implements IUserParams {
  readonly email: string;
  readonly password: string;
  constructor(param: IUserParams) {
    this.email = param.email;
    this.password = param.password;
  }
}

export class CreateUser implements IUserParams, IUserCreate {
  readonly email: string;
  readonly password: string;
  readonly rol: string;
  readonly username: string;

  constructor(params: {
    username: string;
    email: string;
    password: string;
    rol: string;
  }) {
    this.email = params.email;
    this.password = params.password;
    this.rol = params.rol;
    this.username = params.username;
  }
}
