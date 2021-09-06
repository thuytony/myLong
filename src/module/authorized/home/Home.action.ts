import { ListPopular, User } from '@model';
import { IAction } from '@redux';
import { ParamsGetHome } from '@networking';

export class HomeAction {

  public static readonly GET_HOME: string = 'HomeAction.GET_HOME';
  public static readonly GET_HOME_SUCCESS: string = 'HomeAction.GET_HOME_SUCCESS';
  public static readonly GET_HOME_ERROR: string = 'HomeAction.GET_HOME_ERROR';

  public static getHome = (payload: ParamsGetHome): IAction<ParamsGetHome, ListPopular> => {
    return {
      payload,
      type: HomeAction.GET_HOME
    }
  }

}
