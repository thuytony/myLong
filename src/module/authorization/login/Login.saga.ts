import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { IAction, STATUS_CALLBACK } from '@redux';
import { LoginAction } from './Login.action';
import { ParamsLogin } from '@networking';
import { User } from '@model';
import mockDataLogin from '@networking/mockData/Login.mock.json';

function* login(action: IAction<ParamsLogin, User>) {
  try {
    yield delay(2000);
    const response: User = mockDataLogin.data;
    yield put({ type: LoginAction.LOGIN_SUCCESS, data: response });

    if (action.payload?.callback && typeof (action.payload.callback) === 'function') action.payload.callback({status: STATUS_CALLBACK.SUCCESS});
  } catch (e) {
    yield put({ type: LoginAction.LOGIN_ERROR, error: 'Can not login' });
    if (action.payload?.callback && typeof (action.payload.callback) === 'function') action.payload.callback({status: STATUS_CALLBACK.FAILED});
  }
}

function* watchLogin () {
  yield takeLatest(LoginAction.LOGIN, login);
}

export { watchLogin };