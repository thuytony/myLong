import { IAction, STATUS_STATE } from '@redux';
import { Nurse, City } from '@model';
import { ListingCityAction } from './ListingCity.action';
import { ListingCityState } from './ListingCity.type';
import { ParamsGetCities } from '@networking';

export class ListingCityReducer {
  private static readonly _initialState: ListingCityState = {
    status: STATUS_STATE.initial,
    errorMessage: '',
    data: [],
  }

  public static reducer(
    state: ListingCityState = ListingCityReducer._initialState, action: IAction<ParamsGetCities, City[]>
  ): ListingCityState {
    switch (action.type) {
      case ListingCityAction.GET_LIST_CITIES:
      return {
        ...state,
        status: STATUS_STATE.loading,
        errorMessage: '',
        data: (action.payload?.page === 1) ? [] : state.data,
      }

      case ListingCityAction.GET_LIST_CITIES_SUCCESS: {
        let newData: City[] = [];
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

      case ListingCityAction.GET_LIST_CITIES_ERROR:
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