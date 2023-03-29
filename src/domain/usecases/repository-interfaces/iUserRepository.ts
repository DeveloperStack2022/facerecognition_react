export interface IUserRepository {
  addUser(data: any): Promise<any>;
  searchByImage(data: any,token:string): Promise<any>;
}
