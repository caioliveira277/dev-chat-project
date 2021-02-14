import { AxiosResponse, IUserResponse } from 'axios';
import { Auth, IAuthEntries } from 'adapters/login';
import api from 'adapters/xhr';

export interface ISigninEntries extends IAuthEntries {
  name: string;
  password: string;
  passwordConfirmation: string;
};
export class SigninAdapter extends Auth {
  protected name: string;
  protected password: string;
  protected passwordConfirmation: string;

  constructor(entries: ISigninEntries) {
    super(entries);
    this.name = entries.name;
    this.password = entries.password;
    this.passwordConfirmation = entries.passwordConfirmation;
  }

  async register(): Promise<AxiosResponse<IUserResponse>>{
    return api.post('/user', {
      name: this.name,
      email: this.email,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    });
  }
};