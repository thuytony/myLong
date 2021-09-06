import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toolbar, TextView, InputText, Button } from '@components';
import { IMAGES } from '@assets';
import { ICallBack, STATUS_CALLBACK, useCommonModalInfor } from '@redux';
import { Utils } from '@utils';
import { styles } from './ResetPassword.style';
import { ResetPasswordProps } from './ResetPassword.type';
import { useCode, usePassword } from './ResetPassword.hook';

export const ResetPasswordScreen: React.FC<ResetPasswordProps> = (props) => {

  const [showError, setShowError] = useState(false);
  const [code, setCode, isCodeValidate] = useCode('');
  const [password, setPassword, isPasswordValidate] = usePassword('');
  const [rePasswrod, setRePassword, isRePasswordValidate] = usePassword('');

  const onPressConfirm = React.useCallback(() => {
    props.navigation.navigate('LoginScreen');
  }, []);
  const [isVisibleModalInfor, showModalInfor, hideModalInfor] = useCommonModalInfor(onPressConfirm);

  const [isVisibelModalNotMatch, showModalNotMatch, hideModalNotMatch] = useCommonModalInfor();

  const onPressSend = () => {
    if (isDataValidate()) {
      showModalInfor({
        title: 'Successful password reset!',
        content: 'You can now use your new password to login to your account!',
      });
    }
  };

  const isDataValidate = () => {
    if (rePasswrod !== password) {
      showModalNotMatch({
        title: 'Password not match.',
        content: 'The password confirmation does not match.',
      });
      return false;
    }

    if (isCodeValidate && isPasswordValidate && isRePasswordValidate) {
      return true;
    } else {
      setShowError(true);
      return false;
    }
  }


  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Toolbar
          title="reset password"
          hasLeft
          onPressLeft={()=>props.navigation.pop()}
        />
        <View style={styles.content}>
          <InputText
            label="Enter code"
            placeholder="Please input code"
            value={code}
            onChangeText={(value)=>setCode(value)}
            containerStyle={styles.inputEmail}
            error={!isCodeValidate && showError}
          />
          <InputText
              label="New Password"
              placeholder="New password"
              value={password}
              onChangeText={(text: string) => setPassword(text)}
              password
              containerStyle={styles.inputPassword}
              error={!isPasswordValidate && showError}
            />
            <InputText
              label="Confirm New Password"
              placeholder="Confirm new password"
              value={rePasswrod}
              onChangeText={(text: string) => setRePassword(text)}
              password
              containerStyle={styles.inputPassword}
              error={!isRePasswordValidate && showError}
            />
          <Button
            title="send code"
            onPress={onPressSend}
            style={styles.btnSignin}
            textAllCap
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

