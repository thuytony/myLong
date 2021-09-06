import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { MainStackParams } from '@navigation';
import { Nurse } from '@model';
import { IState } from '@redux';

export type ListingNurseNavigationProps = StackNavigationProp<MainStackParams, 'ListingNurseScreen'>

type ListNurseRouteProp = RouteProp<MainStackParams, 'ListingNurseScreen'>;

export type ListingNurseProps = {
  navigation: ListingNurseNavigationProps,
  route: ListNurseRouteProp
}

export type ListingNurseState = IState<Nurse[]>;
