import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParams } from '@navigation';

type SettingNavigationProps = StackNavigationProp<MainStackParams, 'SettingScreen'>


type SettingProps = {
  navigation: SettingNavigationProps,
}

export type { SettingNavigationProps, SettingProps };

