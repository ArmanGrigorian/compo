import { MouseEvent } from "react";
import { T_sliderItem } from "../../../../types";
import { selectProducts, setCount } from "../../../redux/features/slider/sliderSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const AddToCartButton = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector(selectProducts);

	function handleAddToCartClick(e: MouseEvent<HTMLButtonElement>, activeProduct: T_sliderItem) {
		e.stopPropagation();
		const target = e.target as HTMLButtonElement;

		if (target.dataset.name) {
			dispatch(setCount({ action: target.dataset.name, activeProduct }));
		}
	}

	if (products[0].count === 0) {
		return (
			<button
				onClick={(e) => handleAddToCartClick(e, products[0])}
				type="button"
				title="Добавить в корзину"
				data-name="increment"
				className="w-64 h-16 flex justify-center items-center gap-3 bg-custom-blue-dark rounded-lg shadow hover:opacity-80 active:scale-[0.99] max-xl:h-14 max-xl:gap-2 max-xl:grow">
				<img src="/icons/cartWhite.png" alt="cart icon png" className="pointer-events-none" />
				<span className="text-custom-white text-sm font-gotham-bold tracking-wide pointer-events-none">
					B корзину
				</span>
			</button>
		);
	}

	return (
		<div className="w-64 h-16 p-2 flex justify-between items-center bg-custom-white rounded-lg shadow-xl border-[3px] border-custom-blue-dark max-xl:h-14 max-xl:grow">
			<button
				onClick={(e) => handleAddToCartClick(e, products[0])}
				type="button"
				title="Уменьшить количество"
				data-name="decrement"
				className="hover:opacity-80 active:scale-95">
				<img src="/icons/decrement.png" alt="decrement icon png" className="pointer-events-none" />
			</button>

			<span>{products[0].count} штуки</span>

			<button
				onClick={(e) => handleAddToCartClick(e, products[0])}
				type="button"
				title="Увеличить количество"
				data-name="increment"
				className="hover:opacity-80 active:scale-95">
				<img src="/icons/increment.png" alt="increment icon png" className="pointer-events-none" />
			</button>
		</div>
	);
};

export default AddToCartButton;
