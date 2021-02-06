import { AxiosResponse, IUserResponse } from 'axios';
import { Auth, IAuthEntries } from 'adapters/login';
import api from 'adapters/xhr';

export interface ISigninEntries extends IAuthEntries {
  name: string;
  password: string;
  password_confirmation: string;
};
export class SigninAdapter extends Auth {
  protected name: string;
  protected password: string;
  protected password_confirmation: string;

  constructor(entries: ISigninEntries) {
    super(entries);
    this.name = entries.name;
    this.password = entries.password;
    this.password_confirmation = entries.password_confirmation;
  }

  async register(): Promise<AxiosResponse<IUserResponse>>{
    return api.post('/user', {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
    });
  }
};