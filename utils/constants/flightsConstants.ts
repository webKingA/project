import { IFlightRoute } from '~types/flightType';

export const _FlightRouteList: IFlightRoute[] = [
	{
		label: 'یک طرفه',
		value: 'oneway',
	},
	{
		label: 'دو طرفه',
		value: 'twoway',
	},
];

export const defaultFlightRoute: IFlightRoute = _FlightRouteList[0];
