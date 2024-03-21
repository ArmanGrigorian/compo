import { LeftSide, RightSide } from "..";

const FooterTop = () => {
	return (
		<div className="flex justify-between items-center py-12 border-y max-xl:py-10 max-lg:flex-col max-lg:pt-8 max-lg:pb-0 max-lg:border-b-0 ">
			<LeftSide />
			<RightSide />
		</div>
	);
};

export default FooterTop;
