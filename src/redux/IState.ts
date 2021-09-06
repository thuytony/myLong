/** Define states when performing an action in reducer  */
export enum STATUS_STATE {
  initial,
  loading,
  success,
  error
}

/** Define elements of state in reducer */
export type IState<T> = {
  status: STATUS_STATE;
  errorMessage?: string;
  data?: T;
}
