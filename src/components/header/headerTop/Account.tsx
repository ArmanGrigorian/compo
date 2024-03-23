import { ArrowIcon } from "../../svg";

const Account = () => {
	return (
		<div className="flex items-center gap-4 max-xl:gap-2 max-lg:gap-1">
			<img src="/icons/avatar.png" alt="avatar png" className="rounded" />

			<h6 className="text-custom-black dark:text-custom-white  text-sm font-gotham-pro font-bold max-lg:hidden">
				Ермаков Е.
			</h6>

			<button type="button" className="hover:opacity-80 active:scale-90">
				<ArrowIcon />
			</button>
		</div>
	);
};

export default Account;
