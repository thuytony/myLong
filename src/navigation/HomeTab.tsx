import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useCommonModalInfor } from '@redux';
import { HomeScreen } from '@module';
import { Image } from 'react-native';
import { ICONS } from '@assets';
import { Theme } from '@res';

export type HomeTabParams = {
  HomeScreen: undefined,
  SearcheScreen: undefined,
  MyJobScreen: undefined,
  TimecardScreen: undefined,
}

const Tab = createBottomTabNavigator<HomeTabParams>();

export const HomeTab: React.FC<BottomTabBarProps> = () => {

  /** define hook show modal alert */
  const [isVisibleModalInfor, showModalInfor, hideModalInfor] = useCommonModalInfor();

  // function call hook show modal function developing
  const showModalDevelope = () => {
    showModalInfor({
      title: 'Please complete application.',
      content: 'You will be able to access this feature once you’ve completed the application.',
    });
  }

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Theme.colors.activeTab,
        tabBarInactiveTintColor: Theme.colors.inActiveTab,
        headerShown: false
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image source={ICONS.ICON_NAV_HOME} style={{tintColor: color}} />
          ),
        }}
        
      />
      <Tab.Screen
        name="SearcheScreen"
        component={ScreenPlaceHolder}
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Image source={ICONS.ICON_NAV_SEARCH} style={{tintColor: color}} />
          ),
        }}
        listeners={() => ({
          tabPress: event => {
            event.preventDefault();
            showModalDevelope();
          }
        })}
      />
      <Tab.Screen
        name="MyJobScreen"
        component={ScreenPlaceHolder}
        options={{
          title: "My Jobs",
          tabBarIcon: ({ color, size }) => (
            <Image source={ICONS.ICON_NAV_MYJOB} style={{tintColor: color}} />
          ),
        }}
        listeners={() => ({
          tabPress: event => {
            event.preventDefault();
            showModalDevelope();
          }
        })}
      />
      <Tab.Screen
        name="TimecardScreen"
        component={ScreenPlaceHolder}
        options={{
          title: "Timecard",
          tabBarIcon: ({ color, size }) => (
            <Image source={ICONS.ICON_NAV_TIMECARD} style={{tintColor: color}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const ScreenPlaceHolder = () => (
  <View style={{flex: 1}} />
)