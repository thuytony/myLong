import { IAction, STATUS_STATE } from '@redux';
import { User } from '@model';
import { LoginAction } from './Login.action';
import { LoginState } from './Login.type';
import { ParamsLogin } from '@networking';

export class LoginReducer {
  private static readonly _initialState: LoginState = {
    status: STATUS_STATE.initial,
    errorMessage: '',
    data: new User(),
  }

  public static reducer(state: LoginState = LoginReducer._initialState, action: IAction<ParamsLogin, User>): LoginState {
    switch (action.type) {
      case LoginAction.LOGIN:
      return {
        ...state,
        status: STATUS_STATE.loading,
        errorMessage: '',
        data: new User(),
      }

      case LoginAction.LOGIN_SUCCESS:
      return {
        ...state,
        status: STATUS_STATE.success,
        errorMessage: '',
        data: action.data ? action.data : new User(),
      }

      case LoginAction.LOGIN_ERROR:
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