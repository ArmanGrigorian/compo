import { Switch } from "..";
import { selectProducts } from "../../../redux/features/slider/sliderSlice";
import { useAppSelector } from "../../../redux/hooks";
import { calculatePercentage } from "../../../utils/helpers";

const PriceBar = () => {
	const products = useAppSelector(selectProducts);

	return (
		<div className="min-h-[152px] flex flex-col justify-between items-start pb-8 border-b">
			<p className="text-custom-red text-sm font-gotham-medium">
				<span>
					{calculatePercentage(
						(products[0].count === 0 ? 1 : products[0].count) * products[0].price,
						15,
					)}
				</span>{" "}
				цена без скидки
			</p>

			<div className="flex items-center gap-4">
				<strong className="text-custom-black dark:text-custom-white text-3xl font-gotham-bold">
					{Number(
						((products[0].count === 0 ? 1 : products[0].count) * products[0].price).toFixed(2),
					)}{" "}
					₽
				</strong>

				<span className="bg-custom-red text-custom-white text-base font-gotham-bold px-2 py-0.5 rounded shadow">
					-15%
				</span>
			</div>

			<div className="flex items-center gap-4">
				<span className="text-custom-black  dark:text-custom-white text-sm font-gotham-normal">
					{products[0].count} штук в уп.
				</span>
				<Switch />
				<span className="text-custom-black dark:text-custom-white text-sm font-gotham-normal">Заказ упаковкой</span>
			</div>
		</div>
	);
};

export default PriceBar;
