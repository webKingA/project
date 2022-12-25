import { atom } from 'recoil';

import { _MinimumAdultsPassenger, _MinimumChildrenPassenger, _MinimumHotelRoom } from './../utils/constants/globalConstants';
import { _MaxPriceRange, _MinPriceRange } from './../utils/constants/hotelConstants';
import { IHotelDropdownState, IHotelFilterState, IHotelState } from './../types/hotelType';

/**
 * @description
 * استیت پرواز (در فیلد جستجو) شامل
 *  - مسیر رفت
 *  - مسیر برگشت
 *  - تاریخ رفت و برگشت
 *  - تعداد نفرات
 *
 * @note
 *  - اطلاعات ذخیره شده در این استیت مرتبط به فیلدهای جستجو هست
 */
export const hotelState = atom<IHotelState>({
	key: 'hotelState',
	default: {
		destination: undefined,
		datePicker: null,
		passengers: {
			rooms: [{ adults: _MinimumAdultsPassenger, children: _MinimumChildrenPassenger, childrenAges: [] }],
			shortResult: undefined,
		},
	} as IHotelState,
});

/**
 * @description
 * باز و بسته بودن دراپ دان پرواز
 */
export const hotelDropdownState = atom<IHotelDropdownState>({
	key: 'hotelDropdownState',
	default: {
		destination: undefined,
		datePicker: undefined,
		passengers: undefined,
	},
});

/**
 * @description
 * استیت فیلتر نتایج هتل
 */
export const hotelFilterState = atom<IHotelFilterState>({
	key: 'hotelFilterState',
	default: {
		orderBy: 'cheepest',
		priceRange: [_MinPriceRange, _MaxPriceRange],
		search: '',
		residenceType: [],
		stars: [],
		serviceType: [],
		facilities: [],
	},
});
