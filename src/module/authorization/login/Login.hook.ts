import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICallBack, RootState, STATUS_STATE } from '@redux';
import { ParamsLogin } from '@networking';
import { Utils } from '@utils';
import { LoginState } from './Login.type';
import { LoginAction } from './Login.action';

export function useLogin(onDidLogin: (result: ICallBack) => void): [boolean, (params: ParamsLogin) => void] {
  const loginReducer = useSelector<RootState, LoginState>(state => state.loginReducer);
  const dispatch = useDispatch();

  const isLoggingin: boolean = Boolean(loginReducer.status === STATUS_STATE.loading);
  const login = (params: ParamsLogin) => {
    dispatch(LoginAction.login({
      ...params,
      callback: onDidLogin,
    }));
  }

  return [isLoggingin, login];
}

export function useEmail(initState: string): [string, Function, boolean] {
  const [email, setEmail] = useState(initState);
  const [isEmailValidate, setValidateEmail] = useState(false);

  useEffect(() => {
    if (Utils.isEmailValidate(email) && !isEmailValidate) setValidateEmail(true);
    if (!Utils.isEmailValidate(email) && isEmailValidate) setValidateEmail(false);
  }, [email]);
  return [email, setEmail, isEmailValidate];
}

export function usePassword(initState: string): [string, Function, boolean] {
  const [password, setPassword] = useState(initState);
  const [isPasswordValidate, setValidatePassword] = useState(true);

  useEffect(() => {
    if (password.length > 0 && !isPasswordValidate) setValidatePassword(true);
    if (password.length === 0 && isPasswordValidate) setValidatePassword(false);
  }, [password]);
  return [password, setPassword, isPasswordValidate];
}
