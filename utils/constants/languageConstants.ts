import { ILanguage } from './../../types/languageType';

export const _LanguageLists: ILanguage[] = [
	{
		label: 'فارسی',
		value: 'fa',
		image: '/images/flags/ir.svg',
	},
	{
		label: 'انگلیسی',
		value: 'en',
		image: '/images/flags/gb.svg',
	},
	{
		label: 'عربی',
		value: 'ae',
		image: '/images/flags/ae.svg',
	},
];

export const activeLanguage: ILanguage = _LanguageLists[0];
