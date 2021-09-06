import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, ForgotPasswordScreen, ResetPasswordScreen } from '@module';

export type AuthorizationStackParams = {
  LoginScreen: undefined,
  ForgotPassword: undefined,
  ResetPasswordScreen: undefined,
}

const Stack = createStackNavigator<AuthorizationStackParams>();

export const AuthorizationStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={'LoginScreen'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        component={LoginScreen}
        name={'LoginScreen'}
      />
      <Stack.Screen
        component={ForgotPasswordScreen}
        name={'ForgotPassword'}
      />
      <Stack.Screen
        component={ResetPasswordScreen}
        name={'ResetPasswordScreen'}
      />
    </Stack.Navigator>
  )
}
