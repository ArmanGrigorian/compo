import { ListItem } from "..";
import { T_products } from "../../../../types";

const ProductsList = (products: T_products) => {
	return (
		<div className="w-[370px] flex flex-col gap-6 max-sm:w-full">
			<h4 className="text-custom-black dark:text-custom-white text-base font-gotham-medium max-sm:self-center">
				{products.title}
			</h4>

			<ul className="flex flex-col gap-4">
				{products.categories.map((item) => (
					<ListItem key={item.id} {...item} />
				))}
			</ul>
		</div>
	);
};

export default ProductsList;
