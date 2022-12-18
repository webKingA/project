export enum ERequest {
	GET = "get",
	POST = "post",
	PUT = "put",
	PATCH = "patch",
	DELETE = "delete",
	HEAD = "head",
  }
  
  export enum EAccess {
	Test = "test",
	UserMangment = "userManagment",
	RoleManagment = "RoleManagment",
	Admin ="Admin"
  }  

  export const sampleListAccess = [EAccess.Admin, EAccess.RoleManagment , EAccess.Test , EAccess.UserMangment ]


  export const PERSIAN_LOCAL = {
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



export const listReserveStatus=[
 "رزرو قطعی",
 "رزرو موقت شکست خورده همراه با دریافت وجه از مشتری",
"رزرو موقت موفق همراه دریافت وجه از مشتری",
"رزرو موقت",
"کنسل شدن رزرو موقت",
"رزرو قطعی شکست خورده بدون دریافت پول از مشتری و بدون تبادلات مالی"
]

export const TitleOfTabel:any={
	id:"شناسه",
  description: "توضیحات",
  fk_SPId: "fk_SPId",
  fk_COId: "fk_COId",
  fk_TMSId: "fk_TMSId",
  fk_CWId: "fk_CWId",
  fk_AirlineId: "fk_AirlineId",
  fk_SrcCityId: "fk_SrcCityId",
  fk_DestCityId: "fk_DestCityId",

  reserveDate:"تاریخ رزرو",

  adultQty: "تعداد بزرگسال",
  childQty: "تعداد کودک",
  infantQty: "تعداد نوزاد",

  srcFlightDate: "تاریخ سفر",
  desFlightDate: "تاریخ برگشت",

  flightNo: "شماره پرواز",

  classStatus: "کلاس پروازی",

  refundStatus: "وضعیت عودت وجه",

  aircraftType: "نوع هواپیما",

  adultTotalPrice: "قیمت کل بزرگسال",

  adultTax: "adultTax",
  adultFare: "adultFare",
  adultTaxDesc: "adultTaxDesc",
  childTotalPrice: "childTotalPrice",
  childTax: "childTax",
  childFare: "childFare",
  childTaxDesc: "childTaxDesc",
  infantTotalPrice: "infantTotalPrice",
  infantTax: "infantTax",
  infantFare: "infantFare",
  infantTaxDesc: "infantTaxDesc",

  reserveStatus: "وضعیت رزرو",

  pnr: "pnr",

  commision:"commision",
  ajancyCode: "ajancyCode",
  reqNo: "reqNo",
  reqPNR: "reqPNR",
  reserveRequest: "reserveRequest",
  reserveResponse: "reserveResponse",
  ipgResponse: "ipgResponse",
  discount: "discount",
  trackingNumber: "شماره پیگیری",
  reserverMobile: "موبایل رزرو کننده",
  reserverEmail: "ایمیل رزرو کننده",
  mainPassengerMobile: "شماره موبایل اصلی",
  authorizedPayload: "بار مجاز",

  crcnRules: "جزئیات قوانین کنسلیشن",

  flightType: "نوع پرواز",
  cabinClass: "cabinClass",
  terminalNumber: "شماره ترمینال",

  isConflictCustomer: "مغایرت مالی مشتری",
    // مغایرت مالی مشتری
  isConflictCredit: "مغایرت مالی اعتبارات",
  // مغایرت مالی اعتبارات
  isConflictCancelSeat: "مغایرت مالی کنسلی",
  // مغایرت مالی کنسلی

  srCity: "شهر مبدا",
  dcCity: "شهر مقصد",

  airlineName: "نام ایرلاین",
  tmsName:"نام آژانس",
  contractOwnerName: "contractOwnerName",
  serviceProviderName: "نام پروایدر",
  flightPassengers: "flightPassengers",

  shamsiReserveDate: "تاریخ رزرو", //
	shamsiSrcFlightDate: "تاریخ مسیر رفت", //
	shamsiDesFlightDate: "تاریخ مسیر بازگشت",//
	totalPayment: "میانگین قابل پرداخت", //
	totalRefund: "totalRefund", //
}

export const HiddenTd=[
	"id","description","fk_SPId","fk_COId","fk_TMSId","fk_CWId",
	"fk_AirlineId","fk_SrcCityId","fk_DestCityId","adultTax",
	"adultFare","adultTaxDesc","commision","ajancyCode","reqNo",
	"reqPNR","reserveRequest","reserveResponse","ipgResponse",
	"discount","flightPassengers","childTaxDesc","infantTaxDesc","reserveDate",
	"srcFlightDate","desFlightDate","childTotalPrice","childTax","childFare",
	"infantTotalPrice","infantTax","infantFare","crcnRules"
];

export const hasCopyReserve=[
	"trackingNumber","reserverMobile","reserveStatus","srcCity","destCity","tmsName","airLineName"
]