import { ISessionUseCases } from "domain/usecases/interfaces/isession";
import { IUserUseCases } from "domain/usecases/interfaces/iuser";
export default interface IUsecases {
  session: ISessionUseCases;
  user: IUserUseCases;
}
