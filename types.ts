export type T_navRoute = {
	id: number;
	title: string;
	href: string;
};

export type T_characteristic = {
	id: number;
	title: string;
	value: string;
};

export type T_sliderItem = {
	id: number;
	url: string;
};

export type T_product = {
	id: number;
	title: string;
};

export type T_products = {
	title: string;
	categories: T_product[];
};

export interface counterState {
	count: number;
	price: number;
}

export interface ContextType {
	state: counterState;
	dispatch: React.Dispatch<{ type: string }>;
}
