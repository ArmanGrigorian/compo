import { navRoutesData } from "../../../../DATA.ts";
import { NavLink } from "../index";


const NavLeft = () => {
	return (
		<ul className="flex items-center gap-6 max-xl:gap-3 max-sm:w-full max-sm:justify-between max-sm:hidden">
			{navRoutesData.map((item) => (
				<NavLink key={item.id} {...item} />
			))}
		</ul>
	);
};

export default NavLeft;
