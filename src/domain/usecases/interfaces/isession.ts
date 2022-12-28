import { IUserDTO, IUserParams, IUserCreate } from "domain/DTO/user-dto";

export interface ISessionUseCases {
  register(user_create: IUserCreate): Promise<any>;
  login(UserDTO: IUserParams): Promise<IUserDTO>;
  getToken(): string;
  setToken(name: string, value: string): void;
  removeToken(): void;
  verifyToken(): boolean;
}
