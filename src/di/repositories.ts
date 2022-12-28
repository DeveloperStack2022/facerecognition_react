import SessionRepository from "adapters/repositorys/session";
import UserRepository from "adapters/repositorys/users";
import IRepositories from "di/interfaces/iRepository";
import IInfrastructure from "di/interfaces/InfrastructuraI";
const datos = (infrastructure: IInfrastructure): IRepositories => {
  return {
    session: new SessionRepository(
      infrastructure.http,
      infrastructure.webstorage
    ),
    user: new UserRepository(
      infrastructure.http,
      infrastructure.webstorage,
      infrastructure.httpFormData
    ),
  };
};
export default datos;
