const Address = () => {
	return (
		<address className="flex items-center gap-12 max-xl:gap-6">
			<div className="flex flex-col gap-2 max-xl:gap-1">
				<a
					href="tel:88008419595"
					className="not-italic text-custom-black dark:text-custom-white text-base font-gotham-bold max-sm:text-xs">
					8 800 841-95-95
				</a>
				<strong className="not-italic tracking-wide text-custom-gray text-xs font-gotham-normal font-normal ">
					Служба поддержки
				</strong>
			</div>

			<div className="flex flex-col gap-2 max-xl:gap-1">
				<a
					href="mailto:support@sport.ru"
					className="not-italic text-custom-black dark:text-custom-white text-base font-gotham-bold max-sm:text-xs">
					support@sport.ru
				</a>
				<strong className="not-italic tracking-wide text-custom-gray text-xs font-gotham-normal font-normal">
					Служба поддержки
				</strong>
			</div>
		</address>
	);
};

export default Address;
