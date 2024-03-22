export function calculatePercentage(value: number, percent: number): number {
	const result = Number((value - (value / 100) * percent).toFixed(2));
	return result;
}

