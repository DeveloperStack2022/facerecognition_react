import IUsecases from "di/interfaces/iUsecases";
import SessionPresenter from "adapters/presenters/Session";
import UserPresenter from "adapters/presenters/UserPresenters";
const datos = (useCases: IUsecases) => {
  return {
    session: new SessionPresenter(useCases.session),
    user: new UserPresenter(useCases.user),
  };
};
export default datos;
