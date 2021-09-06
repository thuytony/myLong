import { IAction, STATUS_STATE } from '@redux';
import { Nurse, City, ListPopular } from '@model';
import { HomeAction } from './Home.action';
import { HomeState } from './Home.type';
import { ParamsGetCities, ParamsGetHome, ParamsGetNurses } from '@networking';

export class HomeReducer {
  private static readonly _initialState: HomeState = {
    status: STATUS_STATE.initial,
    errorMessage: '',
    data: new ListPopular(),
  }

  public static reducer(
    state: HomeState = HomeReducer._initialState, action: IAction<ParamsGetHome, ListPopular>
  ): HomeState {
    switch (action.type) {
      case HomeAction.GET_HOME:
      return {
        ...state,
        status: STATUS_STATE.loading,
        errorMessage: '',
        data: new ListPopular(),
      }

      case HomeAction.GET_HOME_SUCCESS:
      return {
        ...state,
        status: STATUS_STATE.success,
        errorMessage: '',
        data: action.data ? action.data : new ListPopular(),
      }

      case HomeAction.GET_HOME_ERROR:
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
