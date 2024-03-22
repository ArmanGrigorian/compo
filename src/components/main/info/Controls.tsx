import { AddToCartButton, DeliveryBar, LikeButton } from "..";

const Controls = () => {

	return (
		<div className="min-h-[160px] flex flex-col justify-between pt-8">
			<DeliveryBar/>

			<div className="flex items-center gap-4 max-xl:pt-9 max-xl:pb-8 max-xl:border-b">
				<AddToCartButton/>
				<LikeButton extended={true} />
			</div>
		</div>
	);
};

export default Controls;
