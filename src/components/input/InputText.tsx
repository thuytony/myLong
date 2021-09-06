import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View, TouchableOpacity, Image, ViewStyle, TextStyle } from 'react-native';
import { TextView } from '@components';

import { Theme } from '@res';
import { ICONS } from '@assets';

export interface InputTextProps extends TextInputProps {
  label?: string;
  error?: boolean;
  password?: boolean;
  style?: TextStyle;
  containerStyle?: ViewStyle;
}

export const InputText: React.FC<InputTextProps> = (props) => {

  const [toggleSecure, setToggleSecure] = useState(true);

  const {
    style, containerStyle,
    label, error, password,
  } = props;

  const wrapInputStyle = containerStyle ? containerStyle : {};

  const inputStyle = StyleSheet.flatten([
    styles.input,
    Theme.fonts.fontTheme.body2,
    style,
  ]);

  const lineInputStyle = StyleSheet.flatten([
    styles.divider,
    error && { backgroundColor: Theme.colors.error },
  ])

  const renderLabel = () => {

    return (
      <View>
        {label ? <TextView title3 style={styles.txtLabel}>{label}</TextView> : null}
      </View>
    )
  }

  const renderToggle = () => {

    return (
      <TouchableOpacity
        style={styles.wrapToggle}
        onPress={() => setToggleSecure(!toggleSecure)}
      >
        <View style={styles.toggle}>
          <Image source={toggleSecure ? ICONS.ICON_INVISIBLE_PASSWORD : ICONS.ICON_VISIBLE_PASSWORD} style={styles.iconToggle} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={wrapInputStyle}>
      {renderLabel()}
      <View style={styles.wrapInput}>
        <TextInput
          {...props}
          style={inputStyle}
          // multiline={true}
          // numberOfLines={3}
          secureTextEntry={password && toggleSecure}
        />
        {password && renderToggle()}
      </View>
      <View style={lineInputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // height: Theme.dimens.inputHeight,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: Theme.colors.borderInput,
    // backgroundColor: 'red',
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    // textAlignVertical: 'bottom',
    // alignSelf: 'flex-end',
    // alignItems: 'center',
  },
  wrapToggle: {
    // backgroundColor: 'green',
    justifyContent: 'center',
  },
  toggle: {
    // position: 'absolute',
    // alignItems: 'flex-end',
    width: Theme.dimens.iconButton,
    height: Theme.dimens.iconButton,
    // top: Theme.dimens.margin,
    // bottom: 0,
    // right: 0,
    // backgroundColor: 'blue',
    marginLeft: Theme.dimens.smallMargin,
  },
  iconToggle: {
    width: Theme.dimens.iconButton,
    height: Theme.dimens.iconButton,
    tintColor: Theme.colors.primary,
  },
  wrapInput: {
    flexDirection: 'row',
  },
  txtLabel: {
    // backgroundColor: 'green',
    marginBottom: Theme.dimens.margin,
  },
  divider: {
    // flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Theme.colors.borderInput,
    marginTop: Theme.dimens.margin,
    width: '100%',
  },
});