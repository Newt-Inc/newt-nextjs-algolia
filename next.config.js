/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.NEWT_SPACE_UID}.assets.newt.so`,
      },
    ],
  },
}

module.exports = nextConfig
