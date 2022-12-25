import { atom } from 'recoil';
import { defaultFlightRoute } from '../utils/constants/flightsConstants';
import { _MinimumAdultsPassenger, _MinimumChildrenPassenger, _MinimumInfantsPassenger } from '../utils/constants/globalConstants';


/**
 * @description
 * استیت یک‌طرفه یا دوطرفه بودن مسیر
 */
export const flightRouteState = atom<any>({
	key: 'flightRouteState',
	default: defaultFlightRoute,
});

/**
 * @description
 * استیت پرواز (آیتمی که کاربر انتخاب کرده است) شامل
 *  - مسیر رفت
 *  - مسیر برگشت
 *  - تاریخ رفت و برگشت
 *  - تعداد نفرات
 *  - یک طرفه یا دوطرفه بودن
 *
 * @note
 *  - اطلاعات دخیره شدن در این استیت مرتبط به سبد خرید هست
 *  - آیتمی که کاربر قصد خرید آن بلیط را دارد
 */
export const flightSelectedTicketState = atom<any>({
	key: 'flightSelectedTicketState',
	default: {
		source: undefined,
		destination: undefined,
		passengers: {
			adults: 1,
			children: 0,
			infants: 0,
		},
		passengersForm: {
			passengers: [],
		},
		backUrl: undefined,
		isSendEmail: false,
		email: '',
		mobileNumber: '',
		isAgree: false,
		hasError: false,
	},
});

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
export const flightState = atom<any>({
	key: 'flightState',
	default: {
		source: undefined,
		destination: undefined,
		datePicker: null,
		passengers: {
			adults: _MinimumAdultsPassenger,
			children: _MinimumChildrenPassenger,
			infants: _MinimumInfantsPassenger,
		},
	} as any,
});

/**
 * @description
 * باز و بسته بودن دراپ دان پرواز
 */
export const flightDropdownState = atom<any>({
	key: 'flightDropdownState',
	default: {
		source: undefined,
		destination: undefined,
		datePicker: undefined,
		passengers: undefined,
	},
});

/**
 * @description
 * استیت فیلتر نتایج پرواز
 */
export const flightFilterState = atom<any>({
	key: 'flightFilterState',
	default: {
		orderBy: 'cheepest',
		rangeTime: {
			range: [0.5, 24],
			time: ['00:30', '24:00'],
		},
		flightClass: [],
		airLines: [],
	},
});
