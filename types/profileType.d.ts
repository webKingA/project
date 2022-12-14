/**
 * @description
 * تایپ صفحه پروفایل کاربری - بخش تراکنش ها
 */
export interface IDataProfileTransactions {
	count: number;
	flightReservesList: {
		id: number;
		description: unknown;
		fk_SPId: number;
		fk_COId: number;
		fk_TMSId: number;
		fk_CWId: unknown;
		fk_AirlineId: unknown;
		fk_SrcCityId: number;
		fk_DestCityId: number;
		reserveDate: string;
		adultQty: number;
		childQty: number;
		infantQty: number;
		srcFlightDate: string;
		desFlightDate: string;
		flightNo: string;
		classStatus: string;
		refundStatus: string;
		aircraftType: string;
		adultTotalPrice: number;
		adultTax: number;
		adultFare: number;
		adultTaxDesc: unknown;
		childTotalPrice: number;
		childTax: number;
		childFare: number;
		childTaxDesc: unknown;
		infantTotalPrice: number;
		infantTax: number;
		infantFare: number;
		infantTaxDesc: unknown;
		reserveStatus: string;
		pnr: string;
		commision: number;
		ajancyCode: unknown;
		reqNo: unknown;
		reqPNR: unknown;
		reserveRequest: JSON.stringify;
		reserveResponse: JSON.stringify;
		ipgResponse: unknown;
		discount: number;
		trackingNumber: string;
		reserverMobile: string;
		reserverEmail: string;
		mainPassengerMobile: string;
		authorizedPayload: unknown;
		crcnRules: unknown;
		flightType: unknown;
		cabinClass: unknown;
		terminalNumber: unknown;
		isConflictCustomer: boolean;
		isConflictCredit: boolean;
		isConflictCancelSeat: boolean;
		srcCity: string;
		destCity: string;
		airLineName: unknown;
		tmsName: string;
		contractOwnerName: string;
		serviceProviderName: string;
		flightPassengers: any[];
	}[];
}
