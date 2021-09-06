import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Drawer } from '@components';
import { IMAGES } from '@assets';
import { styles } from './Home.style';
import { HomeProps } from './Home.type';
import { HomeContent } from './home-content/HomeContent.view';
import { HomeMenu } from './home-menu/HomeMenu.view';

export class HomeScreen extends React.Component<HomeProps> {

  constructor(props: HomeProps) {
    super(props);
    this.state = {isOpen: false};
  }

  renderContent() {
    return <HomeContent {...this.props} showHideDrawer={this.showHideDrawer} />
  }

  renderSidebar() {
    return <HomeMenu {...this.props} showHideDrawer={this.showHideDrawer} />
  }

  showHideDrawer = (isOpen: boolean) => {
    this.setState({isOpen});
  }

  render() {
    return (
      <Drawer
        shouldOpen={()=>this.showHideDrawer(true)}
        shouldClose={()=>this.showHideDrawer(false)}
        isOpen={this.state.isOpen}
        content={this.renderContent()}
        sidebarContent={this.renderSidebar()}
      />
    )
  }

}
