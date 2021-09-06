
/**
 * Normalize size of fonts, width, height across devices (base on iPhone X)
 * How to use:
 * 1. Import
 * import normalize from '/utils';
 * 2. Get normalized value: normalize(size)
 */
import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} = Dimensions.get('window');

// based on iPhone X/XS's scale
const wscale = DEVICE_WIDTH / 375;
const hscale = DEVICE_HEIGHT / 812;

type baseType = 'width' | 'height';

export const normalize = function normalize(
  size: number,
  based: baseType = 'width',
) {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
