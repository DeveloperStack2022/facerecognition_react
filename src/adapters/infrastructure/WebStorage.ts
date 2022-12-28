import { IStorage } from "./interface/IStorage";
class WebStorage implements IStorage {
  private storage: any;

  constructor(storage: any) {
    this.storage = storage;
  }

  get(name: string): string {
    return this.storage.getItem(name);
  }
  remove(name: string): void {
    return this.storage.removeItem(name);
  }
  set(name: string, value: string): void {
    this.storage.setItem(name, value);
  }

  verifyToken(): boolean {
    let token = this.storage.getItem("token");
    if (!token) return false;
    return true;
  }
}

export default WebStorage;
