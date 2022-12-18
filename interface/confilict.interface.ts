export interface IConflictResponse {
	count: number;
    result: IConflict[];
}

export interface IConflict {
	id: number,
      fk_SPId:  number,
      fk_COId:  number,
      fk_TMSId:  number,
      fk_CWId:  number,
      fk_AirlineId:  number,
      fk_SrcCityId:  number,
      fk_DestCityId: number,
      reserveDate: string,
      desFlightDate: string,
      adultQty: number,
      childQty:  number,
      infantQty:  number,
      flightNo:  number,
      adultTotalPrice: number,
      childTotalPrice: number,
      infantTotalPrice:  number,
      reserveStatus: string,
      reserverMobile:  string,
      mainPassengerMobile:  string,
      authorizedPayload:  string,
      crcnRules: string,
      flightType: string,
      cabinClass:  string,
      terminalNumber:  string,
      isConflictCustomer: boolean,
      isConflictCredit: boolean,
      isConflictCancelSeat: boolean,
      flightPassengerId:  number,
      isPassengerConflictCustomer: boolean,
      isPassengerConflictCredit: boolean,
      isConflictProvider: boolean,
      airlineName: string,
      srCity: string,
      dcCity: string,
      shamsiReserveDate: string,
      shamsiSrcFlightDate: string,
      shamsiDesFlightDate: string,
}

export interface IFindflightreserves{
	id:  number,
  description: string,
  fk_SPId:  number,
  fk_COId: number,
  fk_TMSId: number,
  fk_CWId: number,
  fk_AirlineId:number,
  fk_SrcCityId: number,
  fk_DestCityId: number,
  reserveDate: string,
  adultQty: number,
  childQty: number,
  infantQty: number,
  srcFlightDate:string,
  desFlightDate:string,
  flightNo: number,
  classStatus: string,
  refundStatus: string,
  aircraftType:string,
  adultTotalPrice: number,
  adultTax: number,
  adultFare: number,
  adultTaxDesc:string,
  childTotalPrice: number,
  childTax: number,
  childFare: number,
  childTaxDesc:string,
  infantTotalPrice: number,
  infantTax: number,
  infantFare: number,
  infantTaxDesc: string,
  pnr:string,
  commision: number,
  ajancyCode:  number,
  reqNo:  number,
  reqPNR: string,
  reserveRequest: string,
  reserveResponse: string,
  ipgResponse: string,
  discount: number,
  trackingNumber:string,
  reserverMobile: number,
  reserverEmail:string,
  mainPassengerMobile: string,
  authorizedPayload: string,
  crcnRules: string,
  flightType: string,
  cabinClass:string,
  terminalNumber: string,
  isConflictCustomer: true,
  isConflictCredit: false,
  isConflictCancelSeat: false,
  srcCity: string,
  destCity: string,
  airLineName: string,
  tmsName:string,
  contractOwnerName: string,
  serviceProviderName: string,
  flightPassengers: []
}