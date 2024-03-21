import { Account, CartButton, LikeBar, Logo, MenuButton, SearchBar } from "..";

const HeaderTop = () => {
	return (
		<div className="w-full px-6 max-xl:px-3 max-md:pb-5">
			<div className="w-full h-20 flex justify-between items-center gap-6 max-xl:gap-3 max-sm:gap-2">
				<Logo />
				<MenuButton auxiliary={false} />
				<SearchBar mobileView={false} />
				<LikeBar />
				<CartButton />
				<Account />
			</div>
			<SearchBar mobileView={true} />
		</div>
	);
};

export default HeaderTop;
