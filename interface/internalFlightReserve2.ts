export interface IinternalFlightObj {
	id: number; //تو جدول نباشه
	description: string; //نمی خواد
  
	fk_SPId: number; //تو جدول نباشه
	fk_COId: number;
	fk_TMSId: number;
	fk_CWId: string;
	fk_AirlineId: string;
	fk_SrcCityId: number;
	fk_DestCityId: number;
  
	reserveDate: string; // تاریخ رزرو
  
	adultQty: number; //
	childQty: number;
	infantQty: number;
  
	srcFlightDate: string; // تاریخ سفر
	desFlightDate: string; // تاریخ رسیدن به مقصد
  
	flightNo: number; // شماره پرواز
  
	classStatus: string; // کلاس پروازی
  
	refundStatus: string; // وضعیت عودت وجه
  
	aircraftType: string; // نوع هواپیما
  
	adultTotalPrice: number; // قیمت کل بزرگسال
  
	adultTax: number; // نمی خواد
	adultFare: number; // نمی خواد
	adultTaxDesc: string; // نم یخواد
  
	childTotalPrice: number;
	childTax: number;
	childFare: number;
	childTaxDesc: string;
	infantTotalPrice: number;
	infantTax: number;
	infantFare: number;
	infantTaxDesc: string;
  
	reserveStatus: string; // وضعیت رزرو
  
	pnr: string; // pnr
  
	commision: number; //نمی خواد
	ajancyCode: string; //نم یخو.اد
	reqNo: string; //نمی خواد
	reqPNR: string; //نمیخواد
	reserveRequest: string; //نمیخواد
	reserveResponse: string; //نمیخواد
	ipgResponse: string; //نمیخواد
	discount: number; //نمیخواد
	trackingNumber: string; // شماره پیگیری
	reserverMobile: string;
	reserverEmail: string;
	mainPassengerMobile: string;
	authorizedPayload: string; // بار مجاز
  
	crcnRules: string; //جزئیات قوانین کنسلیشن
  
	flightType: string; //نوع پرواز
	cabinClass: string; // خودش
	terminalNumber: string; // شماره ترمینال
  
	isConflictCustomer: boolean; //جزئیات
	// مغایرت مالی مشتری
	isConflictCredit: boolean;
	// مغایرت مالی اعتبارات
	isConflictCancelSeat: boolean;
	// مغایرت مالی کنسلی
  
	srCity: string;
	dcCity: string;
  
	airlineName: string;
	tmsName: string; // نام آژانس
	contractOwnerName: string; // نمی خواد
	serviceProviderName: string; // نام پروایدر


	shamsiReserveDate: string; //
	shamsiSrcFlightDate: string; //
	shamsiDesFlightDate: string; //
	totalPayment: string; //
	totalRefund: string; //
  }