module.exports = {
	darkMode: "class",
	content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
		  'yekan-regular': ["IRANYekanRegular", "sans-serif"],
		  'yekan-medium': ["IRANYekanMedium", "sans-serif"],
		  'yekan-bold': ["IRANYekanBold", "sans-serif"],
		},
	  },
	},
	plugins: [require("daisyui"), require('tailwindcss-rtl')],
	daisyui: {
	  themes: [
		{
		  'light':{
			...require("daisyui/src/colors/themes")["[data-theme=light]"],
			"warning": "#DC7611",
			"primary": "#7446B2",
			"secondary": "#F56C6C",
			"error": "#E05E5E",
			"info": "#0D99FF",
			"base-100": "#B9B9B9",
			"base-200": "#919191",
			"base-300": "#0A0A0A",
			"base-content": "#131313",
			"neutral-content": "#F4F4F4",
			"success": "#71A13D",
			"accent": "#4488C7",
		  },
		  'dark': {
			...require("daisyui/src/colors/themes")["[data-theme=dark]"],   
		   },
		},
	  ],
	},
  };
  
