export const formatPriceToIRR = (price: number | string) => {
	if (price === 0) return 0;
	if (!Number(price)) return;

	let IRR = Intl.NumberFormat('fa-IR', {
		style: 'currency',
		currency: 'IRR',
		// @ts-ignore: Unreachable code error
		numberingSystem: 'latn',
	}).format(+price);

	return IRR.replace('ریال ', '');
};