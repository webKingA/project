import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { useIsomorphicEffect } from '@mantine/hooks';
import { flightDropdownState, flightRouteState,flightState as flightStateStore } from '../../../state/flightsState';
import { toGregorianDate, toPersianDate } from '../../../utils/dateUtils';
import { toDateObject } from 'react-multi-date-picker';
import RangeDatePicker from './rangeDatePicker/RangeDatePicker';


/**
 * @description
 * تاریخ رفت و برگشت پرواز
 */
const FlightDatePicker = () => {
	const router = useRouter();
	const [flightRoute, setFlightRoute] = useRecoilState<any>(flightRouteState);
	const [flightState, setFlightState] = useRecoilState<any>(flightStateStore);
	const [dropdownState, setDropdownState] = useRecoilState<any>(flightDropdownState);

	/**
	 * تنظیم مقدار اولیه کامپوننت بعد از لود صفحه و قبل از رندرشدن صفحه
	 */
	useIsomorphicEffect(() => {
		if (!router.query || !router.query.departing) return;

		const departing = router.query.departing as string;
		const returning = router.query?.returning as string;

		let [departingDate, returningDate]: [any, any] = [undefined, undefined];

		/**
		 * اگر تاریخ با 14 شروع شده باشد، یعنی تاریخ شمسی هست و باید به میلادی تبدیل شود
		 * در غیراینصورت تاریخ میلادی هست و نیازی به تبدیل نیست
		 */

		if (departing.startsWith('14')) {
			departingDate = toGregorianDate(departing);
			departingDate = toPersianDate(departingDate);
		} else {
			// @ts-ignore
			departingDate = toDateObject(departing);
		}

		if (returning) {
			if (returning.startsWith('14')) {
				returningDate = toGregorianDate(returning);
				returningDate = toPersianDate(returningDate);
			} else {
				// @ts-ignore
				returningDate = toDateObject(returning);
			}
		}

		setFlightState((prev:any) => {
			return {
				...prev,
				datePicker: returning ? [departingDate, returningDate] : departingDate,
			};
		});
	}, [router.query.departing, router.query.returning]);

	return (
		<RangeDatePicker
			value={flightState.datePicker}
			setValue={(val) => {
				setFlightState((prev:any) => {
					return {
						...prev,
						datePicker: val,
					};
				});
			}}
			setRef={(ref) => {
				setDropdownState((prev:any) => {
					return {
						...prev,
						datePicker: ref,
					};
				});
			}}
			range={flightRoute.value}
			inputOnActiveReturningDate={() => {
				setFlightRoute({
					value: 'twoway',
					label: 'دو طرفه',
				});
			}}
	
			onAfterCloseDatePicker={() => {
				const datePickerInput = dropdownState.datePicker?.querySelector('input[name="departing"]') as HTMLInputElement | null;

				dropdownState.source?.blur();
				dropdownState.destination?.blur();
				datePickerInput?.blur();
				dropdownState.passengers?.blur();

				// وقتی مبدا خالی باشد
				if (!flightState.source?.value) {
					dropdownState.source?.focus();
					dropdownState.source?.click();
					return;
				}

				// وقتی مقصد خالی باشد
				if (!flightState.destination?.value) {
					dropdownState.destination?.focus();
					dropdownState.destination?.click();
					return;
				}

				// در آخر منوی مسافرین باز خواهد شد
				dropdownState.passengers?.focus();
				dropdownState.passengers?.click();
			}}
		/>
	);
};

export default FlightDatePicker;
