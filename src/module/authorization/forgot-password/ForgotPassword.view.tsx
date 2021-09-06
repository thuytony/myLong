import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toolbar, TextView, InputText, Button } from '@components';
import { IMAGES } from '@assets';
import { ICallBack, STATUS_CALLBACK, useCommonModalInfor } from '@redux';
import { Utils } from '@utils';
import { styles } from './ForgotPassword.style';
import { ForgotPasswordProps } from './ForgotPassword.type';

export const ForgotPasswordScreen: React.FC<ForgotPasswordProps> = (props) => {

  const [email, setEmail] = useState('');
  const [hasErrorEmail, setHasErrorEmail] = useState(false);

  const onPressConfirm = React.useCallback(() => {
    props.navigation.navigate('ResetPasswordScreen');
  }, []);
  const [isVisibleModalInfor, showModalInfor, hideModalInfor] = useCommonModalInfor(onPressConfirm);

  const onChangeEmail = (email: string) => {
    setEmail(email);
    if (email.length > 0 && hasErrorEmail) setHasErrorEmail(false);
    if (email.length === 0 && !hasErrorEmail) setHasErrorEmail(true);
  };

  const onPressSend = () => {
    if (isDataValidate()) {
      showModalInfor({
        title: 'Code sent!',
        content: 'Please check your email for further instructions.',
      });
    } else {
      if (!hasErrorEmail) setHasErrorEmail(true);
    }
  };

  function isDataValidate() {
    if (!Utils.isEmailValidate(email)) return false;
    return true;
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Toolbar
          title="forgot password"
          hasLeft
          onPressLeft={()=>props.navigation.pop()}
        />
        <View style={styles.content}>
          <InputText
            label="Email"
            placeholder="mhayes@bartonhealth.com"
            value={email}
            onChangeText={onChangeEmail}
            containerStyle={styles.inputEmail}
            error={hasErrorEmail}
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

