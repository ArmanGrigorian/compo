import { useContext } from "react";
import { Switch } from "..";
import { calculatePercentage } from "../../../utils/helpers";
import { CounterContext } from "../../context/CounterProvider";

const PriceBar = () => {
	const { state } = useContext(CounterContext);

	return (
		<div className="min-h-[152px] flex flex-col justify-between items-start pb-8 border-b">
			<p className="text-custom-red text-sm font-gotham-medium">
				<span>{calculatePercentage(state.count * state.price, 15)}</span> цена без скидки
			</p>

			<div className="flex items-center gap-4">
				<strong className="text-custom-black text-3xl font-gotham-bold">
					{Number((state.count * state.price).toFixed(2))} ₽
				</strong>

				<span className="bg-custom-red text-custom-white text-base font-gotham-bold px-2 py-0.5 rounded shadow">
					-15%
				</span>
			</div>

			<div className="flex items-center gap-4">
				<span>{state.count} штук в уп.</span>
				<Switch />
				<span>Заказ упаковкой</span>
			</div>
		</div>
	);
};

export default PriceBar;
