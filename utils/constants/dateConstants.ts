import range from 'lodash/range';
import { todayFaDate } from '../dateUtils';


export const _GregorianLocal = {
	name: 'gregorian_en',
	months: [
		['January', 'Jan'],
		['February', 'Feb'],
		['March', 'Mar'],
		['April', 'Apr'],
		['May', 'May'],
		['June', 'Jun'],
		['July', 'Jul'],
		['August', 'Aug'],
		['September', 'Sep'],
		['October', 'Oct'],
		['November', 'Nov'],
		['December', 'Dec'],
	],
	weekDays: [
		['Saturday', 'S'],
		['Sunday', 'S'],
		['Monday', 'M'],
		['Tuesday', 'T'],
		['Wednesday', 'W'],
		['Thursday', 'T'],
		['Friday', 'F'],
	],
	digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
	meridiems: [
		['AM', 'am'],
		['PM', 'pm'],
	],
};

export const _PersianLocal = {
	name: 'persian_fa',
	months: [
		['فروردین', 'فر'],
		['اردیبهشت', 'ار'],
		['خرداد', 'خرد'],
		['تیر', 'تیر'],
		['مرداد', 'مر'],
		['شهریور', 'شه'],
		['مهر', 'مه'],
		['آبان', 'آبا'],
		['آذر', 'آذ'],
		['دی', 'دی'],
		['بهمن', 'بهم'],
		['اسفند', 'اسف'],
	],
	weekDays: [
		['شنبه', 'ش'],
		['یکشنبه', 'ی'],
		['دوشنبه', 'د'],
		['سه شنبه', 'س'],
		['چهارشنبه', 'چ'],
		['پنجشنبه', 'پ'],
		['جمعه', 'ج'],
	],
	digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
	meridiems: [
		['قبل از ظهر', 'ق.ظ'],
		['بعد از ظهر', 'ب.ظ'],
	],
};

export const _FormatDateFa = 'YYYY/MM/DD';
export const _FormatDateEn = 'MM/DD/YYYY';

export const _Days = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19',
	'20',
	'21',
	'22',
	'23',
	'24',
	'25',
	'26',
	'27',
	'28',
	'29',
	'30',
	'31',
];

export const _SolarMonth = [
	{ label: 'فروردین', value: '1' },
	{ label: 'اردیبهشت', value: '2' },
	{ label: 'خرداد', value: '3' },
	{ label: 'تیر', value: '4' },
	{ label: 'مرداد', value: '5' },
	{ label: 'شهریور', value: '6' },
	{ label: 'مهر', value: '7' },
	{ label: 'آبان', value: '8' },
	{ label: 'آذر', value: '9' },
	{ label: 'دی', value: '10' },
	{ label: 'بهمن', value: '11' },
	{ label: 'اسفند', value: '12' },
];

export const _GregorianMonth = [
	{ label: 'January', value: '1' },
	{ label: 'February', value: '2' },
	{ label: 'March', value: '3' },
	{ label: 'April', value: '4' },
	{ label: 'May', value: '5' },
	{ label: 'June', value: '6' },
	{ label: 'July', value: '7' },
	{ label: 'August', value: '8' },
	{ label: 'September', value: '9' },
	{ label: 'October', value: '10' },
	{ label: 'November', value: '11' },
	{ label: 'December', value: '12' },
];

export const _SolarYears = () => {
	const adultYears: string[] = [];
	const defualtYears: string[] = [];

	const currentYear = parseInt(todayFaDate().split('/')[0], 10);
	const minYear = currentYear - 100;
	const adultAge = 12;
	let counter = currentYear;

	while (counter >= minYear) {
		if (currentYear - adultAge >= counter) {
			adultYears.push(counter.toString());
		}

		defualtYears.push(counter.toString());
		counter = counter - 1;
	}

	return {
		adult: adultYears,
		default: defualtYears,
	};
};

export const _YearsRange = ({ start, end, step = 1 }: { start: number; end: number; step: number }): string[] => {
	if (!start || !end || start === 0 || end === 0 || step === 0) return [];

	return range(start, end, step).map((i) => i.toString());
};
