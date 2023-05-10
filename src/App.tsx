import { MantineProvider, Text } from '@mantine/core';
import { ForgotPasswordInput } from './components/inputs/passwordInput';
import { InputValidation } from './components/inputs/emailInput';
import { InputTooltip } from './components/login';
import {useStore} from './store';

export default function App() {  
  const [pack, addToThePack, employee] = useStore(
    (state) => [state.rocks, state.addRocks, state.employee],
  )

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS >
      <Text>Welcome to Obsidian, strongest payroll integration! NOW with Zustand {pack}, {employee.name} </Text>
        <button onClick={addToThePack}>one up</button>
      <InputTooltip />
    </MantineProvider>
  );
}
