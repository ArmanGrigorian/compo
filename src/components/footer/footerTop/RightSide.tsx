const RightSide = () => {
	return (
		<ul className="flex items-center gap-7 max-xl:gap-3 max-lg:w-full max-lg:justify-between max-lg:py-5 max-lg:border-y max-lg:mt-8 max-sm:gap-0">
			<li className="w-36 py-3 rounded-lg text-center text-custom-black dark:text-custom-white font-gotham-bold hover:font-gotham-normal hover:shadow hover:bg-custom-blue-light hover:text-custom-blue-dark hover:font-normal hover:opacity-80 active:scale-95 max-xl:w-28 max-sm:w-20">
				<a href="#" className="text-inherit text-base max-sm:text-xs">
					Вакансии
				</a>
			</li>
			<li className="w-24 py-3 rounded-lg text-center  text-custom-black dark:text-custom-white font-gotham-bold hover:font-gotham-normal hover:shadow hover:bg-custom-blue-light hover:text-custom-blue-dark hover:font-normal hover:opacity-80 active:scale-95 max-xl:w-16 max-sm:w-12">
				<a href="#" className="text-inherit text-base max-sm:text-xs">
					Блог
				</a>
			</li>
			<li className="w-28 py-3 rounded-lg text-center  text-custom-black dark:text-custom-white font-gotham-bold hover:font-gotham-normal hover:shadow hover:bg-custom-blue-light hover:text-custom-blue-dark hover:font-normal hover:opacity-80 active:scale-95 max-xl:w-20 max-sm:w-14">
				<a href="#" className="text-inherit text-base max-sm:text-xs">
					Акции
				</a>
			</li>
			<li className="px-8 py-3 bg-custom-blue-light rounded-lg shadow hover:opacity-80 active:scale-95 max-xl:px-4 max-sm:px-3 max-xsm:hidden">
				<a
					href="#"
					className="text-custom-blue-dark text-sm font-gotham-normal font-normal max-sm:text-xs">
					Предложить идею
				</a>
			</li>
		</ul>
	);
};

export default RightSide;
