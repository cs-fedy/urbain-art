import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"montserrat": "var(--font-montserrat)",
				"play-fair": "var(--font-play-fair)",
			},
			colors: {
				urbain: {
					white: "#FDFBF8",
					orange: "#EA5B27",
					black: "#000000",
				},
			},
		},
	},
	plugins: [],
}
export default config
