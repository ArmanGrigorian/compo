import { createContext, useReducer } from "react";
import { ContextType, counterState } from "../../../types";

export const CounterContext = createContext<ContextType>({} as ContextType);

const initialState: counterState = {
	count: 0,
	price: 7599,
};

function reducer(state: counterState, { type }: { type: string }) {
	switch (type) {
		case "increment":
			return { ...state, count: state.count + 1 };
		case "decrement":
			return { ...state, count: state.count - 1 };
		default:
			throw new Error();
	}
}

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>;
};

export default CounterProvider;
