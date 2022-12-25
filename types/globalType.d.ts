import { OrderBy } from '~components/orderBy/orderBy';

/**
 * @description
 * تایپ کوئری استرینگ
 */
export interface IQuerySearch {
	sourceID: string;
	destId: string;
	departing: string;
	route: string;
	adult: string;
	child: string;
	infant: string;
}

/**
 * @description
 * تایپ مرتب‌سازی
 */
export type OrderByType = 'soonest' | 'lastest' | 'cheepest' | 'expensive';

/**
 * @description
 * تایپ لیست کشورها
 */
export type CountryListType = { id: number; name: string; isParent: boolean; value: string }[] | [];
