import { type Config } from 'tailwindcss';
import colors from './colors';
import plugins from './plugins';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1024px',
      'desktop-xl': '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)']
      },
      colors
    }
  },
  plugins: [plugins]
};

export default config;
