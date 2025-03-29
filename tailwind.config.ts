import { plugin } from 'postcss';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }: { addUtilities: (utilities: Record<string, unknown>) => void }) => {
      addUtilities({
        '.writing-vertical-lr': {
          'writing-mode': 'sideways-lr',
          '& sub': {
            bottom: '0',
            right: '0.25em',
          },
        },
        '.writing-vertical-rl': {
          'writing-mode': 'sideways-rl',
          '& sub': {
            bottom: '0',
            right: '0.25em',
          },
        },
      });
    }),
  ],
};

export default config;
