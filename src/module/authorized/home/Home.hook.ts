import { useDispatch, useSelector } from 'react-redux';
import { ICallBack, RootState, STATUS_STATE } from '@redux';
import { ParamsGetNurses, ParamsGetCities, ParamsGetHome } from '@networking';
import { HomeState } from './Home.type';
import { HomeAction } from './Home.action';
import { ListPopular } from '@model';

export function useGetHome(didGetHome: (result: ICallBack) => void):
[boolean, (params: ParamsGetHome) => void, ListPopular?] {
  const homeReducer = useSelector<RootState, HomeState>(state => state.homeReducer);
  const dispatch = useDispatch();

  const isGettingHome: boolean = Boolean(homeReducer.status === STATUS_STATE.loading);
  const dataHome = homeReducer.data;

  const getHome = (params: ParamsGetHome) => {
    dispatch(HomeAction.getHome({
      ...params,
      callback: didGetHome,
    }));
  }

  return [isGettingHome, getHome, dataHome];
}
