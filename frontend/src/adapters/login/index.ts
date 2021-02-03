import { AxiosResponse, IUserResponse } from 'axios';
import api from 'adapters/xhr';

export interface IAuthEntries {
  email: string;
  password: string;
};
export class Auth {
  email: string
  password: string;

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
};