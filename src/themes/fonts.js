import {Dimensions} from 'react-native';
import {Fonts} from './index';

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const type = {
  bold: 'Poppins-Bold',
  black: 'Poppins-Black.ttf',
  blackItalic: 'Poppins-BlackItalic.ttf',
  boldItalic: 'Poppins-BoldItalic.ttf',
  extraBold: 'Poppins-ExtraBold.ttf',
  extraBoldItalic: 'Poppins-ExtraBoldItalic.ttf',
  extraLight: 'Poppins-ExtraLight.ttf',
  extraLightItalic: 'Poppins-ExtraLightItalic.ttf',
  italic: 'Poppins-Italic.ttf',
  light: 'Poppins-Light.ttf',
  lightItalic: 'Poppins-LightItalic.ttf',
  medium: 'Poppins-Medium.ttf',
  mediumItalic: 'Poppins-MediumItalic.ttf',
  regular: 'Poppins-Regular.ttf',
  semiBold: 'Poppins-SemiBold.ttf',
  thin: 'Poppins-Thin.ttf',
  thinItalic: 'Poppins-ThinItalic.ttf',
};
const size = {
  input: {fontSize: moderateScale(25), fontFamily: type.base},
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
};
//Text.defaultProps.style = { color: 'red' }
const props = {
  Text: {
    backgroundColor: 'transparent',
    fontSize: moderateScale(16),
    fontFamily: type.base,
  },
  TextInput: {
    underlineColorAndroid: 'transparent',
    keyboardType: 'numeric',
  },
};
const style = {
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
};
export default {
  type,
  size,
  props,
  style,
  scale,
  verticalScale,
  moderateScale,
};
