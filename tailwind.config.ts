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
        gray04: colors.gray04,
        white: colors.white,
        green: colors.green,
        blue: colors.blue,

        theme1: colors.theme1,
        theme2: colors.theme2,
        theme3: colors.theme3,
      },
    },
  },
  plugins: [],
}
export default config
