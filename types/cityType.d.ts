export interface IcityList {
	id: number;
	description: string;
	name: string;
	code: string;
	fk_OstanId: number;
	isPriority: boolean;
	searchAvailability: string;
	ostan: {
		id: number;
		name: string;
		fk_CountryId: number;
		country: unknown;
	};
	airports: [];
}

export type INewcityList = IcityList & {
	value: string;
	group: string;
};

export interface ICityData {
	count: number;
	cityList: INewcityList[];
	limit?: number;
}
