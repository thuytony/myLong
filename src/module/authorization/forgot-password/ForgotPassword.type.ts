import { StackNavigationProp } from '@react-navigation/stack';
import { AuthorizationStackParams } from '@navigation';

type ForgotPasswordNavigationProps = StackNavigationProp<AuthorizationStackParams, 'ForgotPasswordContainer'>


type ForgotPasswordProps = {
  navigation: ForgotPasswordNavigationProps,
}

export type { ForgotPasswordNavigationProps, ForgotPasswordProps };

