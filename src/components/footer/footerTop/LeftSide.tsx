import { Address } from "..";
import { Logo } from "../../header";

const LeftSide = () => {
	return (
		<div className="flex items-center gap-14 max-xl:gap-7 max-lg:w-full max-lg:justify-between max-sm:gap-1">
			<Logo />
			<Address />
		</div>
	);
};

export default LeftSide;
