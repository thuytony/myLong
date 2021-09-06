/** This file define type data for request API */

import { ICallBack } from '@redux';

export interface ParamsLogin {
  username: string,
  password: string,
  callback?: (result: ICallBack) => void
}

export interface ParamsGetNurses {
  page: number,
  size: number,
  callback?: (result: ICallBack) => void
}

export interface ParamsGetCities {
  page: number,
  size: number,
  callback?: (result: ICallBack) => void
}

export interface ParamsGetHome {
  takeNumberCity: number,
  takeNumberNurse: number,
  callback?: (result: ICallBack) => void
}
