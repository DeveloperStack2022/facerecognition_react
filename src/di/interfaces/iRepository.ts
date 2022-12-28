import { ISessionRepository } from "domain/usecases/repository-interfaces/iSessions";
import { IUserRepository } from "domain/usecases/repository-interfaces/iUserRepository";
export default interface IRepository {
  session: ISessionRepository;
  user: IUserRepository;
}
