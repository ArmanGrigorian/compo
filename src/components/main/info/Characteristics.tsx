import { selectProducts } from "../../../redux/features/slider/sliderSlice";
import { useAppSelector } from "../../../redux/hooks";

const Characteristics = () => {
	const products = useAppSelector(selectProducts);

	return (
		<div className="max-w-[636px] pl-12 border-l max-2xl:pl-8 max-xl:pl-0 max-xl:border-none max-xl:w-full max-xl:mt-8">
			<h3 className="text-2xl text-custom-black font-gotham-medium">Характеристики</h3>

			<ul
				className="flex justify-between flex-wrap gap-6 mt-8 max-xl:mt-6 max-sm:gap-5 max-xsm:gap-x-0">
				{products[0].characteristics.map((item, idx) => (
					<li
						key={idx}
						className="w-1/3 h-11 flex justify-between flex-col max-sm:w-[136px] max-xsm:w-1/2">
						<strong className="text-custom-black text-sm font-gotham-bold max-xsm:text-xs">
							{item.value}
						</strong>
						<span className="text-xs text-custom-gray font-gotham-normal">{item.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Characteristics;
