export interface IUserPresenters {
  add(data: any): Promise<any>;
  searchByImage(data: any,token:string): Promise<any>;
}
