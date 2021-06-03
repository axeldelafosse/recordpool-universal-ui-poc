module.exports = {
  presets: ['@expo/next-adapter/babel'],
  // Note: If you load other babel plugins, the Reanimated plugin has to be listed last in the plugins array.
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragmaFrag: 'React.Fragment'
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
