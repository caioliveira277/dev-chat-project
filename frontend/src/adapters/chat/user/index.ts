import { AxiosResponse } from 'axios';
import api from 'adapters/xhr';

type userId = number;
export interface IUpdateUser {
  name: string;
  profile_image?: string;
  profile_status: string;
  password?: string;
};

export class User {
  private userId: userId;

  constructor(userId: userId) {
    this.userId = userId;
  }

  async updateUser(parms: IUpdateUser): Promise<AxiosResponse<IUserResponse>>{
    return api.put(`/user/${this.userId}`, {
      ...parms
    });
  }
};