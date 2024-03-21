import { useContext } from "react";
import { CounterContext } from "../../context/CounterProvider";

const CartButton = () => {
	const { state } = useContext(CounterContext);

	return (
		<button
			type="button"
			className="flex justify-center items-center gap-3 w-[148px] h-12 bg-custom-blue-light rounded-lg shadow hover:opacity-80 active:scale-95 max-xl:w-28 max-xl:gap-1 max-lg:w-24 max-sm:h-11">
			<img src="/icons/cart.png" alt="cart icon png" className="max-lg:hidden" />
			<span className="text-sm text-custom-blue-dark font-gotham-bold">
				{Number((state.count * state.price).toFixed(2))} &#8381;
			</span>
		</button>
	);
};

export default CartButton;
