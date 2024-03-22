import { SliderItem } from "..";
import { T_sliderItem } from "../../../../types";

const SliderItems = ({ products }: { products: T_sliderItem[] }) => {
	return (
		<ul className="max-w-[calc(100%-104px)] flex items-center gap-3 max-sm:max-w-[calc(100%-80px)]">
			{products.slice(1, 5).map((item) => (
				<SliderItem key={item.id} {...item} />
			))}
		</ul>
	);
};

export default SliderItems;
