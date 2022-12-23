import type { DateType } from 'react-date-object';
import gregorian from 'react-date-object/calendars/gregorian';
import persian from 'react-date-object/calendars/persian';
import { DateObject } from 'react-multi-date-picker';
import { _FormatDateEn, _FormatDateFa, _GregorianLocal, _PersianLocal } from './constants/dateConstants';
import { _DayInMs, _OneMonth, _OneYear } from './constants/globalConstants';


/**
 * تاریخ دو ورودی را بررسی می‌کند
 *
 * - برگرداند: یعنی تاریخ ورودی اول از تاریخ دوم بزرگتر است true اگر مقدار
 * - برگرداند: یعنی تاریخ ورودی اول از تاریخ دوم کوچکتر است false اگر مقدار
 */
export function dateCompare(d1: Date | string | number | undefined, d2: Date | string | number | undefined): boolean {
	if (!d1 || !d2) return false;

	const date1 = new Date(d1).getTime();
	const date2 = new Date(d2).getTime();

	// date1 is greater than date2
	return date1 > date2;
}

/**
 * تاریخ انقضا را ایجاد می‌کند و به صورت ایزو برمی‌گرداند (بر اساس زمان حال)
 *
 * @param expireTime (به صورت میلی‌ثانیه باید باشد) مقداری که باید به زمان تاریخ حال اضافه کند
 *
 * - اگر مقداری وارد نشده باشد، یک روز به زمان حال اضافه می‌کند
 */
export function setExpireDate(expireTime: number = _DayInMs): string {
	const now = Date.now();
	const expireDate = new Date(now + expireTime);

	return expireDate.toISOString();
}

/**
 * @description
 * تبدیل تاریخ میلادی به شمسی
 */
export const toPersianDate = (date: DateType): DateObject => {
	return new DateObject({ calendar: gregorian, date }).convert(persian, _PersianLocal);
};

/**
 * @description
 * تبدیل تاریخ شمسی به میلادی
 */
export const toGregorianDate = (date: DateType): DateObject => {
	return new DateObject({ calendar: persian, date }).convert(gregorian, _GregorianLocal);
};

/**
 * @description
 * تبدیل تاریخ به آبجکت دیت
 */
export const toDateObject = (date: DateType): DateObject => {
	return new DateObject({ date });
};

/**
 * @description
 * تاریخ روز را به شمسی برمی‌گرداند
 * @returns {DateObject}
 */
export const todayFaDate = () => {
	return new DateObject({ calendar: persian, locale: _PersianLocal }).format(_FormatDateFa);
};

/**
 * @description
 * تاریخ روز را به میلادی برمی‌گرداند
 * @returns {DateObject}
 */
export const todayEnDate = () => {
	return new DateObject({ calendar: gregorian, locale: _GregorianLocal }).format(_FormatDateEn);
};

/**
 * محاسبه زمان در طول مسیر بودن
 * @param startTime زمان حرکت
 * @param endTime زمان رسیدن به مقصد
 *
 * @example
 * 	("2022-07-03T08:15:00", "2022-07-03T09:15:00") => '01:00'
 */
export const calculateRouteTime = (startTime: string, endTime: string): string => {
	const startToTime: number = new Date(startTime).getTime();
	const endToTime: number = new Date(endTime).getTime();
	const diff: number = endToTime - startToTime;

	const HourToMs: number = 1000 * 60 * 60;

	const days: number = Math.floor(diff / (HourToMs * 24)) * 24;
	const hours: number = Math.floor((diff / HourToMs) % 24);
	const minutes: number = (diff / (1000 * 60)) % 60;

	const routeHoure: string = `0${days + hours}`.slice(-2);
	const routeMinutes: string = `0${minutes}`.slice(-2);

	return `${routeHoure}:${routeMinutes}`;
};

/**
 * @description
 * سن وارد شده را به صورت بزرگسال، خردسال و نوزاد بازمی‌گرداند
 *
 * @param birthday تاریخ تولد
 */
export const calculateAge = (birthday: string): { ageNumber: number; ageCategory: 'نوزاد' | 'کودک' | 'بزرگسال' } => {
	const today = new Date().setHours(0, 0, 0, 0);
	const isGregorian = birthday.startsWith('19') || birthday.startsWith('20');

	const birthDate = isGregorian
		? new Date(birthday).getTime()
		: toGregorianDate(birthday).setHour(0).setMinute(0).setSecond(0).setMillisecond(0).valueOf();

	const age = parseFloat(((today - birthDate) / (_DayInMs * _OneYear)).toFixed(2));

	if (age <= 2)
		return {
			ageNumber: age,
			ageCategory: 'نوزاد',
		};

	if (age <= 11.99)
		return {
			ageNumber: age,
			ageCategory: 'کودک',
		};

	return {
		ageNumber: age,
		ageCategory: 'بزرگسال',
	};
};

/**
 * @description
 * تاریخ را وارد می‌کند و به صورت سال و ماه و روز بازمی‌گرداند
 *
 * @param date تاریخ ورودی
 */
export const calculateOld = (date: string): { year: number; month: number; day: number } => {
	const today = new Date().setHours(0, 0, 0, 0);
	const isGregorian = date.startsWith('19') || date.startsWith('20');

	const birthDate = isGregorian
		? new Date(date).getTime()
		: toGregorianDate(date).setHour(0).setMinute(0).setSecond(0).setMillisecond(0).valueOf();

	const diffInMillisecond = birthDate - today;
	const daysOld = Math.floor((diffInMillisecond % (_DayInMs * _OneYear)) / _DayInMs);

	const year = Math.floor(diffInMillisecond / (_DayInMs * _OneYear));
	const month = Math.floor(daysOld / _OneMonth);
	const day = Math.floor(daysOld % _OneMonth);

	return {
		year,
		month,
		day,
	};
};
