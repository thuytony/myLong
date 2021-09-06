import { useDispatch, useSelector } from 'react-redux';
import { ICallBack, RootState } from '@redux';
import { CommonState } from './Common.reducer';
import { CommonAction, DataModalDetail, DataModalInfor } from './Common.action';
import { useEffect } from 'react';

// hook for show modal alert, show modal loading
export function useCommonModalInfor(onPressConfirm?: () => void): [boolean, (params: DataModalInfor) => void, ()=>void] {
  const commonReducer = useSelector<RootState, CommonState>(state => state.commonReducer);
  const { modalInfor } = commonReducer;
  const dispatch = useDispatch();

  const isVisibleModalInfor: boolean = modalInfor.isVisible;
  const showModalInfor = (params: DataModalInfor) => {
    dispatch(CommonAction.showModalInfor({
      ...params,
      callback: onPressConfirm,
    }));
  }
  const hideModalInfor = () => {
    dispatch(CommonAction.hideModalInfor());
  }

  return [isVisibleModalInfor, showModalInfor, hideModalInfor];
}

// hook for show modal job detail
export function useCommonModalDetail(onTellMore: () => void, onSubmit: () => void): [boolean, (params: DataModalDetail) => void, ()=>void] {
  const commonReducer = useSelector<RootState, CommonState>(state => state.commonReducer);
  const { modalDetail } = commonReducer;
  const dispatch = useDispatch();

  const isVisibleModalDetail: boolean = modalDetail.isVisible;
  const showModalDetail = (params: DataModalDetail) => {
    dispatch(CommonAction.showModalDetail({
      ...params,
      onTellMore,
      onSubmit,
    }));
  }
  const hideModalDetail = () => {
    dispatch(CommonAction.hideModalDetail());
  }

  return [isVisibleModalDetail, showModalDetail, hideModalDetail];
}
