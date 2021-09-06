import { StyleSheet } from 'react-native';
import { Theme } from '@res';

const styles = StyleSheet.create({

  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  content: {
    paddingHorizontal: Theme.dimens.largeMargin,
  },
  logo: {
    marginTop: 48,
    alignSelf: 'center',
  },
  inputEmail: {
    marginTop: 36,
  },
  inputPassword: {
    marginTop: 28,
  },
  btnSignin: {
    marginTop: 48,
  },
  txtForgotPassword: {
    ...Theme.fonts.fontTheme.ghostButton,
    marginTop: Theme.dimens.largeMargin,
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },

});

export { styles };
