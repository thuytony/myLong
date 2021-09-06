import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { IAction, STATUS_CALLBACK } from '@redux';
import { ListingNurseAction } from './ListingNurse.action';
import { ParamsGetNurses } from '@networking';
import { Nurse, User } from '@model';
import mockDataNurses from '@networking/mockData/Nurses.mock.json';

function* getNurses(action: IAction<ParamsGetNurses, Nurse[]>) {
  try {
    yield delay(2000);
    const response: Nurse[] = mockDataNurses.data;

    yield put({ type: ListingNurseAction.GET_LIST_NURSE_SUCCESS, data: response, payload: action.payload });

    if (action.payload?.callback && typeof (action.payload.callback) === 'function') action.payload.callback({status: STATUS_CALLBACK.SUCCESS});
  } catch (e) {
    yield put({ type: ListingNurseAction.GET_LIST_NURSE_ERROR, error: 'Can not get nurses' });
    if (action.payload?.callback && typeof (action.payload.callback) === 'function') action.payload.callback({status: STATUS_CALLBACK.FAILED});
  }
}

function* watchListingNurse () {
  yield takeLatest(ListingNurseAction.GET_LIST_NURSE, getNurses);
}

export { watchListingNurse };