import { MantineProvider, Text } from '@mantine/core';
import { ForgotPasswordInput } from './components/inputs/passwordInput';
import { InputValidation } from './components/inputs/emailInput';
import { InputTooltip } from './components/login';
import {useStore} from './store';

export default function Welcome() {  
  const [pack, addToThePack, employee, user] = useStore(
    (state) => [state.rocks, state.addRocks, state.employee, state.user],
  )

  return (
      <Text>WELCOME {user.name}</Text>
  );
}
