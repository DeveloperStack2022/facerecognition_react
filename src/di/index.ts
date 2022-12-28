import IPresenters from "./interfaces/iPresenters";
import repositories from "./repositories";
import UseCasese from "./usecases";
import Infrastructrue from "./infrastructures";
import Presenters from "./presenters";

const cInfrastructure = Infrastructrue();
const cRepositries = repositories(cInfrastructure);
const cUseCases = UseCasese(cRepositries);
const cPresenters = Presenters(cUseCases);

export default {
  session: cPresenters.session,
  user: cPresenters.user,
} as IPresenters;
