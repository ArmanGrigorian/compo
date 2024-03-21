import { NavLeft, MenuButton, NavRight } from "..";


const Nav = () => {
	return (
		<nav className="mx-6 max-xl:mx-3 h-14 flex justify-between items-center border-y">
			<NavLeft />
			<MenuButton auxiliary={true} />
			<NavRight />
		</nav>
	);
};

export default Nav;
