import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ImageSourcePropType, TouchableNativeFeedback } from 'react-native';
import { TextView } from '@components';

import { Theme } from '@res';
import { ICONS } from '@assets';

export interface RowItemMenuProps {
  srcIcon: ImageSourcePropType;
  label: string;
  onPress?: () => void;
}

export const RowItemMenu: React.FC<RowItemMenuProps> = (props) => {

  const {
    srcIcon, label, onPress = ()=>{},
  } = props;

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.content}>
        <Image source={srcIcon} style={styles.icon} />
        <TextView title2 style={styles.txtLabel} numberOfLines={1}>{label}</TextView>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },
  icon: {
    tintColor: Theme.colors.white,
  },
  txtLabel: {
    color: Theme.colors.white,
    flex: 1,
    marginLeft: Theme.dimens.largeMargin,
    lineHeight: 23,
  },
});