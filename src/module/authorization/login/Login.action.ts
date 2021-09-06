import { User } from '@model';
import { IAction } from '@redux';
import { ParamsLogin } from '@networking';

export class LoginAction {
  public static readonly LOGIN: string = 'LoginAction.LOGIN';
  public static readonly LOGIN_SUCCESS: string = 'LoginAction.LOGIN_SUCCESS';
  public static readonly LOGIN_ERROR: string = 'LoginAction.LOGIN_ERROR';

  public static login = (payload: ParamsLogin): IAction<ParamsLogin, any> => {
    return {
      payload,
      type: LoginAction.LOGIN
    }
  }
}
