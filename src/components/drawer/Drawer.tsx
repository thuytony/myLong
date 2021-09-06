import * as React from 'react';
import { Animated, Dimensions, PanResponder, StyleSheet, FunctionComponent, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SCREEN_WIDTH = Dimensions.get('window').width;
const REST_WIDTHOUT_SLIDEBAR = 60;
const SLIDEBAR_WIDTH = SCREEN_WIDTH - REST_WIDTHOUT_SLIDEBAR;
const TRIGGER_THRESHOLD = 60;
const TRIGGER_AREA = 60;

type DrawerPorps = {
  shouldOpen: Function,
  shouldClose: Function,
  isOpen: boolean,
  sidebarContent: any,
  content: any,
}

export class Drawer extends React.Component<DrawerPorps> {
    constructor(props) {
      super(props);
      this.state = {
        pan: new Animated.Value(0),
        open: this.open.bind(this),
        close: this.close.bind(this)
      };
      this.animatedValueX = 0;

      // keep the animation value between 0 and SLIDEBAR_WIDTH
      this.state.pan.addListener(({ value }) => {
        return this.animatedValueX = Math.max(0, Math.min(value, SLIDEBAR_WIDTH));
      });

      // declare an event listener when the user moves finger
      this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt) => {
          if (this.props.isOpen) {
            return true;
          }
          else {
            return evt.nativeEvent.locationX < TRIGGER_AREA;
          }
        },
        onStartShouldSetPanResponderCapture: () => false,
        onMoveShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponderCapture: () => false,
        onPanResponderTerminationRequest: () => false,
        onPanResponderTerminate: () => false,
        onShouldBlockNativeResponder: () => false,
        onPanResponderGrant: () => {
          this.state.pan.setOffset(this.animatedValueX);
          this.state.pan.setValue(0);
        },
        onPanResponderMove: (evt, gestureState) => {
          return Animated.event([null, {
            dx: this.state.pan,
          }], {useNativeDriver: false})(evt, gestureState);
        },
        onPanResponderRelease: (evt, gestureState) => {
          if (gestureState.dx > TRIGGER_THRESHOLD) {
            this.props.shouldOpen();
          } else if (gestureState.dx < -TRIGGER_THRESHOLD) {
            this.props.shouldClose();
          } else {
            this.state.pan.flattenOffset();
            const distanceFromStart = this.animatedValueX;
            const distanceFromEnd = SLIDEBAR_WIDTH - this.animatedValueX;
            if (distanceFromStart > distanceFromEnd) {
              this.props.shouldOpen();
            }
            else {
              this.props.shouldClose();
            }
          }
        },
      });
    }

    // function open drawer
    open() {
        Animated.timing(this.state.pan, {
            toValue: SLIDEBAR_WIDTH,
            useNativeDriver: false,
        }).start();
    }

    // function close drawer
    close() {
        Animated.timing(this.state.pan, {
          toValue: -SLIDEBAR_WIDTH,
          useNativeDriver: false,
        }).start();
    }

    // clear event listener
    componentWillUnmount() {
      this.state.pan.removeAllListeners();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isOpen) {
        prevState.open();
      } else {
        prevState.close();
      }
      return prevState;
    }
    componentDidUpdate(prevProps, prevState) {
      if(prevProps.isOpen !== this.props.isOpen){
        if (this.props.isOpen) {
          this.open();
        }
        else {
          this.close();
        }
      }
    }

    render() {
      const constrainedX = this.state.pan.interpolate({
        inputRange: [0, 0, SLIDEBAR_WIDTH, Infinity],
        outputRange: [0, 0, SLIDEBAR_WIDTH, SLIDEBAR_WIDTH]
      });
        
      return (
        <View
          {...this.panResponder.panHandlers}
          style={styles.container}
        >
          <Animated.View style={styles.contentView}>
            {this.props.content}
          </Animated.View>
          <Animated.View
            style={[styles.leftView, {
              width: SLIDEBAR_WIDTH,
              left: -SLIDEBAR_WIDTH,
              transform: [{
                translateX: constrainedX
              }]
            }]}
          >
            {this.props.sidebarContent}
          </Animated.View>
        </View>
      )
    }
}

const styles = StyleSheet.create({

  container: {
    flex: 1, backgroundColor: 'transparent'
  },
  contentView: {
    position: 'absolute',
  },
  leftView: {
    flex: 1,
  },

});

