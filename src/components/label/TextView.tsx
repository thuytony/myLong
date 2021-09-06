import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

import { Theme } from '@res';

export interface TextViewProps extends TextProps {
  title1?: boolean;
  title2?: boolean;
  title3?: boolean;
  body1?: boolean;
  body2?: boolean;
  body3?: boolean;
  button?: boolean;
  ghostButton?: boolean;
  subTitle1?: boolean;
  subTitle3?: boolean;
  h6?: boolean;
}

export const TextView: React.FC<TextViewProps> = (props) => {

  const {
    children, style,
    title1, title2, title3, body1, body2, body3, button, ghostButton, subTitle1, subTitle3, h6,
  } = props;

  const textStyle = StyleSheet.flatten([
    styles.text,
    title1 && Theme.fonts.fontTheme.title1,
    title2 && Theme.fonts.fontTheme.title2,
    title3 && Theme.fonts.fontTheme.title3,
    body1 && Theme.fonts.fontTheme.body1,
    body2 && Theme.fonts.fontTheme.body2,
    body3 && Theme.fonts.fontTheme.body3,
    button && Theme.fonts.fontTheme.button,
    ghostButton && Theme.fonts.fontTheme.ghostButton,
    subTitle1 && Theme.fonts.fontTheme.subTitle1,
    subTitle3 && Theme.fonts.fontTheme.subTitle3,
    h6 && Theme.fonts.fontTheme.h6,
    style,
  ])

  return (
    <Text
      {...props}
      style={textStyle}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Theme.fonts.fontFamily.avenir,
    fontSize: Theme.fonts.fontSize.normal,
    color: Theme.colors.text,
  },
});