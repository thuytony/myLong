import { IAction, STATUS_STATE } from '@redux';
import { Nurse, City } from '@model';
import { CommonAction, DataModalDetail, DataModalInfor } from './Common.action';

export type CommonState = {
  modalInfor: {
    isVisible: boolean
    isLoader?: boolean
    title?: string
    content?: string
    callback?: Function | null,
  },
  modalDetail: {
    isVisible: boolean
    data?: Nurse,
    onTellMore?: Function | null,
    onSubmit?: Function | null,
  }
  
}

export class CommonReducer {
  private static readonly _initialState: CommonState = {
    modalInfor: {
      isVisible: false,
      isLoader: false,
      title: '',
      content: '',
      callback: null
    },
    modalDetail: {
      isVisible: false,
      data: new Nurse(),
      onTellMore: null,
      onSubmit: null,
    }
  }

  public static reducer(
    state: CommonState = CommonReducer._initialState, action: IAction<DataModalInfor & DataModalDetail, any>
  ): CommonState {
    switch (action.type) {
      // handle modal show popup, loading
      case CommonAction.SHOW_MODAL_INFOR:
      return {
        ...state,
        modalInfor: {
          isVisible: true,
          isLoader: action.payload?.isLoader,
          title: action.payload?.title,
          content: action.payload?.content,
          callback: action.payload?.callback ? action.payload?.callback : null,
        }
      }

      case CommonAction.HIDE_MODAL_INFOR:
      return {
        ...state,
        modalInfor: {
          isVisible: false,
          // isLoader: false,
          title: '',
          content: '',
        },
      }

      // handle modal detail
      case CommonAction.SHOW_MODAL_DETAIL:
      return {
        ...state,
        modalDetail: {
          isVisible: true,
          data: action.payload?.data,
          onTellMore: action.payload?.onTellMore ? action.payload?.onTellMore : null,
          onSubmit: action.payload?.onSubmit ? action.payload?.onSubmit : null,
        }
      }

      case CommonAction.HIDE_MODAL_DETAIL:
      return {
        ...state,
        modalDetail: {
          isVisible: false,
          data: new Nurse(),
          onTellMore: null,
          onSubmit: null,
        },
      }

      default:
        return state
    }
}
}