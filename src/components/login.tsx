import { useState } from 'react';
import { TextInput, PasswordInput, Tooltip } from '@mantine/core';
import { ButtonProgress } from './buttons/progressButton.tsx';
function Email() {
  return (
    <TextInput
      label="Email"
      placeholder="Your email"
    />
  );
}

function Password() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const valid = value.trim().length >= 6;
  return (
    <Tooltip
      label={valid ? 'All good!' : 'Password must include at least 6 characters'}
      position="bottom-start"
      withArrow
      opened={opened}
      color={valid ? 'teal' : undefined}
    >
      <PasswordInput
        label="Password"
        required
        placeholder="Your password"
        onFocus={() => setOpened(true)}
        onBlur={() => setOpened(false)}
        mt="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </Tooltip>
  );
}


import { useState } from 'react';
import { useInterval } from '@mantine/hooks';
import { createStyles, Button, Progress } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  button: {
    position: 'relative',
    transition: 'background-color 150ms ease',
  },

  progress: {
    ...theme.fn.cover(-1),
    height: 'auto',
    backgroundColor: 'transparent',
    zIndex: 0,
  },

  label: {
    position: 'relative',
    zIndex: 1,
  },
}));


export function InputTooltip() {
  return (
    <>
      <Email />
      <Password />
      <ButtonProgress />
    </>
  );
}
