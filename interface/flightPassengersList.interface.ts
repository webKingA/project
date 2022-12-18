export interface IFlightPassengersList {
	count: number;
	flightPassengersList: IFlightPassengers[];
  }

  export interface IFlightPassengers{
	id: number;
	isReserver: boolean;
	isCanceled: boolean;
	ticketNumber: string;
	status: string;
	refundedAmount: string;
	penaltyValue: string;
	penaltyPercent: string;
	paymentAmount: string;
	paymentDiscountAmount: string;
	lp: string;
	ku: string;
	fk_FlightReserveId: number;
	fk_CustomerPassengersId: number;
	isConflictCustomer: boolean;
	isConflictCredit: boolean;
	isConflictProvider: boolean;
	customerPassenger: ICustomerPassenger;
  }

  export interface ICustomerPassenger{
	id: number;
	reserverMobile: string;
	name: string;
	lastName: string;
	latinFirstName: string;
	latinLastName: string;
	nationalNumber: string;
	dateOfBirth: string;
	passportNumber: string;
	identitytType: string;
	gender: string;
	age: string;
	ageType:string;
	mobileNumber: string;
	telNumber: string;
	passportStartDate: string;
	passportExpireDate: string;
	birthDayCountryId: string;
	birthDayCountry: string;
	passportCountryId: string;
	passportCountry: string;
	miladiDatoOfBirth: string
}