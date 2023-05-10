import { useState } from 'react';
import { TextInput, PasswordInput, Tooltip } from '@mantine/core';
import { ButtonProgress } from './buttons/progressButton.tsx';
import { useInterval } from '@mantine/hooks';
import { createStyles, Button, Progress, Checkbox, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useStore } from '../store';


function Email(fromProps) {
  return (
    <TextInput
      label="Email"
      placeholder="Your email"
      {...fromProps}
    />
  );
}

function Password(fromProps) {
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
        {...fromProps}
      />
    </Tooltip>
  );
}

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
  const [login] = useStore(
    (state) => [state.login],
  )

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <>
      <form id='my-form' onSubmit={form.onSubmit(async (values) => {
        await login(values.password, values.email)
        }
      )}>
        <Email {...form.getInputProps('email')}/>
        <Password {...form.getInputProps('password')}/>
        <ButtonProgress form={form} />
      </form>
    </>
  );
}
