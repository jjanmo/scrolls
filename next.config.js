/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // 한번 더 리랜더링 되는 부분 때문에 우선 false로 수정함 → 추후 true로 변경
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jpassets.jobplanet.co.kr',
      },
    ],
  },
}

module.exports = nextConfig
