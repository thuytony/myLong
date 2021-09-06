/** Define action elements in redux */

export interface IAction<P, D> {
  type: string
  payload?: P
  data?: D
  error?: string,
}
