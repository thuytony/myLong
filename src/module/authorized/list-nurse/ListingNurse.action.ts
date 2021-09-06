import { Nurse, User } from '@model';
import { IAction } from '@redux';
import { ParamsGetNurses } from '@networking';

export class ListingNurseAction {
  public static readonly GET_LIST_NURSE: string = 'ListingNurseAction.GET_LIST_NURSE';
  public static readonly GET_LIST_NURSE_SUCCESS: string = 'ListingNurseAction.GET_LIST_NURSE_SUCCESS';
  public static readonly GET_LIST_NURSE_ERROR: string = 'ListingNurseAction.GET_LIST_NURSE_ERROR';

  public static getNurses = (payload: ParamsGetNurses): IAction<ParamsGetNurses, Nurse[]> => {
    return {
      payload,
      type: ListingNurseAction.GET_LIST_NURSE,
    }
  }
}
