/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/AtticusSims.github.io' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/AtticusSims.github.io' : '',
};

module.exports = nextConfig;