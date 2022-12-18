export interface IRoleResualt {
  count: number;
  roles: IRole[];
}

export interface IRole {
  id: number;
  name: string;
  description: string;
  claims: IClaims[];
}

interface IClaims {
  id: number;
  roleId: number;
  claimType: string;
  claimValue: string;
}
