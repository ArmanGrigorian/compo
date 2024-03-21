import { T_navRoute } from "../../../../types";

const NavLink = (item: T_navRoute) => {
	return (
		<li className="hover:opacity-80 active:scale-95">
			<a href={item.href} className="text-custom-black text-sm font-gotham-pro font-medium">
				{item.title}
			</a>
		</li>
	);
};

export default NavLink;
