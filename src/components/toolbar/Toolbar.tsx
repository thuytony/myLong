import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { TextView } from '@components';

import { Theme } from '@res';
import { ICONS } from '@assets';

export interface ToolbarProps {
  hasLeft?: boolean;
  icon?: string;
  title?: string;
  onPressLeft?: () => void;
  textAllCapTitle?: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = (props) => {

  const {
    hasLeft = false, icon = ICONS.ICON_BACK, title = '', onPressLeft = () => {console.log('press left')},
    textAllCapTitle = true,
  } = props;

  return (
    <View style={styles.toolbar}>
      {hasLeft && 
        <TouchableOpacity onPress={onPressLeft} style={styles.wrapIconLeft}>
          <Image source={icon} style={styles.icBack} />
        </TouchableOpacity>
      }
      <TextView title1 style={styles.txtTitle} numberOfLines={1}>{textAllCapTitle ? title.toUpperCase() : title}</TextView>
      {hasLeft && <View style={styles.wrapIconRight} />}
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    height: Theme.dimens.toolbarHeight,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Theme.colors.colorLineToolbar,
    alignItems: 'center',
  },
  wrapIconLeft: {
    height: Theme.dimens.toolbarHeight,
    width: Theme.dimens.iconToolBar,
    // backgroundColor: 'red',
    justifyContent: 'center',
    marginLeft: Theme.dimens.margin,
  },
  wrapIconRight: {
    height: Theme.dimens.toolbarHeight,
    width: Theme.dimens.iconToolBar,
    marginRight: Theme.dimens.margin,
  },
  icBack: {
    // width: Theme.dimens.iconToolBar,
    tintColor: Theme.colors.primary,
    // backgroundColor: 'blue',
    alignSelf: 'flex-start',
  },
  txtTitle: {
    lineHeight: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    paddingHorizontal: Theme.dimens.smallMargin,
    // backgroundColor: 'green',
  },
});