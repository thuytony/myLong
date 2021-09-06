import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet, View, TouchableWithoutFeedback, Modal, ModalProps, Image, ScrollView, TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { CommonState, RootState } from '@redux';
import { TextView, Button } from '@components';
import { CommonAction } from '@redux';
import { Theme } from '@res';
import { ICONS } from '@assets';

const MARGIN_TOP = 60;
const HEADER_HEIGHT = 44;

export interface ModalDetaillProps extends ModalProps {
  
}

export const  ModalDetail: React.FC<ModalDetaillProps>  = (props) => {

  const commonReducer = useSelector<RootState, CommonState>(state => state.commonReducer);
  const { modalDetail } = commonReducer;
  const dispatch = useDispatch();

  const onClickBackAndroid = () => {
    console.log('click back android');
    closeModal();
  }

  const closeModal = () => {
    dispatch(CommonAction.hideModalDetail());
  };

  const onPressTellMore = () => {
    if (modalDetail.onTellMore && typeof(modalDetail.onTellMore) === 'function') {
      modalDetail.onTellMore();
      closeModal();
    }
  }

  const onPressSubmit = () => {
    if (modalDetail.onSubmit && typeof(modalDetail.onSubmit) === 'function') {
      modalDetail.onSubmit();
      closeModal();
    }
  }

  const { data } = modalDetail;

  return (
    <Modal
      visible={modalDetail.isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClickBackAndroid}
    >
      <View style={styles.modal}>
        <TouchableWithoutFeedback
          onPress={()=>dispatch(CommonAction.hideModalDetail())}
        >
          <View style={styles.content}>
          <TextView>OK</TextView>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.card}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.wrapBtnClose} onPress={closeModal}>
              <Image source={ICONS.ICON_CLOSE_MODAL} />
            </TouchableOpacity>
          </View>
          <View style={styles.cardContent}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.wrapRegistedNurse}>
                <View style={styles.left}>
                  <TextView title1>{data?.name}</TextView>
                  <TextView style={styles.txtCompany}>{data?.company}</TextView>

                  <TextView subTitle3 style={styles.txtLabelLocation}>Location</TextView>
                  <TextView body2 style={styles.txtContentLocation}>{data?.location}</TextView>
                  <TextView subTitle3 style={styles.txtLabelLocation}>Job ID</TextView>
                  <TextView body2 style={styles.txtContentLocation}>{data?.id}</TextView>

                </View>
                <View style={styles.right}>
                  <LinearGradient colors={['#00D1D1', '#0ECDA6']} style={styles.bgPercentMatch}>
                    <TextView style={styles.txtPercentMatch}>{data?.match}</TextView>
                  </LinearGradient>
                  <TextView style={styles.txtMatch}>% match</TextView>
                </View>
              </View>

              <TextView body3 style={styles.txtEstimate}>Estimate <TextView title1>{`$${data?.price}`}</TextView><TextView body2> /wk</TextView></TextView>
              
              <Divider marginTop={16} marginBottom={24} />

              <TextView subTitle1>Details</TextView>
              <RowItem title="Discipline" content={data?.discipline} />
              <RowItem title="Specialty" content={data?.specialty} />
              <RowItem title="Start Date" content={data?.startDate ? new Date(data?.startDate).toLocaleDateString() : ''} />
              <RowItem title="End Date" content={data?.endDate ? new Date(data?.endDate).toLocaleDateString() : ''} />
              <RowItem title="Duration" content={data?.duration} />
              <RowItem title="Shifts / Week" content={data?.shiftPerWeek} />
              <RowItem title="Hours / Week" content={data?.hourPerWeek} />

              <Divider marginTop={24} marginBottom={24} />

              <TextView subTitle1>Requirements</TextView>
              <RowItem title="License" content={data?.license} />
              <RowItem title="License State" content={data?.licenseState} />
              <RowItem title="Certification" content={data?.certification} />
              
              <View style={styles.footer}>
                <View style={styles.btnTellMore}>
                  <Button
                    title="Tell more"
                    textAllCap
                    onPress={onPressTellMore}
                  />
                </View>
                <View style={styles.btnSubmit}>
                  <Button
                    title="Please submit"
                    textAllCap
                    onPress={onPressSubmit}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

      </View>
    </Modal>
  )

}

const RowItem = ({title, content}) => {
  return (
    <View style={styles.rowInfor}>
      <TextView subTitle3 style={styles.rowInforLeft} numberOfLines={1}>{title}</TextView>
      <TextView body2 style={styles.rowInforRight} numberOfLines={1}>{content}</TextView>
    </View>
  )
}

const Divider = ({marginTop = 0, marginBottom = 0}) => {
  const styleDivider = StyleSheet.flatten([
    styles.divider,
    {marginTop, marginBottom},
  ])
  return (
    <View style={styleDivider} />
  )
}

const styles = StyleSheet.create({

  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  card: {
    marginTop: MARGIN_TOP,
    paddingBottom: MARGIN_TOP + HEADER_HEIGHT,
    backgroundColor: Theme.colors.white,
    borderTopLeftRadius: Theme.dimens.cardRadius,
    borderTopRightRadius: Theme.dimens.cardRadius,
    padding: Theme.dimens.largeMargin,
  },
  header: {
    height: HEADER_HEIGHT,
    justifyContent: 'flex-start',
  },
  wrapBtnClose: {
    width: 50,
    paddingBottom: 10,
  },
  cardContent: {
    
  },
  wrapRegistedNurse: {
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

  txtLabelLocation: {
    marginTop: 12,
  },
  txtContentLocation: {
    marginTop: 4,
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
  },
  divider: {
    height: 1,
    backgroundColor: Theme.colors.border,
  },

  rowInfor: {
    flexDirection: 'row',
    marginTop: 12,
  },
  rowInforLeft: {
    flex: 1/3
  },
  rowInforRight: {
    flex: 2/3
  },

  footer: {
    flexDirection: 'row',
    marginTop: 32,
  },
  btnTellMore: {
    flex: 1,
    marginRight: 4,
    backgroundColor: Theme.colors.white,
  },
  btnSubmit: {
    flex: 1,
    marginLeft: 4,
  },

});
