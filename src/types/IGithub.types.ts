export interface IGetParams {
  since: number;
  pagination: number;
}

export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: any | null;
  blog: string;
  location: any | null;
  email: any | null;
  hireable: any | null;
  bio: any | null;
  twitter_username: any | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface IRepo {
  id: number;
  name: string;
  html_url: string;
}
