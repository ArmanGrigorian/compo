// LETS IMAGINE THAT THIS DATA IS IN THE DATABASE

import { T_characteristic, T_navRoute, T_products } from "./types";

export const navRoutesData: T_navRoute[] = [
	{
		id: 1,
		title: "Мои заказы",
		href: "#",
	},
	{
		id: 2,
		title: "Сотрудники",
		href: "#",
	},
	{
		id: 3,
		title: "Шаблоны заказов",
		href: "#",
	},
	{
		id: 4,
		title: "Обращения",
		href: "#",
	},
];

export const characteristicsData: T_characteristic[] = [
	{
		id: 1,
		title: "Код поставщика",
		value: "ELC00696",
	},
	{
		id: 2,
		title: "Артикул",
		value: "ELC0200000696",
	},
	{
		id: 3,
		title: "Код РАЭК",
		value: "ELC00696",
	},
	{
		id: 4,
		title: "Код ETM",
		value: "ELC00696",
	},
	{
		id: 5,
		title: "Бренд",
		value: "Electric used",
	},
	{
		id: 6,
		title: "Серия",
		value: "ELC00696",
	},
	{
		id: 7,
		title: "Код производителя",
		value: "ELC0200000696",
	},
];

export const sliderData = [
	{
		id: 1,
		url: "/images/sneaker_2.jpg",
	},
	{
		id: 2,
		url: "/images/sneaker_3.jpg",
	},
	{
		id: 3,
		url: "/images/sneaker_4.jpg",
	},
	{
		id: 4,
		url: "/images/sneaker_5.jpg",
	},
];

export const femaleProductsData: T_products = {
	title: "Женщинам",
	categories: [
		{
			id: 1,
			title: "Одежда",
		},
		{
			id: 2,
			title: "Обувь",
		},
		{
			id: 3,
			title: "Аксессуары",
		},
		{
			id: 4,
			title: "Белье",
		},
		{
			id: 5,
			title: "Bra fitting",
		},
	],
};

export const maleProductsData: T_products = {
	title: "Мужчинам",
	categories: [
		{
			id: 1,
			title: "Одежда",
		},
		{
			id: 2,
			title: "Обувь",
		},
		{
			id: 3,
			title: "Аксессуары",
		},
		{
			id: 4,
			title: "Белье",
		},
	],
};

export const childrenProductsData: T_products = {
	title: "Детям",
	categories: [
		{
			id: 1,
			title: "Одежда",
		},
		{
			id: 2,
			title: "Обувь",
		},
		{
			id: 3,
			title: "Аксессуары",
		},
		{
			id: 4,
			title: "Белье",
		},
		{
			id: 5,
			title: "Игрушки",
		},
		{
			id: 6,
			title: "Малыши",
		},
	],
};

export const sportProductsData: T_products = {
	title: "Виды спорта",
	categories: [
		{
			id: 1,
			title: "Велоспорт",
		},
		{
			id: 2,
			title: "Туризм",
		},
		{
			id: 3,
			title: "Тренажеры и фитнес",
		},
		{
			id: 4,
			title: "Командные виды спорта",
		},
		{
			id: 5,
			title: "Самокаты",
		},
	],
};
