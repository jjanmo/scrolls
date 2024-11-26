/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jpassets.jobplanet.co.kr',
      },
    ],
  },
  compiler: {
    emotion: true,
  },
}

module.exports = nextConfig
