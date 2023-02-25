/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.notka.uz',
        port: '3000',
        pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
