export type UserLoginDataType = {
	userName?: string;
	fullName?: string;
};
export interface IAuth {
	isLogin: boolean;
	data: UserLoginDataType;
}
