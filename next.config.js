const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: false,
      };
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/openseadragon/:path*',
        destination: '/node_modules/openseadragon/build/:path*',
      },
    ];
  },
};