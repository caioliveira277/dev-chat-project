interface IUserResponse {
  id: number;
  name: string;
  email: string;
  profile_status: string;
  profile_image: string | null;
  created_at: string;
  updated_at: string;
  token: string;
}
interface IGroupResponse {
  id: number;
  name: string;
  color: string;
  description: string;
  image: string;
  created_at: string;
  updated_at: string;
}