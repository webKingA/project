import { DateObject } from 'react-multi-date-picker';

import { Button } from '@mantine/core';

import classNames from 'classnames';

function getLocaleName(locale: any) {
	if (!locale || !locale.name) return '';

	return locale.name.split('_')[1];
}

const allNames: any = {
	en: {
		from: 'Departure',
		to: 'Return',
		confirm: 'Confirm',
		close: 'Close',
		today: "Today's date",
		solar: 'Solar',
		gregorian: 'Gregorian',
	},
	fa: {
		from: 'رفت',
		to: 'برگشت',
		confirm: 'تایید',
		close: 'بستن',
		today: 'تاریخ امروز',
		solar: 'شمسی',
		gregorian: 'میلادی',
	},
};

const Footer = ({ state, position, closeFun }: any) => {
	const direction: String = ['fa', 'ar'].includes(getLocaleName(state.date.locale)) ? 'rtl' : 'ltr';
	const format: String = direction === 'rtl' ? 'DD MMMM' : 'DD MMM.';

	const {
		selectedDate,
		date: { locale },
		range,
	} = state;

	let from,
		to = undefined;

	if (range) {
		from = selectedDate[0]?.format?.(format);
		to = selectedDate[1]?.format?.(format);
	} else {
		from = selectedDate?.format?.(format);
		to = undefined;
	}

	const isFaOrEn: string = getLocaleName(locale);
	const localeNames = allNames[isFaOrEn] || allNames.fa;

	return (
		<footer className={`range-picker__footer ${direction} ${position}`}>
			<div className="d-flex flex-row justify-content-between align-items-center py-2 px-3">
				<div className="text-black d-flex flex-row align-items-centee justify-content-start">
					{from && (
						<>
							<p className="px-1">{localeNames.from}</p>
							<p>{from}</p>
						</>
					)}
					{to && (
						<>
							<p className="px-1">-</p>
							<p className="px-1">{localeNames.to}</p>
							<p>{to}</p>
						</>
					)}
				</div>
				<Button variant="filled" color="blue2" compact onClick={() => closeFun()} className="btn-close-calendar">
					{(range && selectedDate.length === 2) || (!range && from) ? localeNames.confirm : localeNames.close}
				</Button>
			</div>
		</footer>
	);
};

const Header = ({ state, handleChange, position, handleFocusedDate, DatePicker, dateType, setDateType, handlePropsChange }: any) => {
	const direction: String = ['fa', 'ar'].includes(getLocaleName(state.date.locale)) ? 'rtl' : 'ltr';
	const {
		range,
		date: { locale },
	} = state;
	const isFaOrEn: string = getLocaleName(locale);
	const localeNames = allNames[isFaOrEn] || allNames.fa;

	function selectToday() {
		let { calendar, format, selectedDate } = state,
			today = new DateObject({ calendar, locale, format });

		if (range) {
			if (!selectedDate) selectedDate = [];

			if (selectedDate.length === 0) {
				selectedDate.push(today);
			} else if (selectedDate.length === 2) {
				selectedDate = [today];
			} else if (selectedDate.length === 1) {
				selectedDate.push(today);
				selectedDate.sort((a: number, b: number) => a - b);
			}
		} else {
			selectedDate = today;
		}

		handleChange(selectedDate, { ...state, selectedDate });
		handleFocusedDate(today);
	}

	const handleChangeDateType = (type: string) => {
		let { calendar, format, selectedDate } = state,
			today = new DateObject({ calendar, locale, format });

		handleChange(selectedDate, { ...state, selectedDate });
		handleFocusedDate(today);
		setDateType(type);
	};

	return (
		<header className={`range-picker__header ${direction} ${position}`}>
			<div className="d-flex flex-row justify-content-between align-items-center py-2 px-3">
				<div className="wrapper d-flex flex-row gap-2">
					<Button
						variant="filled"
						color="blue2"
						compact
						onClick={() => handleChangeDateType('persian')}
						className={classNames({ active: dateType === 'persian' }, 'btn-change-date-type')}
					>
						{localeNames.solar}
					</Button>

					<Button
						variant="filled"
						color="blue2"
						compact
						onClick={() => handleChangeDateType('gregorian')}
						className={classNames({ active: dateType === 'gregorian' }, 'btn-change-date-type')}
					>
						{localeNames.gregorian}
					</Button>
				</div>

				<Button variant="filled" color="blue2" compact onClick={selectToday}>
					{localeNames.today}
				</Button>
			</div>
		</header>
	);
};

export { Footer, Header };
