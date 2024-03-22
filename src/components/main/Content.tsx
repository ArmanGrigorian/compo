import { Characteristics, Controls, Description, PriceBar, Slider } from ".";

const Content = () => {
	return (
		<div className="flex gap-12 max-lg:flex-col">
			<Slider />
			<div>
				<div className="flex max-xl:flex-col">
					<div className="pr-12 max-2xl:pr-8 max-xl:pr-0">
						<PriceBar />
						<Controls />
					</div>

					<Characteristics />
				</div>

				<Description />
			</div>
		</div>
	);
};

export default Content;
