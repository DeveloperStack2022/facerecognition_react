import { IUserCreate, IUserDTO, IUserParams } from "domain/DTO/user-dto";
import { ISessionRepository } from "./repository-interfaces/iSessions";
import { ISessionUseCases } from "./interfaces/isession";

class SessionUseCases implements ISessionUseCases {
  constructor(private readonly sessionRepo: ISessionRepository) {}
  async register(user_create: IUserCreate): Promise<any> {
    return await this.sessionRepo.register(user_create);
  }
  getToken(): string {
    return this.sessionRepo.getToken();
  }
  async login(UserDTO: IUserParams): Promise<IUserDTO> {
    return await this.sessionRepo.login(UserDTO);
  }
  removeToken(): void {
    this.sessionRepo.removeToken();
  }
  verifyToken(): boolean {
    return this.sessionRepo.verifyToken();
  }
  setToken(name: string, value: string): void {
    this.sessionRepo.setToken(name, value);
  }
}
export default SessionUseCases;
