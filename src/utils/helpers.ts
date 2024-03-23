import { T_sliderItem } from "../../types";

export function calculatePercentage(value: number, percent: number): number {
	const result = Number((value - (value / 100) * percent).toFixed(2));
	return result;
}

export function calculateTotalPrice(products:T_sliderItem[]): number {
	return products.reduce((aggr, val) => {
		aggr += Number((val.count * val.price).toFixed(2));
		return aggr;
	}, 0 as number);
}
