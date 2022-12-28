import { IStorage } from "adapters/infrastructure/interface/IStorage";
import { IHttp } from "./../infrastructure/interface/iHttp";
import { ISessionRepository } from "domain/usecases/repository-interfaces/iSessions";
import { IUserParams, IUserDTO, IUserCreate } from "domain/DTO/user-dto";

export default class SessionRepository implements ISessionRepository {
  constructor(
    private readonly http: IHttp,
    private readonly storage: IStorage
  ) {}
  async login(userDTO: IUserParams): Promise<IUserDTO> {
    const response = await this.http.request({
      method: "POST",
      url: "http://localhost:8000/api/v0.1/oauth/token",
      body: {
        user: {
          email: userDTO.email,
          password: userDTO.password,
        },
      },
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  }

  async register(UserDTO: IUserCreate): Promise<IUserDTO> {
    const response = await this.http.request({
      method: "POST",
      url: "http://localhost:8000/api/v0.1/users",
      body: {
        rol: UserDTO.rol,
        username: UserDTO.username,
        email: UserDTO.email,
        password: UserDTO.password,
      },
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response;
  }

  getToken(): string {
    return this.storage.get("token");
  }
  removeToken(): void {
    this.storage.remove("token");
  }
  verifyToken(): boolean {
    return this.storage.verifyToken();
  }
  setToken(token: string, value: string): void {
    this.storage.set(token, value);
  }
}
