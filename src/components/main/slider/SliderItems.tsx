import { SliderItem } from "..";
import { T_sliderItem } from "../../../../types";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const SliderItems = ({ products }: { products: T_sliderItem[] }) => {
	const [parent] = useAutoAnimate();

	return (
		<ul ref={parent} className="max-w-[calc(100%-104px)] flex items-center gap-3 max-sm:max-w-[calc(100%-80px)]">
			{products.slice(1, 5).map((item) => (
				<SliderItem key={item.id} {...item} />
			))}
		</ul>
	);
};

export default SliderItems;
