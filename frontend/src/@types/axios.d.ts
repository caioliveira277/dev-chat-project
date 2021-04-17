import 'axios';

declare module 'axios' {
  export interface IUserResponse {
    id: number;
    name: string;
    email: string;
    profile_status: string;
    profile_image: string | null;
    created_at: string;
    updated_at: string;
    token: string;
  }
  export interface IGroupResponse {
    id: number;
    name: string;
    color: string;
    description: string;
    image: string;
    created_at: string;
    updated_at: string;
  }
}