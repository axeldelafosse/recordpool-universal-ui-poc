import { Platform } from 'react-native';

const webFont = (font: string) =>
  Platform.select({
    web: `"${font}", Arial, Helvetica Neue, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    default: font
  });

const theme = {
  colors: {
    text: '#fff',
    background: '#000'
  },
  fonts: {
    root: 'Arial Rounded MT Std'
  },
  customFonts: {
    'Arial Rounded MT Std': {
      bold: webFont('Arial Rounded MT Std Bold'),
      default: webFont('Arial Rounded MT Std'),
      normal: webFont('Arial Rounded MT Std'),
      '400': webFont('Arial Rounded MT Std'),
      '500': webFont('Arial Rounded MT Std'),
      '600': webFont('Arial Rounded MT Std Bold'),
      '700': webFont('Arial Rounded MT Std Bold'),
      '800': webFont('Arial Rounded MT Std Bold'),
      '900': webFont('Arial Rounded MT Std Extra Bold')
    }
  },
  space: [10, 12, 14],
  text: {
    thick: {
      fontFamily: 'root',
      fontWeight: 'black'
    }
  }
};

export default theme;
