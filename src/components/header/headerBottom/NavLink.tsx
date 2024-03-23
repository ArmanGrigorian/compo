import { T_navRoute } from "../../../../types";

const NavLink = (item: T_navRoute) => {
	return (
		<li title={item.title} className="hover:opacity-80 active:scale-95">
			<a href={item.href} className="text-custom-black dark:text-custom-white text-sm font-gotham-pro font-medium">
				{item.title}
			</a>
		</li>
	);
};

export default NavLink;
