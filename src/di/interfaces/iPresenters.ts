import { ISessionPresenters } from "adapters/presenters/interfaces/iSession";
import { IUserPresenters } from "adapters/presenters/interfaces/iUserPresenters";
export default interface IPresenters {
  session: ISessionPresenters;
  user: IUserPresenters;
}
