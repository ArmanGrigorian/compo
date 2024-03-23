const SearchBar = ({ mobileView }: { mobileView: boolean }) => {
	return (
		<form
			className={`${
				mobileView ? "w-full sm:hidden" : "max-w-[732px] max-sm:hidden"
			} relative flex grow items-center border rounded-lg  `}>
			<input
				type="text"
				name="search"
				title="Поиск по запросу"
				minLength={4}
				maxLength={24}
				placeholder="Название запроса"
				className="w-full p-3 pr-20 text-custom-black text-sm font-gotham-pro font-medium placeholder:text-custom-black placeholder:font-semibold rounded-lg shadow focus:valid:outline-4 focus:valid:outline focus:valid:outline-custom-blue-dark focus:valid:outline-offset-[-4px] invalid:outline-custom-red invalid:outline-4 invalid:outline invalid:outline-offset-[-4px]"
			/>

			<div className="absolute right-3 flex justify-center items-center gap-3">
				<button type="reset" title="Сбросить поиск" className="hover:opacity-80 active:scale-90">
					<img src="/icons/x.png" alt="x icon png" />
				</button>

				<button type="submit" title="Поиск" className="hover:opacity-80 active:scale-90">
					<img src="/icons/magnifier.png" alt="magnifier icon png" />
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
