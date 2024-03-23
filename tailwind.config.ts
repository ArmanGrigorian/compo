import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
	theme: {
		extend: {
			colors: {
				"custom-black": "#071435",
				"custom-white": "#ffffff",
				"custom-gray": "#77829E",
				"custom-blue-dark": "#1551E5",
				"custom-blue-light": "#F2F6FF",
				"custom-red": "#FF3D71",
				"custom-grey-blue": "#828EAD",
			},
			fontFamily: {
				"gotham-pro": ["Gotham Pro", "sans-serif"],
				"gotham-normal": ["Gotham-Normal", "sans-serif"],
				"gotham-medium": ["Gotham-medium", "sans-serif"],
				"gotham-bold": ["Gotham-Bold", "sans-serif"],
			},
			screens: {
				xsm: "375px",
			},
		},
	},
	plugins: [],
};
export default config;
