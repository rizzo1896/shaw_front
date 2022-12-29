import { IGetParams, IUser, IRepo } from "../types/IGithub.types";
import { api } from "./api";

export class GitHubServices {
  async get({ since, pagination }: IGetParams): Promise<IUser[]> {
    const { data } = await api.get(
      `/users?since=${since}&per_page=${pagination}`
    );
    return data;
  }

  async getUser(username: string): Promise<IUser> {
    const { data } = await api.get(`/users/${username}/details`);
    return data;
  }

  async getRepos(username: string): Promise<IRepo[]> {
    const { data } = await api.get(`/users/${username}/repos`);
    return data;
  }
}
