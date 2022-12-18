export interface reserveResponse{
	count: number,
	result: reserveObj[]
}

export interface reserveObj{
	id: number,
	currency: number,//
	currencyValue: string,//نوع ارز
	paymentType: number,//
	paymentTypeValue: string,//اعتباری نقدی
	reserveTransactionType: number,
	reserveTransactionTypeValue: string,//نوع تراکنش 
	realAmount: number,//مقدار تراکنش
	discountAmount: number,//میزان تخفیف
	spPortionAmount: number,//سهم پروایدر
	coPortionAmount: number,//سهم کانترکاونر
	hubPortionAmount: number,//سهم هاب
	tmsPortionAmount: number,//سهم آ/ژانس
	coWorkerPortionAmount: number,//سهم کاربر تجاری
	userPortionAmount: number,//سهم کاربر
	fk_ServiceInfoId: number,
	fk_SPId: number,
	providerName: number,//نام
	fk_COId: number,
	coName: string,//نام کانترکت اونر
	fk_TMSId: number,
	tmsName: string,//نام آژانس
	fk_COWorkerId: string,
	cwName: string,
	fk_UserId: number,
	userName: number,
	fk_FlightReserveId: number,
	fk_AirlineId: number,
	fk_SrcCityId: number,
	fk_DestCityId: number,
	flightNo: number,//شماره پرواز
	reserveStatus: string,
	discount: number,
	reserveDate: string,
	srcFlightDate: string,
	shamsiReserveDate: string,
	shamsiSrcFlightDate: string,
	adultQty: number,
	childQty: number,
	infantQty: number,
	adultTotalPrice: number,
	childTotalPrice: number,
	infantTotalPrice: number,
	reserverMobile: number,
	airlineName: string,
	srCity: string,
	dcCity: string
  }