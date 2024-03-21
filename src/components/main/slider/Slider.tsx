import { SliderButton, SliderItem } from "..";
import { Magnifier } from "../..";
import { sliderData } from "../../../../DATA";

const Slider = () => {
	return (
		<div className="flex flex-col gap-8 w-[400px] max-lg:w-1/2 max-lg:mx-auto max-sm:w-[90%]">
			<Magnifier src="/images/sneaker-1.jpg" />

			<div className="flex items-center gap-3 max-lg:w-full max-lg:justify-center">
				<SliderButton right={false} />

				<ul className="flex items-center gap-3">
					{sliderData.map((item) => (
						<SliderItem key={item.id} {...item} />
					))}
				</ul>

				<SliderButton right={true} />
			</div>
		</div>
	);
};

export default Slider;
