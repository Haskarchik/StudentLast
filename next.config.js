const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  ...nextConfig,
  images: {
    domains: ['localhost'],
  },  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // This ensures that the "next-sitemap" package is treated as a CommonJS module
      config.resolve.alias['next-sitemap'] = require.resolve('next-sitemap');
    }

    return config;
  },
};
