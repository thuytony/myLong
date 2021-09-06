import React from 'react';
import { View, Animated, Pressable, StyleSheet, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListingCityScreen, ListingNurseScreen, SettingScreen } from '@module';
import { HomeTab } from './HomeTab';
import { useTheme } from '@react-navigation/native';
import { useCardAnimation } from '@react-navigation/stack';

export type MainStackParams = {
  HomeTab: undefined,
  ListingCityScreen: undefined,
  ListingNurseScreen: {
    cityName?: string
  },
  SettingScreen: undefined,
}

const Stack = createStackNavigator<MainStackParams>();

export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomeTab'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={HomeTab}
        name={'HomeTab'}
      />
      <Stack.Screen
        component={ListingCityScreen}
        name={'ListingCityScreen'}
      />
      <Stack.Screen
        component={ListingNurseScreen}
        name={'ListingNurseScreen'}
      />
      <Stack.Screen
        component={SettingScreen}
        name={'SettingScreen'}
      />
    </Stack.Navigator>
  )
}
