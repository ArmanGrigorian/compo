import { MouseEvent } from "react";
import { setActiveProduct } from "../../../redux/features/slider/sliderSlice";
import { useAppDispatch } from "../../../redux/hooks";

const SliderButton = ({ right }: { right: boolean }) => {
	const dispatch = useAppDispatch();

	function handleSliderClick(e: MouseEvent<HTMLButtonElement>) {
		e.stopPropagation();
		const target = e.target as HTMLButtonElement;

		if (target.dataset.name) {
			dispatch(setActiveProduct(target.dataset.name));
		}
	}

	return (
		<button
			onClick={handleSliderClick}
			type="button"
			data-name={right ? "next" : "prev"}
			className="flex justify-center items-center w-10 h-16 bg-custom-blue-light rounded shadow hover:opacity-80 active:scale-90 max-sm:w-7 max-sm:h-12">
			<img
				src="/icons/sliderArrow.png"
				alt="arrow png"
				className={`w-8 h-8 ${right ? "rotate-180" : ""} pointer-events-none`}
			/>
		</button>
	);
};

export default SliderButton;
