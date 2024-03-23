import { selectProducts } from "../../../redux/features/slider/sliderSlice";
import { useAppSelector } from "../../../redux/hooks";

const DeliveryBar = () => {
	const products = useAppSelector(selectProducts);

	return (
		<div className="flex justify-between items-center max-xl:border-b max-xl:pb-8">
			<div>
				<h6 className="text-sm text-custom-black  dark:text-custom-white font-gotham-bold">
					Завтра
				</h6>
				<p className="text-xs text-custom-gray font-gotham-normal">Доставка</p>
			</div>

			<div>
				<h6 className="text-sm text-custom-black dark:text-custom-white font-gotham-bold">
					{products[0].availableCount} шт.
				</h6>
				<p className="text-xs text-custom-gray font-gotham-normal">Тарасовка</p>
			</div>

			<div>
				<h6 className="text-sm text-custom-black dark:text-custom-white font-gotham-bold">
					{products[0].availableCount} шт.
				</h6>
				<p className="text-xs text-custom-gray font-gotham-normal">Тарасовка</p>
			</div>
		</div>
	);
};

export default DeliveryBar;
