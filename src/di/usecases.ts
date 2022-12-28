import IRepository from "di/interfaces/iRepository";
import Session from "domain/usecases/Session";
import UserUseCases from "domain/usecases/User";
import IUsecases from "di/interfaces/iUsecases";

const useCases = (repository: IRepository): IUsecases => {
  return {
    session: new Session(repository.session),
    user: new UserUseCases(repository.user),
  };
};
export default useCases;
