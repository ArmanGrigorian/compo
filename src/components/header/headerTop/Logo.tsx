import { LogoIcon } from "../../svg";

const Logo = () => {
	return (
		<a
			href="/"
			title="Главная страница"
			className="w-36 h-7 hover:opacity-80 max-lg:w-fit max-xsm:hidden">
			<img src="/icons/logo.png" alt="icon png" className="lg:hidden" />
			<LogoIcon />
		</a>
	);
};

export default Logo;
