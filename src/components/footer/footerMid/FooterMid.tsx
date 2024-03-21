import {
	childrenProductsData,
	femaleProductsData,
	maleProductsData,
	sportProductsData,
} from "../../../../DATA";
import ProductsList from "./ProductsList";

const FooterMid = () => {
	return (
		<div className="flex justify-start items-start gap-6 py-12 border-b max-sm:flex-wrap max-sm:justify-center ">
			<ProductsList {...femaleProductsData} />
			<ProductsList {...maleProductsData} />
			<ProductsList {...childrenProductsData} />
			<ProductsList {...sportProductsData} />
		</div>
	);
};

export default FooterMid;
