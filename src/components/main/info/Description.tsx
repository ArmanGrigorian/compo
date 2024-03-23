import { selectProducts } from "../../../redux/features/slider/sliderSlice";
import { useAppSelector } from "../../../redux/hooks";

const Description = () => {
	const products = useAppSelector(selectProducts);
	
	return (
		<div className="mt-12 max-xl:mt-8 max-xl:border-t">
			<h3 className="text-2xl text-custom-black dark:text-custom-white font-gotham-medium max-xl:mt-7">
				Описание товара
			</h3>

			<p className="max-w-[1104px] text-custom-black dark:text-custom-white text-lg font-gotham-normal mt-6 max-xl:mt-2">
				{products[0].description}
			</p>
		</div>
	);
};

export default Description;
