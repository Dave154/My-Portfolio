/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			lightblue:'var(--lightblue)',
			purple:'var(--purple)'
  		},
		  backgroundImage: {
			'grid1': "url('/bg1.jpg')",
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  fontFamily: {
			montserrat: ['var(--font-montserrat)', 'sans-serif'],
			roboto: ['var(--font-roboto)', 'sans-serif'],
		  },
		animation: {
			'gradient-animation': 'gradient 4s ease-in-out infinite',
		},
		keyframes: {
			gradient: {
				'0%': { 'background-position': '0% 50%' },
				'50%': { 'background-position': '100% 50%' },
				'100%': { 'background-position': '0% 50%' },
			},
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
