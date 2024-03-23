import { SliderButton, SliderItems } from "..";
import { Magnifier } from "../..";
import { selectProducts } from "../../../redux/features/slider/sliderSlice";
import { useAppSelector } from "../../../redux/hooks";

const Slider = () => {
	const products = useAppSelector(selectProducts);

	return (
		<div
			className="flex flex-col gap-8 w-[400px] max-lg:w-1/2 max-lg:mx-auto max-sm:w-[90%]">
			<Magnifier src={products[0].url} />

			<div className="flex items-center gap-3 max-lg:w-full max-lg:justify-center">
				<SliderButton right={false} />
				<SliderItems products={products} />
				<SliderButton right={true} />
			</div>
		</div>
	);
};

export default Slider;
