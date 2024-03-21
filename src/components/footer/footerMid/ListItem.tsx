import { T_product } from "../../../../types";

const ListItem = (item: T_product) => {
	return (
		<li className="hover:opacity-80 active:scale-95">
			<a href="#" className="text-sm text-custom-gray font-gotham-normal">
				{item.title}
			</a>
		</li>
	);
};

export default ListItem;
