import { IAction, STATUS_STATE } from '@redux';
import { Nurse, City } from '@model';
import { ListingNurseAction } from './ListingNurse.action';
import { ListingNurseState } from './ListingNurse.type';
import { ParamsGetCities, ParamsGetNurses } from '@networking';

export class ListingNurseReducer {
  private static readonly _initialState: ListingNurseState = {
    status: STATUS_STATE.initial,
    errorMessage: '',
    data: [],
  }

  public static reducer(
    state: ListingNurseState = ListingNurseReducer._initialState, action: IAction<ParamsGetNurses, Nurse[]>
  ): ListingNurseState {
    switch (action.type) {
      // get list nurse
      case ListingNurseAction.GET_LIST_NURSE:
      return {
        ...state,
        status: STATUS_STATE.loading,
        errorMessage: '',
        data: (action.payload?.page === 1) ? [] : state.data,
      }

      case ListingNurseAction.GET_LIST_NURSE_SUCCESS: {
        let newData: Nurse[] = [];
        if (action.data && action.payload && action.payload?.page > 1) {
          newData = action.data.concat(state.data!!);
        } else {
          newData = action.data || [];
        }
        return {
          ...state,
          status: STATUS_STATE.success,
          errorMessage: '',
          data: newData,
        }
      }

      case ListingNurseAction.GET_LIST_NURSE_ERROR:
      return {
        ...state,
        status: STATUS_STATE.error,
        errorMessage: action.error,
      }

      default:
        return state
    }
}
}