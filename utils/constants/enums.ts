/**
 * @description
 * جنسیت
 */
export enum GenderEnum {
	Man = 1,
	Woman = 2,
}

/**
 * @description
 * ملیت
 */
export enum NationalityEnum {
	Iranian = '1',
	Foreign = '2',
}

/**
 * @description
 * نوع پرداخت
 *  - اعتباری
 *  - کیف پول
 *  - نقدی
 */
export enum PaymentTypeEnum {
	Etebari = 1,
	Kifepool = 2,
	Naghdi = 3,
}

/**
 * @description
 * نوع احراز هویت
 *  - کدملی
 *  - پاسپورت
 */
export enum IdentificationTypeEnum {
	NationalCode = 1,
	Passport = 2,
}

export enum ICancelSeatStatusEnum {
	Null = 0,
	Possible = 1,
	PossibleConditional = 2,
	NotPossible = 3,
}
