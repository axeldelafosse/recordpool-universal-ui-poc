const { createMetroConfiguration } = require('expo-yarn-workspaces');
const { getDefaultConfig } = require('expo/metro-config');

const config = createMetroConfiguration(__dirname);

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);

  return {
    ...config,
    transformer: {
      ...config.transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer')
    },
    resolver: {
      ...config.resolver,
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg']
    }
  };
})();
