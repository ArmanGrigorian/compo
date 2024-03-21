const SliderButton = ({ right }: { right: boolean }) => {
	return (
		<button type="button" className="flex justify-center items-center w-10 h-16 bg-custom-blue-light rounded shadow hover:opacity-80 active:scale-90 max-sm:w-7 max-sm:h-12">
			<img
				src="/icons/sliderArrow.png"
				alt="arrow png"
				className={`w-8 h-8 ${right ? "rotate-180" : ""}`}
			/>
		</button>
	);
};

export default SliderButton;
