import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toolbar, TextView, InputText, Button, ModalDetail } from '@components';
import { ICONS, IMAGES } from '@assets';
import { ICallBack, STATUS_CALLBACK } from '@redux';
import { Utils } from '@utils';
import { RowItemMenu } from './RowItemMenu';
import { HomeProps } from '../Home.type';
import { styles } from './HomeMenu.style';

type HomeDraweProps = {
  showHideDrawer: Function,
}

type HomeMenuProps = HomeProps & HomeDraweProps;

export const HomeMenu: React.FC<HomeMenuProps> = (props) => {

  const onPressSetting = () => {
    props.showHideDrawer(false);
    props.navigation.navigate('SettingScreen');
  }

  return (
    <View style={styles.container}>
      <RowItemMenu
        label="Profile"
        srcIcon={ICONS.ICON_PROFILE}
      />
      <RowItemMenu
        label="Benefits"
        srcIcon={ICONS.ICON_BENEFIT}
      />
      <RowItemMenu
        label="Settings "
        srcIcon={ICONS.ICON_SETTING}
        onPress={onPressSetting}
      />
      <RowItemMenu
        label="Change password"
        srcIcon={ICONS.ICON_CHANGE_PASSWORD}
      />
      <RowItemMenu
        label="Log out"
        srcIcon={ICONS.ICON_LOG_OUT}
      />
    </View>
  )

}
