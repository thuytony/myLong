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
    marginTop: 40,
  },

  txtHeader: {
    marginBottom: 17,
  },

  rowItem: {
    flexDirection: 'row',
    marginTop: Theme.dimens.margin,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  txtLabel: {
    flex: 1,
    marginRight: Theme.dimens.margin,
    lineHeight: 22,
  },

});

export { styles };
