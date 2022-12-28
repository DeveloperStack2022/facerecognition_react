import { IUserCreate } from "./../../DTO/user-dto";
import { IUserDTO, IUserParams } from "domain/DTO/user-dto";
export interface ISessionRepository {
  login(userDTO: IUserParams): Promise<IUserDTO>;
  getToken(): string;
  setToken(token: string, value: string): void;
  removeToken(): void;
  verifyToken(): boolean;
  register(UserDTO: IUserCreate): Promise<IUserDTO>;
}
