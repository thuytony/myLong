import { useDispatch, useSelector } from 'react-redux';
import { ICallBack, RootState, STATUS_STATE } from '@redux';
import { ParamsGetNurses, ParamsGetCities } from '@networking';
import { ListingNurseState } from './ListingNurse.type';
import { ListingNurseAction } from './ListingNurse.action';
import { Nurse } from '@model';

export function useGetListingNurse(didGetListNurse?: (result: ICallBack) => void):
  [boolean, (params: ParamsGetNurses) => void, Nurse[]] {
  const listNurseReducer = useSelector<RootState, ListingNurseState>(state => state.nursesReducer);
  const dispatch = useDispatch();

  const isGettingListNurse: boolean = Boolean(listNurseReducer.status === STATUS_STATE.loading);
  const nursesData = listNurseReducer.data || [];

  const getListNurse = (params: ParamsGetNurses) => {
    dispatch(ListingNurseAction.getNurses({
      ...params,
      callback: didGetListNurse,
    }));
  }

  return [isGettingListNurse, getListNurse, nursesData];
}
