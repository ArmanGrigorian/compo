const MenuButton = ({ auxiliary }: { auxiliary: boolean }) => {

	if (auxiliary) {
		return (
			<button
				type="button"
				title="Меню"
				className="flex justify-center items-center px-2 py-2 rounded bg-custom-blue-dark shadow hover:opacity-80 active:scale-95 sm:hidden">
				<img src="/icons/menu.png" alt="menu icon png" className="w-4 h-4" />
			</button>
		);
	}

	return (
		<button
			type="button"
			title="Меню"
			className="flex justify-center items-center gap-3 w-32 h-12 rounded-lg bg-custom-blue-dark shadow-xl hover:opacity-80 active:scale-95 max-xl:w-24 max-xl:gap-1 max-lg:w-14 max-sm:w-12 max-sm:h-11">
			<img src="/icons/menu.png" alt="menu icon png" />
			<span className="text-custom-white text-sm font-gotham-bold max-lg:hidden">
				Меню
			</span>
		</button>
	);
};

export default MenuButton;
