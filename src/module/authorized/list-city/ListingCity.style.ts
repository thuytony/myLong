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
    flex: 1,
  },
  listView: {
    padding: Theme.dimens.largeMargin,
  },
  footerList: {
    marginBottom: Theme.dimens.largeMargin,
  },
  seperateItem: {
    height: Theme.dimens.margin,
  },

});

export { styles };
