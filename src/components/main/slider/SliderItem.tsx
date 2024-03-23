import { T_sliderItem } from "../../../../types";
import { setActiveProduct } from "../../../redux/features/slider/sliderSlice";
import { useAppDispatch } from "../../../redux/hooks";

const SliderItem = (item: T_sliderItem) => {
	const dispatch = useAppDispatch();

	function handleSliderClick() {
		dispatch(setActiveProduct(item.id.toString()));
	}

	return (
		<li onClick={handleSliderClick} className="w-16 h-16 max-sm:w-12 max-sm:h-12">
			<img
				tabIndex={0}
				src={item.url}
				alt="sneaker jpg"
				className="w-full h-full rounded-xl shadow cursor-pointer hover:opacity-80 max-sm:rounded-lg"
			/>
		</li>
	);
};

export default SliderItem;
