export const _OneSecond = 1000;

export const _MinInMs = 60 * 1000;

export const _DayInMs = 24 * 60 * 60 * 1000;

export const _OneYear = 365.25;

export const _OneMonth = +(_OneYear / 12).toFixed(4);

export const _ExpStorageDay = _DayInMs * 7;

export const _MaximumCitiesHistory = 3;

export const _DropdownOffsetTop = 20;

export const _MaximumPassenger = 9;

export const _MinimumAdultsPassenger = 1;

export const _MinimumChildrenPassenger = 0;

export const _MinimumInfantsPassenger = 0;

export const _MinimumHotelRoom = 1;

/**
 * @description
 * لیست ملزومات رمز عبور که باید حداقل دارای این کاراکترها باشد
 */
export const _PasswordRequirements = [
	{ re: /\d/, label: 'حداقل یک عدد داشته باشد.' },
	{ re: /[a-z]/, label: 'حداقل یک حرف کوچک انگلیسی داشته باشد.' },
	{ re: /[A-Z]/, label: 'حداقل یک حرف بزرگ انگلیسی داشته باشد.' },
	{ re: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, label: 'حداقل یک کاراکتر خاص داشته باشد.' },
];

export const _MinimumPasswordLength = 8;
