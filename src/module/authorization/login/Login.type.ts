import { StackNavigationProp } from '@react-navigation/stack';
import { AuthorizationStackParams } from '@navigation';
import { ParamsLogin } from '@networking';
import { IState } from '@redux';
import { User } from '@model';

export type LoginNavigationProps = StackNavigationProp<AuthorizationStackParams, 'LoginScreen'>


export type LoginProps = {
  navigation: LoginNavigationProps,
  onLogin: (params: ParamsLogin) => void
}

export type LoginState = IState<User>;

