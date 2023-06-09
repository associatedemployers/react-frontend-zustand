import { MantineProvider, Text } from '@mantine/core';
import { ForgotPasswordInput } from './components/inputs/passwordInput';
import { InputValidation } from './components/inputs/emailInput';
import { InputTooltip } from './components/login';
import { useStore } from './store';
import Welcome from './welcome';

export default function App() {  
  const [pack, addToThePack, employee, user] = useStore(
    (state) => [state.rocks, state.addRocks, state.employee, state.user],
  )

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS >
        {!user ?
        <div>
           <Text>Welcome to Obsidian, strongest payroll integration! NOW with Zustand</Text>
           <InputTooltip />
          </div>
       
        : <Welcome />
      }
    </MantineProvider>
  );
}
