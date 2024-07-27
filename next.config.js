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
module.exports = {
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["ua", "ru"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "ua",
  },
};