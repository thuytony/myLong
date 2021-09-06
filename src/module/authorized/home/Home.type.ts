import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParams } from '@navigation';
import { ParamsGetNurses, ParamsGetCities } from '@networking';
import { IState, IAction } from '@redux';
import { Nurse, City, ListPopular } from '@model';

export type HomeNavigationProps = StackNavigationProp<MainStackParams, 'HomeTab'>


export type HomeProps = {
  navigation: HomeNavigationProps,
  onGetNurses: (params: ParamsGetNurses) => void
}

export type HomeState = IState<ListPopular>
