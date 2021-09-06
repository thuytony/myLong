import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParams } from '@navigation';
import { City } from '@model';
import { IState } from '@redux';

export type ListingCityNavigationProps = StackNavigationProp<MainStackParams, 'ListingCityScreen'>


export type ListingCityProps = {
  navigation: ListingCityNavigationProps,
}

export type ListingCityState = IState<City[]>;
