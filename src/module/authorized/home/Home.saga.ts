import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { IAction, STATUS_CALLBACK } from '@redux';
import { HomeAction } from './Home.action';
import { ParamsGetNurses } from '@networking';
import { ListPopular, Nurse, User } from '@model';
import mockDataNursesHome from '@networking/mockData/Home.mock.json';

function* getHome(action: IAction<ParamsGetNurses, ListPopular>) {
  try {
    yield delay(2000);
    const response: ListPopular = mockDataNursesHome.data;
    yield put({ type: HomeAction.GET_HOME_SUCCESS, data: response });

    if (action.payload?.callback && typeof (action.payload.callback) === 'function') action.payload.callback({status: STATUS_CALLBACK.SUCCESS});
  } catch (e) {
    yield put({ type: HomeAction.GET_HOME_ERROR, error: 'Can not get listing home' });
    if (action.payload?.callback && typeof (action.payload.callback) === 'function') action.payload.callback({status: STATUS_CALLBACK.FAILED});
  }
}

function* watchHome () {
  yield takeLatest(HomeAction.GET_HOME, getHome);
}

export { watchHome };
