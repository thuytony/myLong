import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, ViewStyle } from 'react-native';
import { Theme } from '@res';
import { TextViewProps, TextView, Button } from '@components';
import { City, Nurse } from '@model';
import { ICONS } from '@assets';

export interface CardCityProps extends TouchableWithoutFeedbackProps {
  data?: City;
  style?: ViewStyle;
}

export const CardCity: React.FC<CardCityProps> = (props) => {

  const {
    data, style
  } = props;

  const cardStyle = StyleSheet.flatten([styles.card, style]);

  return (
    <TouchableWithoutFeedback
      {...props}
    >
      <View style={cardStyle}>

        <View style={styles.wrapAddress}>
          <TextView title1>{data?.district}</TextView>
          <TextView body3> {data?.state}</TextView>
        </View>

        <View style={styles.wrapEstimate}>
          <TextView title2>{data?.match} <TextView body3>Matches</TextView></TextView>
          <TextView style={styles.txtFrom}>From <TextView title1>{`$${data?.price}`}</TextView><TextView body3> /wk</TextView></TextView>
        </View>
        
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 12,
    paddingBottom: Theme.dimens.margin,
    paddingHorizontal: Theme.dimens.largeMargin,
    backgroundColor: Theme.colors.backgroundLight,
    borderRadius: Theme.dimens.cardRadius,
  },
  wrapAddress: {
    flexDirection: 'row',
    marginBottom: Theme.dimens.margin,
    alignItems: 'flex-end',
  },
  wrapEstimate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  txtFrom: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'italic',
    lineHeight: 20,
  },

  
});