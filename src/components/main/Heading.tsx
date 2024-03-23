import { selectProducts } from "../../redux/features/slider/sliderSlice";
import { useAppSelector } from "../../redux/hooks";

const Heading = () => {
	const products = useAppSelector(selectProducts);

	return (
		<>
			<p className="text-sm text-custom-gray font-gotham-normal">
				{/* let's pretend this is taken from the URL parameters */}
				Каталог / Обувь / Кроссовки / Беговые
			</p>

			<h1 className="pt-4 pb-8 text-custom-black dark:text-custom-white text-4xl font-gotham-pro font-semibold max-lg:text-3xl max-sm:text-2xl">
				Кроссовки мужские {products[0].title}
			</h1>
		</>
	);
};

export default Heading;
