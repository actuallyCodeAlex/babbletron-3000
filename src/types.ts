export enum NavOptions {
  Home = "Home",
  Repositories = "Repositories",
  Settings = "Settings",
}

export enum OwnerType {
  User = "User",
}

export type Owner = {
  id: number;
  login: string;
  type: OwnerType;
};

export type Repository = {
  description: null | string;
  id: number;
  name: string;
  owner: Owner;
  private: boolean;
  url: string;
};
