import { IStorage } from "./../infrastructure/interface/IStorage";
import { IHttp } from "./../infrastructure/interface/iHttp";
import { IUserRepository } from "domain/usecases/repository-interfaces/iUserRepository";
const URL = process.env.REACT_APP_API_BACKEND_URL

export default class UserRepository implements IUserRepository {
  constructor(
    private readonly http: IHttp,
    private readonly storage: IStorage,
    private readonly httpFormData: IHttp
  ) {}

  async addUser(data: any): Promise<any> {
    const response = await this.httpFormData.request({
      url: `${URL}/userpersistencia/addImage`,
      method: "POST", 
      body: data,
      headers: {},
    });
    return response;
  }
  async searchByImage(data: any,token:string): Promise<any> {
    const response = await this.httpFormData.request({
      url: `${URL}/userdetect/compareImageFaceRecognitionTwo`,
      method: "POST",
      body: data,
      headers: {
        AuthToken: `Bearer ${token}`
      },
    });
    return response;
  }
}
