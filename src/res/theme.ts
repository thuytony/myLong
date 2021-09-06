import { ColorScheme, Colors } from './colors';
import { FontScheme, Fonts } from './fonts';
import { Dimens, DimenScheme } from './dimens';

export interface ThemeScheme {
  fonts: FontScheme;
  colors: ColorScheme;
  dimens: DimenScheme,
}

export const Theme: ThemeScheme = {
  fonts: {
    ...Fonts,
  },
  colors: {
    ...Colors,
  },
  dimens: {
    ...Dimens,
  }
}
