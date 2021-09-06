import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet, View, TouchableWithoutFeedback, Modal, ModalProps, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { CommonState, RootState } from '@redux';
import { TextView, Button } from '@components';
import { CommonAction } from '@redux';
import { Theme } from '@res';

export interface ModalInforlProps extends ModalProps {
  
}

export const  ModalInfor: React.FC<ModalInforlProps>  = (props) => {

  const commonReducer = useSelector<RootState, CommonState>(state => state.commonReducer);
  const { modalInfor } = commonReducer;
  const dispatch = useDispatch();

  const onPressConfirm = () => {
    if (modalInfor.callback && typeof(modalInfor.callback) === 'function') modalInfor.callback();
    dispatch(CommonAction.hideModalInfor());
  }

  const onClickBackAndroid = () => {
    console.log('click back android');
    dispatch(CommonAction.hideModalInfor());
  }

  const renderAlert = () => {
    return (
      <SafeAreaView style={styles.contentView}>
        <TextView title1>{modalInfor.title}</TextView>
        <TextView body2 style={styles.txtContent}>{modalInfor.content}</TextView>
        <Button
          title="OK"
          onPress={onPressConfirm}
        />
      </SafeAreaView>
    )
  }

  const renderLoader = () => {
    return (
      <View style={styles.viewLoader}>
        <ActivityIndicator color={Theme.colors.primary} size="large" />
      </View>
    )
  }

  const styleModal = modalInfor.isLoader ? [styles.modal, {justifyContent: 'center'}] : styles.modal;

  return (
    <Modal
      visible={modalInfor.isVisible}
      animationType="slide"
      transparent={true}
      onDismiss={onPressConfirm}
      onRequestClose={onClickBackAndroid}
    >
      <View style={styleModal}>
        <TouchableWithoutFeedback
          onPress={()=>dispatch(CommonAction.hideModalInfor())}
        >
          {
            modalInfor.isLoader ? renderLoader() : renderAlert()
          }
        </TouchableWithoutFeedback>
      </View>

    </Modal>
  )

}

const styles = StyleSheet.create({

  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  contentView: {
    backgroundColor: Theme.colors.white,
    borderTopLeftRadius: Theme.dimens.cardRadius,
    borderTopRightRadius: Theme.dimens.cardRadius,
    left: 0,
    right: 0,
    position: 'absolute',
    padding: 20,
    paddingBottom: 40,
  },

  txtContent: {
    marginTop: 12,
    marginBottom: 24,
  },

  viewLoader: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: 'rgba(2555,255,255,0.4)',
    alignSelf: 'center',
    justifyContent: 'center',
  },

});
