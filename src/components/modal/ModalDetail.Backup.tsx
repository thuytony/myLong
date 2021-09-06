import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Modal, ModalProps, Dimensions, TouchableOpacity } from 'react-native';
import { TextView } from '@components';

const screenHeight = Dimensions.get("window").height;

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
  duration: 300,
};

export interface ModalDetailProps extends ModalProps {
  isVisible: boolean;
  onClose: Function;
}

export const  ModalDetail: React.FC<ModalDetailProps>  = (props) => {

  // const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  const top = useRef(new Animated.Value(0)).current;

  const { isVisible, onClose } = props;

  

  // const top = useSharedValue(screenHeight)

  // const animatedStyles = useAnimatedStyle(() => {
  //   return {
  //     top: top.value,
  //   };
  // });

  const animatedStyles = {top: 0};

  // useEffect(() => {
  //   top.value = withSpring(
  //     screenHeight / 2,
  //     SPRING_CONFIG
  //   )
  // }, [])

  // const [showModal, setShowModal] = useState(true);



  // useEffect(() => {
  //   console.group('chay day: ', showModal);
  //   if (showModal) {
  //     Animated.timing(top, {
  //       toValue: 1,
  //       duration: 500,
  //       useNativeDriver: false,
  //     }).start();
  //   } else {
  //     Animated.timing(top, {
  //       toValue: 0,
  //       duration: 500,
  //       useNativeDriver: false,
  //     }).start(() => onClose());
  //   }
  // }, [showModal]);

  // useEffect(() => {
  //   toggleModal();
  // }, []);

  // const toggleModal = () => {
  //   Animated.spring(top, {
  //     toValue: 174
  //   }).start()
  // }

  // const closeModal = () => {
  //   Animated.spring(top, {
  //     toValue: screenHeight,
  //   }).start(() => onClose())
  // }

  

  // const modalY = top.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [screenHeight, screenHeight - 600]
  // })

  // useEffect(() => {
  //   Animated.spring(
  //     top,
  //     {
  //       toValue: 300,
  //     }
  //   ).start();
  // }, [isVisible])

  const onModalShow = () => {
    Animated.spring(top, { toValue: 600 }).start();
  };

  const onPressConfirm = () => {
    Animated.spring(top, { toValue: screenHeight }).start();
  }

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onShow={onModalShow}
      onDismiss={onPressConfirm}
      onRequestClose={onPressConfirm}
    >
      <View style={styles.modal}>
        <TouchableWithoutFeedback
          // onPress={()=>closeModal()}
          style={{backgroundColor: 'red'}}
        >
          <View style={styles.content}>

          </View>
        </TouchableWithoutFeedback>

        <Animated.View
          style={[{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: top.value,
            padding: 20,
            backgroundColor: 'white',
          }, animatedStyles]}
        >
          <TextView>Bottom view</TextView>
          <TouchableOpacity onPress={()=>{
            console.log('press me')
            // top.value = withSpring(screenHeight, SPRING_CONFIG, ()=>onClose())
            // Animated.spring(
            //   top,
            //   {
            //     toValue: screenHeight,
            //   }
            // ).start(()=>onClose())
            // setShowModal(false)
            onClose();
          }}>
            <TextView>Press me</TextView>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
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
  }

});
