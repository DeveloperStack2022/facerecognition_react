import IInfrastructure from "./interfaces/InfrastructuraI";
import Http from "adapters/infrastructure/Http";
import HttpFormData from "adapters/infrastructure/HttpFormData";
import Storage from "adapters/infrastructure/WebStorage";
const datos = (): IInfrastructure => {
  return {
    http: new Http(),
    webstorage: new Storage(window.sessionStorage),
    httpFormData: new HttpFormData(),
  };
};

export default datos;
