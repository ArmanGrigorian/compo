import { FooterBtm, FooterMid, FooterTop } from ".";

const Footer = () => {
	return (
		<footer className="px-6 max-xl:px-3 bg-custom-white dark:bg-custom-black">
			<FooterTop />
			<FooterMid />
			<FooterBtm />
		</footer>
	);
};

export default Footer;
