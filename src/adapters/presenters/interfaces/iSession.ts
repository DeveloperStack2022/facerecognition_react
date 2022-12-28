import { IUserParams, IUserCreate } from "domain/DTO/user-dto";
export interface ISessionPresenters {
  register(userCreate: IUserCreate): Promise<any>;
  login(user: IUserParams): Promise<any>;
  getToken(): string;
  setToke(name: string, value: string): void;
  removeToken(): void;
  verifyToken(): boolean;
}
