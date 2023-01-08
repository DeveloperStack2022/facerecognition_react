import { IUserUseCases } from "domain/usecases/interfaces/iuser";
import { IUserPresenters } from "./interfaces/iUserPresenters";

export default class UserPresenter implements IUserPresenters {
  public constructor(private readonly useCases: IUserUseCases) {}
  public async add(data: any): Promise<any> {
    return await this.useCases.addUser(data);
  }
  public async searchByImage(data: any): Promise<any> {
    return await this.useCases.searchByImage(data);
  }
}
