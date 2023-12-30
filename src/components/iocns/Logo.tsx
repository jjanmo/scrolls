import { colors } from '@/styles/theme'

interface Props {
  size?: number
  color?: string
}

export default function Logo({ size = 28, color = colors.theme3 }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} version="1.0" viewBox="0 0 256 256">
      <path
        fill={color}
        stroke={color}
        strokeWidth={2}
        d="M53.5 4.1C40 6 29.4 11.5 18.9 21.9-1.2 42-4.7 72 10.1 96.6 14.9 104.5 25 114 28.7 114c4.5 0 7.3-2.5 7.3-6.6 0-3-1.1-4.7-6-10.2-17.9-19.9-18.4-44.7-1.3-63.3 6.4-6.9 11.8-10.3 20.4-13C54.8 19.1 59.7 19 137 19h81.9l2 2.6c2.1 2.6 2.1 3.4 2.1 69 0 62.6.1 66.4 1.8 66.4.9 0 4.3 1.1 7.5 2.4l5.7 2.4V21.5l-2.4-5.2c-3-6.3-8.6-10.7-15.7-12.2-6.1-1.3-157.3-1.3-166.4 0z"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={2}
        d="M37 57.5V65h9v73.7c0 46.5.4 76.2 1.1 80.3 2.8 17.4 15.1 30.4 32.2 34 3.6.7 27.4 1 74.8.8l69.4-.3 6.6-3.2c23.6-11.7 32.7-38.3 20.9-61.4-3.1-5.9-12-15-17.8-18.2-10.4-5.7-11-5.7-81.2-5.7-71.9 0-68.9-.3-73.7 6.9-2.1 3.1-2.3 4.5-2.3 16.5 0 11.3.3 13.5 2 16.4 3.2 5.2 7.4 7.2 15.3 7.2h6.7v-15h-9.1l.3-8.3.3-8.2 5.4.2c9.6.4 17.1 5.7 22.3 15.6 3.3 6.2 3.3 19.3 0 25.7-7 13.5-21.8 19.9-36.4 15.6-6.5-1.9-13.6-7.7-17.6-14.4l-2.7-4.7-.5-80c-.4-63.5-.8-80.5-1.8-82.3-2.5-4.4-7-6.2-15.4-6.2H37v7.5zm187.8 126.6c10.3 5.1 15.5 13.6 15.6 25.4.1 11.7-5.4 20.7-15.9 26.3l-5 2.7-45.7.3c-25.2.1-45.8 0-45.8-.2 0-.3 1.4-2.7 3-5.3 8.8-13.8 8.5-34.8-.5-48.5L128 181H218.7l6.1 3.1zM88 60.5V68h46.9c43.2 0 47-.1 49-1.8 3.2-2.6 3.7-7.2 1.1-10.5l-2.1-2.7H88v7.5z"
      />
      <path
        fill={color}
        stroke={color}
        strokeWidth={2}
        d="M88 95.5v7.5h55.3c42.8 0 55.7-.3 57-1.3 1-.6 2-2.9 2.3-4.9.5-3 .2-4.1-1.9-6.2l-2.6-2.6H88v7.5zM88 131.5v7.5h46.9c43.2 0 47-.1 49-1.8 3.2-2.6 3.7-7.2 1.1-10.5l-2.1-2.7H88v7.5z"
      />
    </svg>
  )
}
