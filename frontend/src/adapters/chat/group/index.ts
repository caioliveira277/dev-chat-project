import { AxiosResponse } from 'axios';
import api from 'adapters/xhr';

export interface IGroupEntries {
  userId?: number;
};

export class Group {
  protected userId: IGroupEntries['userId'];

  constructor(entries: IGroupEntries) {
    this.userId = entries.userId;
  }

  async getUserGroups(): Promise<AxiosResponse<IGroupResponse[]>>{
    return api.get(`/find-user-groups/${this.userId}`);
  }
};