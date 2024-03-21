import { LikeButton } from "../../main";

const LikeBar = () => {
	return (
		<div className="flex items-center max-xsm:hidden">
			<div className="border-r-2 pr-6 max-xl:pr-3">
				<button type="button" className="hover:opacity-80 active:scale-95">
					<img
						src="/icons/bell.png"
						alt="bell icon png"
						className="w-8 h-8 max-xl:w-6 max-xl:h-6"
					/>
				</button>
			</div>

			<div className="pl-6 max-xl:pl-3">
				<LikeButton extended={false} />
			</div>
		</div>
	);
};

export default LikeBar;
