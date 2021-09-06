import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toolbar, TextView, InputText, Button, ModalDetail, CardNurse, CardCity, EmptyPlaceholder } from '@components';
import { ICONS, IMAGES } from '@assets';
import { ICallBack, STATUS_CALLBACK, useCommonModalInfor, useCommonModalDetail } from '@redux';
import { Utils } from '@utils';
import { Theme } from '@res';
import { useGetHome } from '../Home.hook';
import { HomeProps } from '../Home.type';
import { styles, PADDING_CONTENT, ITEM_NURSE_WIDTH } from './HomeContent.style';
import { City, Nurse } from '@model';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

type HomeDraweProps = {
  showHideDrawer: Function,
}

type HomeContentProps = HomeProps & HomeDraweProps;

export const HomeContent: React.FC<HomeContentProps> = (props) => {

  // get home listing
  useEffect(() => {
    getHome({takeNumberCity: 3, takeNumberNurse: 3});
  }, []);

  /** defined hook get home listing
   * example callback when get listing done
   */
  const onDidGetHome = React.useCallback((result: ICallBack) => {
    const { navigation } = props;
  }, []);
  const [isGettingHome, getHome, dataHome] = useGetHome(onDidGetHome);

  /** define hook show modal alert */
  const [isVisibleModalInfor, showModalInfor, hideModalInfor] = useCommonModalInfor();

  /** define hook show modal job detail
   * callback when click tell more, submit on modal
   */
  const onTellMore = React.useCallback(() => {
    console.log('onTellMore onTellMore: ');
  }, []);
  const onsubmit = React.useCallback(() => {
    console.log('onsubmit onsubmit: ');
    showModalSubmit();
  }, []);
  const [isVisibleModalDetail, showModalDetail, hideModalDetail] = useCommonModalDetail(onTellMore, onsubmit);


  const onSeeMoreNurse = () => {
    props.navigation.navigate('ListingNurseScreen', {cityName: ''});
  }

  const onPressNurse = (nurse: Nurse) => {
    showModalDetail({
      data: nurse,
    })
  }

  const onSeeMoreCity = () => {
    props.navigation.navigate('ListingCityScreen');
  }

  const onPressCity = (city: City) => {
    props.navigation.navigate('ListingNurseScreen', {cityName: city.district});
  }

  // function call hook show modal submit success
  const showModalSubmit = () => {
    showModalInfor({
      title: 'Your request has been submitted.',
      content: 'Your recruiter will contact you shortly.',
    });
  }

  const renderSuggested = () => {
    if (isGettingHome) {
      return (
        <View style={styles.wrapHolderNurse}>
          <EmptyPlaceholder />
          <EmptyPlaceholder />
          <EmptyPlaceholder />
        </View>
      )
    } else {
      return (
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          style={styles.wrapSlide}
          showsHorizontalScrollIndicator={false}
          // snapToInterval={ITEM_NURSE_WIDTH}
          snapToAlignment={"center"}
          scrollEventThrottle={1}
          decelerationRate={0}
          disableScrollViewPanResponder={true}
        >
          <View style={{width: PADDING_CONTENT/2}} />
          {
            dataHome?.nursePopular?.map(nurse => (
              <CardNurse
                key={nurse.id}
                style={styles.cardItem}
                data={nurse}
                onPress={()=>onPressNurse(nurse)}
                onPressSubmit={showModalSubmit}
              />
            ))
          }
          <View style={{width: PADDING_CONTENT}} />
        </ScrollView>
      )
    }
  }

  const renderPopularCity = () => {
    if (isGettingHome) {
      return (
        <View>
          <EmptyPlaceholder />
          <EmptyPlaceholder />
          <EmptyPlaceholder />
        </View>
      )
    } else {
      return (
        dataHome?.citiesPopular?.map((city, index) => (
          <CardCity key={city.id} data={city} style={(index > 0) ? styles.itemCity : {}} onPress={()=>onPressCity(city)} />
        ))
      )
    }
  }

  return (
    <SafeAreaView style={[styles.safeView, {width: SCREEN_WIDTH, height: SCREEN_HEIGHT}]}>
      <View style={styles.container}>
        <Toolbar
          title="home"
          hasLeft
          icon={ICONS.ICON_HAMBURGER}
          onPressLeft={()=>props.showHideDrawer(true)}
        />
        <View style={styles.content}>
          <ScrollView>

            <View style={[styles.marginRightContent, styles.marginLeftContent]}>
              <TouchableOpacity style={styles.timeCard}>
                <Image source={ICONS.ICON_ADD_TIME_CARD} />
                <View style={styles.contentTimeCards}>
                  <TextView title1>Timecards</TextView>
                  <TextView body3>Easily upload images of your timecards for quick processing.</TextView>
                </View>
              </TouchableOpacity>

              <TextView h6 style={styles.txtTitle}>SUGGESTED</TextView>
            </View>
            {renderSuggested()}
            <View style={[styles.marginRightContent, styles.marginLeftContent]}>
              <View style={styles.wrapButtonSeeMore}>
                <Button
                  title={"See more..."}
                  rounded
                  titleStyle={Theme.fonts.fontTheme.title2}
                  style={styles.btnRounded}
                  onPress={onSeeMoreNurse}
                />
              </View>

              <TextView h6 style={styles.txtTitle}>POPULAR CITIES</TextView>
              {renderPopularCity()}
              <View style={styles.wrapButtonSeeMore}>
                <Button
                  title={"See more..."}
                  rounded
                  titleStyle={Theme.fonts.fontTheme.title2}
                  style={styles.btnRounded}
                  onPress={onSeeMoreCity}
                />
              </View>
            </View>
            <View style={styles.spaceBottom} />

          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
