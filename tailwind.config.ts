import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        600: '#D82042'
      },
      grey: {
        100: '#FBFBFD',
        200: '#F6F7F9',
        300: '#F1F1F9'
      },
      black: {
        600: '#D82042'
      },
      dark: '#111111',
    },
    fontFamily: {
      spaceGrotesk: ['var(--font-space-grotesk)'],
    },
  },
  plugins: [],
}
export default config
