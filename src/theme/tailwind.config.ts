import { type Config } from 'tailwindcss';
import animations from './animations';
import colors from './colors';
import plugins from './plugins';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1024px',
      'desktop-xl': '1440px'
    },
    extend: {
      ...animations,
      colors,
      fontFamily: {
        sans: ['var(--font-sans)']
      },
      boxShadow: {
        header: '0px 4px 8px 0px rgba(77, 77, 77, 0.10)'
      }
    }
  },
  plugins: [plugins]
};

export default config;
