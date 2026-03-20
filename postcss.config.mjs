const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "headline": ["Noto Serif", "serif"],
        "body": ["Plus Jakarta Sans", "sans-serif"],
        "label": ["Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem", 
        "lg": "2rem", 
        "xl": "3rem", 
        "full": "9999px"
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
