import { selectProducts } from "../../../redux/features/slider/sliderSlice";
import { useAppSelector } from "../../../redux/hooks";

const CartButton = () => {
	const products = useAppSelector(selectProducts);

	const totalPrice = products.reduce((aggr, val) => {
		aggr += Number((val.count * val.price).toFixed(2));
		return aggr;
	}, 0 as number);

	return (
		<button
			type="button"
			title="Корзина"
			className="flex justify-center items-center gap-3 w-[148px] h-12 bg-custom-blue-light rounded-lg shadow hover:opacity-80 active:scale-95 max-xl:w-28 max-xl:gap-1 max-lg:w-24 max-sm:h-11">
			<img src="/icons/cart.png" alt="cart icon png" className="max-lg:hidden" />
			<span className="text-sm text-custom-blue-dark font-gotham-bold">{totalPrice} &#8381;</span>
		</button>
	);
};

export default CartButton;
