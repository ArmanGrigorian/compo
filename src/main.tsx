import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CounterProvider from "./components/context/CounterProvider.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CounterProvider>
			<App />
		</CounterProvider>
	</StrictMode>,
);
