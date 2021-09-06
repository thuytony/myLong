import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { IAction, STATUS_CALLBACK } from '@redux';
import { ListingCityAction } from './ListingCity.action';
import { ParamsGetCities } from '@networking';
import { City, User } from '@model';
import mockDataCities from '@networking/mockData/Cities.mock.json';

function* getCities(action: IAction<ParamsGetCities, City[]>) {
  try {
    yield delay(2000);
    const response: City[] = mockDataCities.data;

    yield put({ type: ListingCityAction.GET_LIST_CITIES_SUCCESS, data: response, payload: action.payload });

    if (action.payload?.callback && typeof (action.payload.callback) === 'function') action.payload.callback({status: STATUS_CALLBACK.SUCCESS});
  } catch (e) {
    yield put({ type: ListingCityAction.GET_LIST_CITIES_ERROR, error: 'Can not get cities' });
    if (action.payload?.callback && typeof (action.payload.callback) === 'function') action.payload.callback({status: STATUS_CALLBACK.FAILED});
  }
}

function* watchListingCity () {
  yield takeLatest(ListingCityAction.GET_LIST_CITIES, getCities);
}

export { watchListingCity };