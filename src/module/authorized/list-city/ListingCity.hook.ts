import { useDispatch, useSelector } from 'react-redux';
import { ICallBack, RootState, STATUS_STATE } from '@redux';
import { ParamsGetCities } from '@networking';
import { ListingCityState } from './ListingCity.type';
import { ListingCityAction } from './ListingCity.action';
import { City } from '@model';

export function useGetListCity(didGetListCity?: (result: ICallBack) => void):
[boolean, (params: ParamsGetCities) => void, City[]] {
  const listCityReducer = useSelector<RootState, ListingCityState>(state => state.citiesReducer);
  const dispatch = useDispatch();

  const isGettingListCity: boolean = Boolean(listCityReducer.status === STATUS_STATE.loading);
  const citiesData = listCityReducer.data || [];

  const getListCity = (params: ParamsGetCities) => {
    dispatch(ListingCityAction.getCities({
      ...params,
      callback: didGetListCity,
    }));
  }

  return [isGettingListCity, getListCity, citiesData];
}
