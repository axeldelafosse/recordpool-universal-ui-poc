const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withTM = require('next-transpile-modules')([
  'app',
  'dripsy',
  '@dripsy/core',
  'moti',
  '@motify/components',
  '@motify/core',
  '@motify/skeleton',
  '@gorhom/bottom-sheet',
  '@nandorojo/swr-react-native'
]);

const nextConfig = {
  future: {
    webpack5: true
  },
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true
  },
  images: {
    domains: ['lh3.googleusercontent.com']
  },
  async headers() {
    const cacheHeaders = [
      { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
    ];
    return [
      { source: '/_next/static/:static*', headers: cacheHeaders },
      { source: '/fonts/:font*', headers: cacheHeaders }
    ];
  }
};

module.exports = withPlugins(
  [
    [withTM, {}],
    withFonts,
    withImages,
    withBundleAnalyzer,
    [withExpo, { projectRoot: __dirname }]
  ],
  nextConfig
);
