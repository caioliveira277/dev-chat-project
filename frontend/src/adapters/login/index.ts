import { AxiosResponse } from 'axios';
import api from 'adapters/xhr';

export interface IAuthEntries {
  email: string;
  password: string;
};
export class Auth {
  protected email: IAuthEntries['email'];
  protected password: IAuthEntries['password'];

  constructor(entries: IAuthEntries) {
    this.email = entries.email;
    this.password = entries.password;
  }

  async getAccess(): Promise<AxiosResponse<IUserResponse>>{
    return api.post('/auth', {
      email: this.email,
      password: this.password
    });
  }
  
  static async getAccessWithToken(): Promise<AxiosResponse<IUserResponse>>{
    return api.post('/auth-token');
  }

  static saveToken(token: string): void {
    sessionStorage.setItem('auth', token);
  }

  static getToken(): string|null {
    const token = sessionStorage.getItem('auth');
    return token;
  }

  static removeToken(): void {
    sessionStorage.removeItem('auth');
  }
};