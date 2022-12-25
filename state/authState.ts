import { atom } from 'recoil';

import { IAuth } from './../types/authType';

/**
 * @description
 * استیت لاگین بودن یا نبودن کاربر
 */
export const authState = atom<IAuth>({
	key: 'authState',
	default: {
		isLogin: false,
		data: {
			userName: undefined,
			fullName: undefined,
		},
	},
});
