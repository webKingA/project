import { INewcityList } from '~types/cityType';
import { OrderByType } from '~types/globalType';

/**
 * @description
 * تایپ اطلاعات جستجوشده در فیلد جستجو
 */
export interface IHotelState {
	destination?: INewcityList;
	datePicker: IDateValue;
	passengers: {
		rooms: { adults: number; children: number; childrenAges: number[] }[];
		shortResult?: string;
	};
}

/**
 * @description
 * تایپ دراپ‌دان
 * - خوده المنت
 */
export interface IHotelDropdownState {
	destination: HTMLInputElement | undefined;
	datePicker: (HTMLInputElement & { openCalendar: () => void }) | undefined;
	passengers: HTMLInputElement | undefined;
}

/**
 * @description
 * تایپ فیلترهای فعال
 */
export interface IHotelFilterState {
	orderBy: OrderByType;
	priceRange: [number, number];
	search: string;
	residenceType: string[];
	stars: string[];
	serviceType: string[];
	facilities: string[];
}

/**
 * @description
 * تایپ کوئری استرینگ‌ها در صفحه هتل
 * (اطلاعاتی که کاربر جستجو کرده است)
 */
export interface IFlightQueryRouter {
	query: {
		orderBy?: OrderByType;
	};
}
