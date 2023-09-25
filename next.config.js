module.exports = {
  basePath: process.env.NODE_ENV === 'development' ? '' : '/swarnoday',
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
};
