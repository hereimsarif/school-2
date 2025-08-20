/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.pixabay.com',
      'localhost',
    ],
  },
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/faculty',
        destination: '/faculty',
      },
      {
        source: '/gallery',
        destination: '/gallery',
      },
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};
module.exports = nextConfig;
