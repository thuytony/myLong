import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Theme } from '@res';
import { TextViewProps, TextView, Button } from '@components';
import { Nurse } from '@model';
import { ICONS } from '@assets';

export interface CardNurseProps extends TouchableWithoutFeedbackProps {
  data?: Nurse;
  style?: ViewStyle;
  onPressSubmit?: (nurse: Nurse) => void;
}

export const CardNurse: React.FC<CardNurseProps> = (props) => {

  const {
    data, style, onPressSubmit = ()=>{},
  } = props;

  const cardStyle = StyleSheet.flatten([styles.card, style]);

  return (
    <TouchableWithoutFeedback
      {...props}
    >
      <View style={cardStyle}>

        <View style={styles.cardContent}>
          <View style={styles.left}>
            <TextView title1>{data?.name}</TextView>
            <TextView style={styles.txtCompany}>{data?.company}</TextView>

            <RowItemWithIcon source={ICONS.ICON_LOCATION} title={data?.location} />
            <RowItemWithIcon source={ICONS.ICON_CALENDAR} title={data?.date ? new Date(data?.date).toLocaleDateString() : ''} />
            <RowItemWithIcon source={ICONS.ICON_TYPE} title={data?.major} />

          </View>
          <View style={styles.right}>
            <LinearGradient colors={['#00D1D1', '#0ECDA6']} style={styles.bgPercentMatch}>
              <TextView style={styles.txtPercentMatch}>{data?.match}</TextView>
            </LinearGradient>
            <TextView style={styles.txtMatch}>% match</TextView>
          </View>
        </View>

        <TextView body3 style={styles.txtEstimate}>Estimate <TextView title1>{`$${data?.price}`}</TextView><TextView body2> /wk</TextView></TextView>
        <Button
          rounded
          title="please submit"
          textAllCap
          onPress={()=>onPressSubmit(data!!)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const RowItemWithIcon = ({source, title}) => {
  return (
    <View style={styles.wrapIconContent}>
      <Image source={source} resizeMode="contain" />
      <TextView subTitle3 style={styles.txtTitleIcon}>{title}</TextView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingTop: 12,
    paddingBottom: Theme.dimens.margin,
    paddingHorizontal: Theme.dimens.largeMargin,
    backgroundColor: Theme.colors.backgroundLight,
    borderRadius: Theme.dimens.cardRadius,
  },
  cardContent: {
    flexDirection: 'row',
    marginBottom: 4,
  },

  left: {
    flex: 1,
  },
  txtCompany: {
    fontSize: 12,
    fontStyle: 'italic',
    lineHeight: 16,
    marginBottom: Theme.dimens.margin,
  },
  wrapIconContent: {
    flexDirection: 'row',
    marginTop: 2,
  },
  txtTitleIcon: {
    flex: 1,
    marginLeft: 14,
  },

  right: {
    alignItems: 'flex-end',
  },
  bgPercentMatch: {
    borderRadius: 9,
    backgroundColor: 'red',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPercentMatch: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Theme.colors.white,
  },
  txtMatch: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'italic',
    lineHeight: 20,
  },

  txtEstimate: {
    textAlign: 'right',
    marginBottom: Theme.dimens.margin,
  },
});