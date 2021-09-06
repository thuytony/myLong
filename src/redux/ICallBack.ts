/** Defines the elements of a callback (optional) */

export enum STATUS_CALLBACK {
  SUCCESS = 0,
  FAILED = 1,
}

export type ICallBack = {
  status: STATUS_CALLBACK,
}
