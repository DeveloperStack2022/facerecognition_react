import { IUserCreate, IUserDTO, IUserParams } from "domain/DTO/user-dto";
import { ISessionUseCases } from "domain/usecases/interfaces/isession";
import { ISessionPresenters } from "./interfaces/iSession";

class SessionPresenter implements ISessionPresenters {
  constructor(private readonly useCases: ISessionUseCases) {}
  getToken(): string {
    return this.useCases.getToken();
  }
  async login(user: IUserParams): Promise<any> {
    return await this.useCases.login(user);
  }
  async register(userCreate: IUserCreate): Promise<any> {
    return await this.useCases.register(userCreate);
  }
  removeToken(): void {
    this.useCases.removeToken();
  }
  setToke(name: string, value: string): void {
    this.useCases.setToken(name, value);
  }
  verifyToken(): boolean {
    return this.useCases.verifyToken();
  }
}
export default SessionPresenter;
