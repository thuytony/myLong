import React, { useEffect, useRef, useState } from 'react';
import { View, Image, TouchableOpacity, ListRenderItemInfo, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toolbar, TextView, InputText, Button, CardNurse, EmptyPlaceholder } from '@components';
import { styles } from './ListingNurse.style';
import { ListingNurseProps } from './ListingNurse.type';
import { IMAGES } from '@assets';
import { ICallBack, STATUS_CALLBACK, useCommonModalDetail, useCommonModalInfor } from '@redux';
import { Utils } from '@utils';
import { Nurse, User } from '@model';
import { useGetListingNurse } from './ListingNurse.hook';
import { Theme } from '@res';

const initPage = 1;
let currentPage = initPage;

export const ListingNurseScreen: React.FC<ListingNurseProps> = (props) => {

  const { cityName } = props?.route?.params;

  const [isGettingListNurse, getListNurse, nursesData] = useGetListingNurse();

  // get nurse listing when didmount
  useEffect(() => {
    getListNurse({page: currentPage, size: 10});
  }, []);

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

  // function call hook show modal submit success
  const showModalSubmit = () => {
    showModalInfor({
      title: 'Your request has been submitted.',
      content: 'Your recruiter will contact you shortly.',
    });
  }

  // Setup Flatlist
  const onRefresh = () => {
    currentPage = initPage;
    getListNurse({page: currentPage, size: 10});
  };

  const keyExtractor = (item: Nurse, index: number) => `${item.id}-${index}`;

  const renderSeparateItem = () => {
    return (<View style={styles.seperateItem} />)
  }

  const renderHeader = () => {
    if (isGettingListNurse && (currentPage === initPage)) {
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
    if (isGettingListNurse && (currentPage !== initPage)) {
      return <ActivityIndicator size="large" color={Theme.colors.primary} style={styles.footerList} />;
    }
    return null;
  };

  const renderEmpty = () => {
    if (!isGettingListNurse) {
      return (<TextView title1>Data empty.</TextView>);
    }
    return null;
  };

  const renderItem = ({item}: ListRenderItemInfo<Nurse>) => {
    return (
      <CardNurse
        data={item}
        onPress={()=>onPressNurse(item)}
        onPressSubmit={showModalSubmit}
      />
    );
  };

  const onHandleScrollEnd = () => {
    if (!isGettingListNurse) {
      currentPage = currentPage + 1;
      getListNurse({page: currentPage, size: 10});
    }
  };
  // end setup Flatlist

  const onPressNurse = (nurse: Nurse) => {
    showModalDetail({
      data: nurse,
    })
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Toolbar
          title={cityName ? cityName : 'suggesteed'}
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
            refreshing={isGettingListNurse}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            data={nursesData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={onRefresh} />
            }
            onEndReachedThreshold={0.4}
            onEndReached={onHandleScrollEnd}
          />
      </View>
    </SafeAreaView>
  );
};
