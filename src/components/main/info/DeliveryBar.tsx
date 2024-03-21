const DeliveryBar = () => {
	return (
		<div className="flex justify-between items-center max-xl:border-b max-xl:pb-8">
			<div>
				<h6 className="text-sm text-custom-black font-gotham-bold">Завтра</h6>
				<p className="text-xs text-custom-gray font-gotham-normal">Доставка</p>
			</div>

			<div>
				<h6 className="text-sm text-custom-black font-gotham-bold">7 шт.</h6>
				<p className="text-xs text-custom-gray font-gotham-normal">Тарасовка</p>
			</div>

			<div>
				<h6 className="text-sm text-custom-black font-gotham-bold">7 шт.</h6>
				<p className="text-xs text-custom-gray font-gotham-normal">Тарасовка</p>
			</div>
		</div>
	);
};

export default DeliveryBar;