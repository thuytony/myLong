import { Colors } from './colors';

enum CUSTOM_FOMT_FAMILY {
  AVENIR_BLACK = 'Avenir-Black',
  AVENIR_MEDIUM = 'Avenir-Medium',
  AVENIR_LIGHT = 'Avenir-Light',
  AVENIR_HEAVY = 'Avenir-Heavy',
  AVENIR_BOOK = 'Avenir-Book',
  AVENIR_ROMAN = 'Avenir-Roman',
};

// font size
interface FontSizeScheme {
  normal: number;
  big: number;
  small: number;
}

// font family
interface FontFamilyScheme {
  avenir: string;
}

// font theme
interface configFont {
  fontSize: number;
  lineHeight: number;
  fontWeight: string;
  fontFamily: string;
  color: string,
}
interface FontThemeScheme {
  medium: configFont,
  title1: configFont;
  title2: configFont;
  title3: configFont;
  body1: configFont;
  body2: configFont;
  body3: configFont;
  button: configFont;
  ghostButton: configFont;
  subTitle1: configFont;
  subTitle3: configFont;
  h6: configFont;
}

export interface FontScheme {
  fontSize: FontSizeScheme,
  fontFamily: FontFamilyScheme,
  fontTheme: FontThemeScheme,
}

export const Fonts: FontScheme = {
  fontSize: {
    normal: 14,
    big: 16,
    small: 12,
  },
  fontFamily: {
    avenir: CUSTOM_FOMT_FAMILY.AVENIR_MEDIUM,
  },
  fontTheme: {
    medium: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: '600',
      fontFamily: CUSTOM_FOMT_FAMILY.AVENIR_MEDIUM,
      color: Colors.text,
    },
    title1: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '800',
      fontFamily: CUSTOM_FOMT_FAMILY.AVENIR_HEAVY,
      color: Colors.textSecondary,
    },
    title2: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: '800',
      fontFamily: CUSTOM_FOMT_FAMILY.AVENIR_HEAVY,
      color: Colors.textSecondary,
    },
    title3: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: '800',
      fontFamily: CUSTOM_FOMT_FAMILY.AVENIR_HEAVY,
      color: Colors.textSecondary,
    },
    body1: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '400',
      fontFamily: CUSTOM_FOMT_FAMILY.AVENIR_BOOK,
      color: Colors.textSecondary,
    },
    body2: {
      fontSize: 14,
      lineHeight: 18,
      fontWeight: '400',
      fontFamily: CUSTOM_FOMT_FAMILY.AVENIR_BOOK,
      color: Colors.textPlaceHolder,
    },
    body3: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: '400',
      fontFamily: CUSTOM_FOMT_FAMILY.AVENIR_BOOK,
      color: Colors.primary,
    },
    button: {
      fontSize: 15,
      lineHeight: 20,
      fontWeight: '500',
      fontFamily: CUSTOM_FOMT_FAMILY.AVENIR_MEDIUM,
      color: Colors.primary,
    },
    ghostButton: {
      fontSize: 16,
      lineHeight: 18,
      fontWeight: '400',
      fontFamily: CUSTOM_FOMT_FAMILY.AVENIR_MEDIUM,
      color: Colors.primary,
    },
    subTitle1: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '500',
      fontFamily: CUSTOM_FOMT_FAMILY.AVENIR_MEDIUM,
      color: Colors.secondary,
    },
    subTitle3: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: '500',
      fontFamily: CUSTOM_FOMT_FAMILY.AVENIR_MEDIUM,
      color: Colors.secondary,
    },
    h6: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '500',
      fontFamily: CUSTOM_FOMT_FAMILY.AVENIR_MEDIUM,
      color: Colors.primary,
    }
  },
}
