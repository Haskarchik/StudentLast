const path = require('path');

const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['next-sitemap'] = require.resolve('next-sitemap');
    }
    return config;
  },
  i18n: {
    locales: ["ua", "ru"],
    defaultLocale: "ua",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
