import React from 'react';
import { Image, StyleSheet, TouchableOpacity, TouchableOpacityProps, ImageSourcePropType, ViewStyle } from 'react-native';

import { Theme } from '@res';
import { TextViewProps, TextView } from '@components';

type buttonMode = 'outlined' | 'contained';

export interface ButtonProps extends TouchableOpacityProps {
  mode?: buttonMode;
  title?: string;
  titleStyle?: TextViewProps;
  icon?: ImageSourcePropType;
  textAllCap?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  style?: ViewStyle;
  // onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {

  const {
    style,
    mode = 'contained', title, titleStyle, icon, textAllCap, disabled, rounded,
  } = props;

  const btnStyle = StyleSheet.flatten([
    mode === 'outlined' ? styles.btnOutline : styles.btnContained,
    rounded && styles.btnRounded,
    disabled && styles.btnDisable,
    style,
  ]);

  const btnTitleStyle = StyleSheet.flatten([
    titleStyle,
    disabled && styles.titleDisable,
    styles.txtTitle,
  ]);

  const iconStyle = StyleSheet.flatten([
    styles.icon,
    disabled && styles.iconDisable,
  ]);

  return (
    <TouchableOpacity
      {...props}
      style={btnStyle}
    >
      {icon && <Image source={icon} style={iconStyle} />}
      {title && <TextView button style={btnTitleStyle}>{textAllCap ? title.toUpperCase() : title}</TextView>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnOutline: {
    flexDirection: 'row',
    backgroundColor: Theme.colors.white,
    borderWidth: Theme.dimens.borderHeight,
    borderColor: Theme.colors.border,
    padding: Theme.dimens.paddingButton,
    borderRadius: Theme.dimens.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContained: {
    flexDirection: 'row',
    backgroundColor: Theme.colors.background,
    borderWidth: Theme.dimens.borderHeight,
    borderColor: Theme.colors.border,
    padding: Theme.dimens.paddingButton,
    borderRadius: Theme.dimens.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDisable: {
    borderColor: Theme.colors.gray,
    backgroundColor: Theme.colors.gray,
  },
  btnRounded: {
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: Theme.dimens.cardRadius,
  },
  titleDisable: {
    color: Theme.colors.white,
  },
  icon: {
    marginRight: 4,
    width: Theme.dimens.iconButton,
    height: Theme.dimens.iconButton,
  },
  iconDisable: {
    tintColor: Theme.colors.white,
  },
  txtTitle: {
    lineHeight: 25,
    // backgroundColor: 'red',
  },
});