export interface IGlobalModalState {
	/**
	 * باز یا بسته بودن مودال لاگین
	 */
	isOpenLogin: boolean;
	/**
	 * باز یا بسته بودن مودال کد تایید اس‌ام‌اس شده بعد از لاگین
	 */
	isOpenVerificationCode: boolean;
	/**
	 * باز و بسته بودن مودال تعیین رمز عبور جدید
	 * برای کاربری که جدیدا ثبت نام کرده است
	 */
	isOpenSetNewPassword: boolean;
	/**
	 * باز و بسته بودن مودال لاگین با رمز عبور
	 */
	isOpenLoginWithPassword: boolean;
}
