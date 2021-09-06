import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toolbar, TextView, InputText, Button } from '@components';
import { IMAGES } from '@assets';
import { ICallBack, STATUS_CALLBACK, useCommonModalInfor } from '@redux';
import { Utils } from '@utils';
import { styles } from './Login.style';
import { LoginProps } from './Login.type';
import { useLogin, useEmail, usePassword } from './Login.hook';

export const LoginScreen: React.FC<LoginProps> = (props) => {

  const [email, setEmail, isEmailValidate] = useEmail('');
  const [password, setPassword, isPasswordValidate] = usePassword('');
  const [showError, setShowError] = useState(false);
  const [isVisibleModalInfor, showModalInfor, hideModalInfor] = useCommonModalInfor();

  const onDidLogin = React.useCallback((result: ICallBack) => {
    console.log('did login: ', result);
    const { navigation } = props;
    hideModalInfor();
  }, []);
  const [isLoggingin, login] = useLogin(onDidLogin);

  const onPressSignin = () => {
    console.log('on press sign in: ', email, password);
    if (isEmailValidate && isPasswordValidate) {
      login({
        username: email,
        password,
        callback: onDidLogin,
      });
      showModalInfor({isLoader: true})
    } else {
      setShowError(true);
    }
  };

  const onPressForgot = () => {
    props.navigation.navigate('ForgotPassword');
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Toolbar title="sign-in" />
        <View style={styles.content}>
          <ScrollView>
            <Image source={IMAGES.LOGO} style={styles.logo} />
            <InputText
              label="Email"
              placeholder="mhayes@bartonhealth.com"
              value={email}
              onChangeText={(text: string) => setEmail(text)}
              containerStyle={styles.inputEmail}
              error={!isEmailValidate && showError}
            />
            <InputText
              label="Password"
              placeholder="Please input password"
              value={password}
              onChangeText={(text: string) => setPassword(text)}
              password
              containerStyle={styles.inputPassword}
              error={!isPasswordValidate && showError}
            />
            <Button
              title="Sign in"
              onPress={onPressSignin}
              style={styles.btnSignin}
              textAllCap
            />
            <TouchableOpacity onPress={onPressForgot}>
              <TextView style={styles.txtForgotPassword}>Forgot password?</TextView>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
