import React, { useEffect, useState } from 'react';
import { View, Switch, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toolbar, TextView, InputText, Button } from '@components';
import { styles } from './Setting.style';
import { SettingProps } from './Setting.type';
import { IMAGES } from '@assets';
import { ICallBack, STATUS_CALLBACK } from '@redux';
import { Utils } from '@utils';
import { Theme } from '@res';

enum TypeSwitch {
  JOB = 1,
  TIMECARD = 2,
}

export const SettingScreen: React.FC<SettingProps> = (props) => {

  const [isEnabledJob, setIsEnabledJob] = useState(false);
  const [isEnabledTimeCard, setIsEnabledTimeCard] = useState(false);

  const toggleSwitchJob = (type: TypeSwitch, previousState: boolean) => {
    if (type === TypeSwitch.JOB) {
      setIsEnabledJob(previousState => !previousState);
    } else if (type === TypeSwitch.TIMECARD) {
      setIsEnabledTimeCard(previousState => !previousState);
    }
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Toolbar
          title="settings"
          hasLeft
          onPressLeft={()=>props.navigation.pop()}
        />
        <View style={styles.content}>
          <TextView h6 style={styles.txtHeader}>NOTIFICATIONS</TextView>

          <RowItemSeting
            title={"Job recommendations"}
            isEnabled={isEnabledJob}
            onSwitch={(previousState: boolean)=>toggleSwitchJob(TypeSwitch.JOB, previousState)}
          />
          <RowItemSeting
            title={"Timecard submission reminders"}
            isEnabled={isEnabledTimeCard}
            onSwitch={(previousState: boolean)=>toggleSwitchJob(TypeSwitch.TIMECARD, previousState)}
          />

        </View>
      </View>
    </SafeAreaView>
  );
};

const RowItemSeting = ({ title, isEnabled, onSwitch }) => {

  return (
    <View style={styles.rowItem}>
      <TextView body1 style={styles.txtLabel} numberOfLines={1}>{title}</TextView>
      <Switch
        trackColor={{ false: Theme.colors.gray, true: Theme.colors.primary }}
        thumbColor={isEnabled ? Theme.colors.white : Theme.colors.primary}
        ios_backgroundColor={Theme.colors.gray}
        onValueChange={onSwitch}
        value={isEnabled}
        style={Platform.OS === 'ios' ? { transform: [{ scaleX: .8 }, { scaleY: .8 }] } : {}}
      />
    </View>
  )
}