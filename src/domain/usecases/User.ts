import { IUserUseCases } from "domain/usecases/interfaces/iuser";
import { IUserRepository } from "domain/usecases/repository-interfaces/iUserRepository";
export default class UserUseCases implements IUserUseCases {
  constructor(private readonly userRepository: IUserRepository) {}
  async addUser(data: any): Promise<any> {
    return await this.userRepository.addUser(data);
  }
  async searchByImage(data: any,token:string): Promise<any> {
    return await this.userRepository.searchByImage(data,token);
  }
}
