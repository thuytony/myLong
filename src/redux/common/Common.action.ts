import { Nurse, User } from '@model';
import { IAction } from '@redux';
import { ParamsGetNurses } from '@networking';

export type DataModalInfor = {
  isLoader?: boolean,
  title?: string
  content?: string
  callback?: () => void
}

export type DataModalDetail = {
  data: Nurse
  onTellMore?: () => void
  onSubmit?: () => void
}

export class CommonAction {
  public static readonly SHOW_MODAL_INFOR: string = 'CommonAction.SHOW_MODAL_INFOR';
  public static readonly HIDE_MODAL_INFOR: string = 'CommonAction.HIDE_MODAL_INFOR';

  public static readonly SHOW_MODAL_DETAIL: string = 'CommonAction.SHOW_MODAL_DETAIL';
  public static readonly HIDE_MODAL_DETAIL: string = 'CommonAction.HIDE_MODAL_DETAIL';
  

  // modal alert popup, loading
  public static showModalInfor = (payload: DataModalInfor): IAction<DataModalInfor, any> => {
    return {
      payload,
      type: CommonAction.SHOW_MODAL_INFOR,
    }
  }

  public static hideModalInfor = (): IAction<null, any> => {
    return {
      type: CommonAction.HIDE_MODAL_INFOR,
    }
  }

  // modal show detail registered nurse
  public static showModalDetail = (payload: DataModalDetail): IAction<DataModalDetail, any> => {
    return {
      payload,
      type: CommonAction.SHOW_MODAL_DETAIL,
    }
  }

  public static hideModalDetail = (): IAction<null, any> => {
    return {
      type: CommonAction.HIDE_MODAL_DETAIL,
    }
  }
}
