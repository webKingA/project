export interface IUserResualt {
  roles: IRole[];
  users: {
    count: number;
    users: IUser[];
  };
}

export interface IUser {
  email: string;
  firstName: string;
  id: number;
  isActive: boolean;
  lastName: null;
  phoneNumber: string;
  userName: string;
  password: string;
  confirmPassword: string;
  claims?:string;
}

export interface IRole {
  claims: Iclaims[];
  description: string;
  id: number;
  name: string;
}

interface Iclaims {
  id: number;
  roleId: number;
  claimType: string;
  claimValue: string;
}
