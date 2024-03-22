export type T_navRoute = {
	id: number;
	title: string;
	href: string;
};

export type T_characteristic = {
	title: string;
	value: string;
};

export type T_sliderItem = {
	id: number;
	title: string;
	url: string;
	price: number;
	count: number;
	availableCount: number;
	characteristics: T_characteristic[];
	description: string;
};

export type T_product = {
	id: number;
	title: string;
};

export type T_products = {
	title: string;
	categories: T_product[];
};

export interface sliderState {
	products: T_sliderItem[];
}
