import { colors } from './src/styles/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        gray01: colors.gray01,
        gray02: colors.gray02,
        gray03: colors.gray03,
        white: colors.white,
        green: colors.green,
        blue: colors.blue,
      },
    },
  },
  plugins: [],
}
export default config
