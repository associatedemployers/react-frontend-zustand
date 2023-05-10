import { MantineProvider, Text } from '@mantine/core';
import { ForgotPasswordInput } from './components/inputs/passwordInput';
import { InputValidation } from './components/inputs/emailInput';
import { InputTooltip } from './components/login';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <Text>Welcome to Obsidian, strongest payroll integration!</Text>
      <InputTooltip />
    </MantineProvider>
  );
}
