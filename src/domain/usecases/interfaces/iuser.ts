export interface IUserUseCases {
  addUser(data: any): Promise<any>;
  searchByImage(data: any): Promise<any>;
}
