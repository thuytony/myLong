import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, RefreshControl, ActivityIndicator, ListRenderItemInfo } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toolbar, TextView, InputText, Button, EmptyPlaceholder, CardCity } from '@components';
import { IMAGES } from '@assets';
import { ICallBack, STATUS_CALLBACK } from '@redux';
import { Utils } from '@utils';
import { City } from '@model';
import { styles } from './ListingCity.style';
import { ListingCityProps } from './ListingCity.type';
import { useGetListCity } from './ListingCity.hook';
import { Theme } from '@res';

const initPage = 1;
let currentPage = initPage;

export const ListingCityScreen: React.FC<ListingCityProps> = (props) => {

  const [isGettingListCity, getListCity, citiesData] = useGetListCity();

  // get city listing when didmount
  useEffect(() => {
    getListCity({page: currentPage, size: 10});
  }, []);

  // Start setup Flatlist
  const onRefresh = () => {
    currentPage = initPage;
    getListCity({page: currentPage, size: 10});
  };

  const keyExtractor = (item: City, index: number) => `${item.id}-${index}`;

  const renderSeparateItem = () => {
    return (<View style={styles.seperateItem} />)
  }

  const renderHeader = () => {
    if (isGettingListCity && (currentPage === initPage)) {
      return (
        <View>
          <EmptyPlaceholder />
          <EmptyPlaceholder />
          <EmptyPlaceholder />
        </View>
      )
    }
    return (
      null
    );
  };

  const renderFooter = () => {
    if (isGettingListCity && (currentPage !== initPage)) {
      return <ActivityIndicator size="large" color={Theme.colors.primary} style={styles.footerList} />;
    }
    return null;
  };

  const renderEmpty = () => {
    if (!isGettingListCity) {
      return (<TextView title1>Data empty.</TextView>);
    }
    return null;
  };

  const renderItem = ({item}: ListRenderItemInfo<City>) => {
    return (
      <CardCity data={item} onPress={()=>onPressCity(item)} />
    );
  };

  const onHandleScrollEnd = () => {
    if (!isGettingListCity) {
      currentPage = currentPage + 1;
      getListCity({page: currentPage, size: 10});
    }
  };
  // End setup Flatlist

  const onPressCity = (city: City) => {
    props.navigation.navigate('ListingNurseScreen', {cityName: city.district});
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Toolbar
          title={'matches in popular cities'}
          textAllCapTitle
          hasLeft={true}
          onPressLeft={()=>props.navigation.pop()}
        />
          <FlatList
            style={styles.listView}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={renderEmpty}
            ItemSeparatorComponent={renderSeparateItem}
            refreshing={isGettingListCity}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            data={citiesData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={onRefresh} />
            }
            onEndReachedThreshold={0.1}
            onEndReached={onHandleScrollEnd}
          />
      </View>
    </SafeAreaView>
  );
};
