import { T_sliderItem } from "../../../../types";

const SliderItem = (item: T_sliderItem) => {
	return (
		<li className="w-16 h-16 max-sm:w-12 max-sm:h-12">
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
