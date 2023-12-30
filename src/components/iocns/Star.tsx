import { colors } from '@/styles/theme'

interface Props {
  size?: number
  style?: React.CSSProperties // 미세조정용!
}

export default function Star({ size = 14, style }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path
        d="M4.77972 4.50507L6.44769 1.12811C6.54795 0.909363 6.72113 0.799988 6.96722 0.799988C7.21332 0.799988 7.38649 0.909363 7.48675 1.12811L9.15472 4.50507L12.8871 5.05194C13.1241 5.0884 13.2791 5.22056 13.352 5.44843C13.4249 5.67629 13.3748 5.87681 13.2016 6.04999L10.5082 8.67499L11.1508 12.3801C11.1873 12.617 11.1052 12.8085 10.9047 12.9543C10.7133 13.1001 10.5128 13.1138 10.3032 12.9953L6.96722 11.2453L3.63128 12.9953C3.42165 13.1138 3.21657 13.1001 3.01605 12.9543C2.82464 12.8085 2.74717 12.617 2.78363 12.3801L3.42621 8.67499L0.732847 6.04999C0.55967 5.87681 0.50954 5.67629 0.582456 5.44843C0.655373 5.22056 0.810321 5.0884 1.0473 5.05194L4.77972 4.50507Z"
        fill={colors.theme3}
      />
    </svg>
  )
}
