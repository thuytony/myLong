import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '@res';

export const PADDING_CONTENT = Theme.dimens.largeMargin;
const SCREEN_WIDTH = Dimensions.get('window').width;
export const ITEM_NURSE_WIDTH = SCREEN_WIDTH - PADDING_CONTENT * 2;

const styles = StyleSheet.create({

  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  content: {
    // paddingLeft: PADDING_CONTENT,
    flex: 1,
  },
  marginLeftContent: {
    marginLeft: PADDING_CONTENT,
  },
  marginRightContent: {
    marginRight: PADDING_CONTENT,
  },

  timeCard: {
    marginTop: Theme.dimens.largeMargin,
    flexDirection: 'row',
    borderColor: Theme.colors.border,
    borderWidth: 3,
    borderRadius: Theme.dimens.cardRadius,
    paddingVertical: 14,
    paddingLeft: 25,
    paddingRight: 12,
  },
  contentTimeCards: {
    marginLeft: 12,
    flex: 1,
  },

  txtTitle: {
    marginTop: 32,
    marginBottom: Theme.dimens.margin,
  },

  wrapSlide: {
    // marginLeft: -(PADDING_CONTENT / 2),
  },
  cardItem: {
    width: ITEM_NURSE_WIDTH,
    marginLeft: PADDING_CONTENT / 2,
  },

  wrapButtonSeeMore: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: Theme.dimens.largeMargin,
  },
  btnRounded: {
    backgroundColor: '#F9FEFE',
  },

  wrapHolderNurse: {
    padding: Theme.dimens.largeMargin,
  },
  itemCity: {
    marginTop: Theme.dimens.margin,
  },
  spaceBottom: {
    height: 60,
  },

});

export { styles };
