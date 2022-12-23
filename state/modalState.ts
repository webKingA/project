import { atom } from 'recoil';

import { IGlobalModalState } from '~types/modalType';

/**
 * @description
 * استیت مودال گلوبال (برای باز و بسته شدن مودال) که شامل:
 * 	- مودال لاگین
 */
export const globalModalState = atom<IGlobalModalState>({
	key: 'globalModalState',
	default: {
		isOpenLogin: false,
		isOpenVerificationCode: false,
		isOpenSetNewPassword: false,
		isOpenLoginWithPassword: false,
	},
});

/**
 * @description
 * شماره موبایلی که کاربر برای لاگین وارد کرده است:
 */
export const mobileNumberState = atom<string>({
	key: 'mobileNumberState',
	default: '',
});
