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
  inputEmail: {
    marginTop: 20,
  },
  btnSignin: {
    marginTop: 48,
  },

});

export { styles };
