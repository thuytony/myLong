import { useState, useEffect } from 'react';

export function usePassword(initState: string): [string, Function, boolean] {
  const [password, setPassword] = useState(initState);
  const [isPasswordValidate, setValidatePassword] = useState(true);

  useEffect(() => {
    if (password.length > 0 && !isPasswordValidate) setValidatePassword(true);
    if (password.length === 0 && isPasswordValidate) setValidatePassword(false);
  }, [password]);
  return [password, setPassword, isPasswordValidate];
}

export function useCode(initState: string): [string, Function, boolean] {
  const [code, setCode] = useState(initState);
  const [isCodeValidate, setValidateCode] = useState(true);

  useEffect(() => {
    if (code.length > 0 && !isCodeValidate) setValidateCode(true);
    if (code.length === 0 && isCodeValidate) setValidateCode(false);
  }, [code]);
  return [code, setCode, isCodeValidate];
}