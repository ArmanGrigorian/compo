const Account = () => {
	return (
		<div className="flex items-center gap-4 max-xl:gap-2 max-lg:gap-1">
			<img src="/icons/avatar.png" alt="avatar png" />

			<h6 className="text-custom-black text-sm font-gotham-pro font-bold max-lg:hidden">
				Ермаков Е.
			</h6>

			<button type="button" className="hover:opacity-80 active:scale-90">
				<img src="/icons/arrow.png" alt="arrow icon png" />
			</button>
		</div>
	);
};

export default Account;
