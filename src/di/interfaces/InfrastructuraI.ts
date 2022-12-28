import { IHttp, IStorage } from "adapters/infrastructure/interface";

export default interface IInfrastructure {
  http: IHttp;
  webstorage: IStorage;
  httpFormData: IHttp;
}
