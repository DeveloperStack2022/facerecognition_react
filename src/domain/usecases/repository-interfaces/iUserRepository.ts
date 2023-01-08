export interface IUserRepository {
  addUser(data: any): Promise<any>;
  searchByImage(data: any): Promise<any>;
}
