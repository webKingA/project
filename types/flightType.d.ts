import { FormList } from '@mantine/form';

import { Interface } from 'readline';

import { INewcityList } from '~types/cityType';
import { IDateValue } from '~types/dateType';
import { OrderByType } from '~types/globalType';

/**
 * @description
 * تایپ یک‌طرفه یا دوطرفه بودن پرواز
 */
export interface IFlightRoute {
	label: 'یک طرفه' | 'دو طرفه';
	value: 'oneway' | 'twoway';
}

/**
 * @description
 * تایپ اطلاعات جستجوشده در فیلد جستجو
 */
export interface IFlightState {
	source?: INewcityList;
	destination?: INewcityList;
	datePicker: IDateValue;
	passengers: {
		adults: number;
		children: number;
		infants: number;
	};
}

/**
 * @description
 * تایپ دراپ‌دان
 * - خوده المنت
 */
export interface IFlightDropdownState {
	source: HTMLInputElement | undefined;
	destination: HTMLInputElement | undefined;
	datePicker: (HTMLInputElement & { openCalendar: () => void }) | undefined;
	passengers: HTMLInputElement | undefined;
}

/**
 * @description
 * تایپ فیلترهای فعال
 */
export interface IFlightFilterState {
	orderBy: OrderByType;
	rangeTime: {
		range: [number, number];
		time: [string, string];
	};
	flightClass: string[];
	airLines: string[];
}

/**
 * @description
 * تایپ کوئری استرینگ‌ها در صفحه پرواز
 * (اطلاعاتی که کاربر جستجو کرده است)
 */
export interface IFlightQueryRouter {
	query: {
		sourceID: string;
		destId: string;
		departing: string;
		returning: string;
		route: 'oneway' | 'twoway';
		adult: string;
		child: string;
		infant: sting;
		orderBy?: OrderByType;
		airLines?: string;
		flightClass?: string;
		rangeTime?: string;
	};
}

/**
 * @description
 * تایپ نتایج جستجوی پرواز برای مقاصد یکطرفه و دوطرفه
 */
export interface IFlightResultData {
	fileAddress?: string;
	requestDate: string;
	shamsiRequestDate?: string;
	isSuccess: boolean;
	additionalResponseMesagge: unknown;
	requestStatus: number;
	errors: { errorCode: number; errorDescription: string; extraData: unknown; originalValue: unknown; referenceName: unknown }[];
	/**
	 * برای مقصد یک‌طرفه
	 */
	response?: null | IFlightResponseData[];
	/**
	 * برای مقصد دوطرفه
	 */
	destList?: null | IFlightResponseData[];
	sourceList?: null | IFlightResponseData[];
}

export interface IFlightResponseData {
	sourceCity: string;
	destinationCity: string;
	airLinecCode: string;
	airLine: string;
	startDate: string;
	arrivalDate: string;
	startTime: string;
	arrivalTime: string;
	miladiStartDate: string;
	miladiArrivalDate: string;
	flightNo: string;
	flightClass: string;
	adultTotalPrice: number;
	childTotalPrice: number;
	infantTotalPrice: number;
	capacity: number;
	authorizedPayload: string;
	terminal: unknown;
	classRefundStatus: string;
	aircraftTypeName: string;
	crcnRules: string[];
	flightType: string;
	discount: number;
	adultDiscountPrice: number;
	childDiscountPrice: number;
	infantDiscountPrice: number;
	paymentable: number;
	paymentableDiscount: number;
	isReservable: boolean;
	flightIdentify: string;
	classReserveStatus: string;
	cabinClass: string;
	terminalNumber: string;
}

/**
 * @description
 * اسلایدر نتایج جستجوی پرواز
 */
export interface IFlightCarouselData {
	additionalResponseMesagge: unknown;
	errors: unknown;
	fileAddress: unknown;
	isSuccess: boolean;
	requestDate: string;
	requestStatus: number;
	response: { cacheFlightAvailable: { date: string; day: string; price: string }[] };
	shamsiRequestDate: string;
}

/**
 * @description
 * تایپ بلیطی که کاربر قصد خرید آن را دارد و انتخاب کرده است
 */
export interface IFlightSelectedTicket {
	source?: IFlightResponseData;
	destination?: IFlightResponseData;
	passengers: {
		adults: number;
		children: number;
		infants: number;
	};
	passengersForm: {
		passengers: FormList<IFlightPassengerInputs> | [];
	};
	backUrl?: string;
	isSendEmail: boolean;
	email: string;
	mobileNumber: string;
	isAgree: boolean;
	hasError: boolean;
}

/**
 * @description
 * تایپ فیلدهای ورودی مسافران
 * در صفحه زیر
 *  - /flight/ticket/passengers/step1
 */
export interface IFlightPassengerInputs {
	key: string;
	nationality: 'iranian' | 'foreign';
	gender: 'male' | 'female';
	enFirstName: string;
	enLastName: string;
	ageCategory: 'نوزاد' | 'کودک' | 'بزرگسال' | 'رده سن';
	birthDate: string;
	nationalCode: string;
	faFirstName: string;
	faLastName: string;
	passportNumber: string;
	birthCountry: string;
	passportIssuingCountry: string;
	expiryDatePassport: string;
}

/**
 * @description
 * تایپ لیست مسافران پیشین
 */
export interface IFlightPreviousPassengers {
	count: number;
	customerPassengersList: {
		age: number;
		ageType: string;
		birthDayCountry: string;
		birthDayCountryId: number;
		dateOfBirth: string;
		gender: 'مرد' | 'زن';
		id: number;
		identitytType: string;
		lastName: string;
		latinFirstName: string;
		latinLastName: string;
		miladiDatoOfBirth: string;
		mobileNumber: unknown;
		name: string;
		nationalNumber: string;
		passportCountry: string;
		passportCountryId: string;
		passportExpireDate: string;
		passportNumber: string;
		passportStartDate: string;
		reserverMobile: string;
		telNumber: string;
	}[];
}

/**
 * @description
 *تایپ داده های ارسالی به سرور برای پرداخت
 */
export interface IFlightPayment {
	reserverMobile: string;
	reserverTel?: string;
	reserverEmail?: string;
	passengers: IFlightPaymentPassengers[];
	adultQty: number;
	childQty: number;
	infantQty: number;
	countOfPassenger: number;
	amount: number;
	paymentType: 1 | 2 | 3;
	flightIdentify?: string;
	sourceFlightIdentify?: string;
	destFlightIdentify?: string;
}

/**
 * @description
 * تایپ اطلاعات مسافران برای پرداخت نقدی
 */
export interface IFlightPaymentPassengers {
	firstName: string | null;
	lastName: string | null;
	latinFirstName: string;
	latinLastName: string;
	age: number | string;
	gender: 1 | 2;
	identificationType: 1 | 2;
	nationalNumber: string | null;
	passportNumber: string | null;
	dateOfBirth: string;
	miladiDatoOfBirth: string;
	passportStartDate: null;
	passportExpireDate: string | null;
	birthDayCountryId: number | null;
	passportCountryId: number | null;
	nationality: '1' | '2';
	isReserver: boolean;
	email?: string;
	phoneNumber?: string;
	// isValid?: boolean;
	// identitytType?: string;
	// id?: number;
}

/**
 * @description
 * تایپ دیتای ارسالی در صورتی که پرداخت نقدی ریسپانس داشته باشد
 */
export interface IFlightPaymentSuccessServerResponse {
	error: string;
	isSuccess: boolean;
	mellatUrl: string;
	refId: string;
}
