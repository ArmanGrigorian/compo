import { LogoIcon } from "../../svg";

const Logo = () => {
	return (
		<a href="/" className="w-36 h-7 hover:opacity-80 max-lg:w-fit max-xsm:hidden">
			<img src="/icons/logo.png" alt="icon png" className="lg:hidden" />
			<LogoIcon />
			{/* <img src="/icons/compoLogo.png" alt="compo logo icon png" className="max-lg:hidden" /> */}
		</a>
	);
};

export default Logo;
