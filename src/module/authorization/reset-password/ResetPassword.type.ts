import { StackNavigationProp } from '@react-navigation/stack';
import { AuthorizationStackParams } from '@navigation';

type ResetPasswordNavigationProps = StackNavigationProp<AuthorizationStackParams, 'ResetPasswordScreen'>


type ResetPasswordProps = {
  navigation: ResetPasswordNavigationProps,
}

export type { ResetPasswordNavigationProps, ResetPasswordProps };

