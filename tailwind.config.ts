import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#1C1410',
        'cream': '#F5F0E8',
        'burgundy': '#8B3232',
        'gold': '#C5963A',
        'text-dark': '#2C2418',
        'text-muted': '#5C5040',
        'text-caption': '#7A6E5C',
        'text-cream': '#F0E6D8',
        'text-tan': '#A89882',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
