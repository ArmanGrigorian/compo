const NavRight = () => {
	return (
		<ul className="flex items-center gap-6 max-xl:gap-2">
			<li className="flex justify-center items-center gap-2 px-3 py-2 bg-custom-blue-light rounded shadow hover:opacity-80 active:scale-95">
				<img
					src="/icons/communication.png"
					alt="communication icon png"
					className="w-4 h-4 max-lg:hidden max-md:block"
				/>
				<a
					href="#"
					className="text-custom-blue-dark text-sm font-gotham-pro font-semibold max-md:hidden">
					Ваш менеджер
				</a>
			</li>

			<li className="px-3 py-2 rounded flex justify-center items-center gap-4 hover:shadow hover:bg-custom-blue-light active:scale-95">
				<img
					src="/icons/percentage.png"
					alt="percentage icon png"
					className="w-4 h-4 max-lg:hidden max-md:block"
				/>
				<a
					href="#"
					className="text-custom-blue-dark text-sm font-gotham-pro font-semibold max-md:hidden">
					Акции
				</a>
			</li>

			<li className="px-3 py-2 rounded hover:shadow hover:bg-custom-blue-light active:scale-95">
				<a href="#" className="text-custom-blue-dark text-sm font-gotham-pro font-semibold">
					Блог
				</a>
			</li>
		</ul>
	);
};

export default NavRight;
