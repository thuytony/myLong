import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { AuthorizationStack } from './AuthorizationNavigator';
import { MainStack } from './MainNavigation';
import { ModalInfor, ModalDetail } from '@components';
import { RootState } from '@redux';
import { LoginState } from '@module';

const RootNavigator: React.FC = () => {

  const loginReducer = useSelector<RootState, LoginState>(state => state.loginReducer);

  const isDarkMode = useColorScheme() === 'dark';

  const isAuthorized = true;

  const renderNavigator = React.useMemo(() => {

    if (loginReducer.data?.id) {
      return (
        <>
          <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
          <MainStack />
        </>
      )
    }
    return (
      <>
        <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
        <AuthorizationStack />
      </>
    )
  }, [loginReducer.data]);

  return (
    <NavigationContainer>
      {renderNavigator}
      <ModalInfor />
      <ModalDetail />
    </NavigationContainer>
  )

}

export { RootNavigator };