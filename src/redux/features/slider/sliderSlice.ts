import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../../../DATA";
import { T_sliderItem, sliderState } from "../../../../types";
import type { RootState } from "../../store";

const initialState: sliderState = {
	products: sliderData,
};

export const sliderSlice = createSlice({
	name: "slider",

	initialState,

	reducers: {
		setActiveProduct: (state, { payload }: PayloadAction<string>) => {
			if (payload === "next") {
				const [first, ...rest] = state.products;
				state.products = [...rest, first];
			} else if (payload === "prev") {
				const [last, ...rest] = state.products.reverse();
				state.products = [last, ...rest.reverse()];
			} else {
				const currentIdx = state.products.findIndex((product) => product.id === Number(payload));
				const currentProduct = state.products.find((product) => product.id === Number(payload));
				
				if (!currentProduct) return;
				
				const firstPart = state.products.slice(0, currentIdx);
				const lastPart = state.products.slice(currentIdx + 1);

				state.products = [currentProduct, ...firstPart, ...lastPart];
			}
		},
		setCount: (
			state,
			{ payload }: PayloadAction<{ action: string; activeProduct: T_sliderItem }>,
		) => {
			const { action, activeProduct } = payload;
			state.products = state.products.map((product) => {
				if (product.id === activeProduct.id) {
					return {
						...product,
						count: action === "increment" ? product.count + 1 : product.count - 1,
					};
				}
				return product;
			});
		},
	},
});

export const { setActiveProduct, setCount } = sliderSlice.actions;

export const selectProducts = (state: RootState) => state.slider.products;

export default sliderSlice.reducer;
