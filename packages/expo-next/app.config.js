export default {
  name: 'Record Pool',
  description: 'Music discovery and playlists management',
  slug: 'recordpool',
  scheme: 'recordpool',
  icon: './assets/icon.png',
  sdkVersion: '41.0.0',
  version: '0.0.1',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#000000'
  },
  ios: {
    bundleIdentifier: '',
    supportsTablet: true,
    infoPlist: {
      UIBackgroundModes: ['audio']
    }
  },
  android: {
    package: '',
    versionCode: 1
  },
  assetBundlePatterns: ['**/*'],
  updates: {
    fallbackToCacheTimeout: 0
  },
  packagerOpts: {
    config: 'metro.config.js',
    sourceExts: [
      'expo.ts',
      'expo.tsx',
      'expo.js',
      'expo.jsx',
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'wasm',
      'svg'
    ]
  },
  extra: {
    STAGE: process.env.STAGE
  }
};
