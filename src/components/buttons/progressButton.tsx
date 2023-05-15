import { useState, useEffect } from 'react';
import { useInterval } from '@mantine/hooks';
import { createStyles, Button, Progress } from '@mantine/core';
import { useStore } from '../../store';

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

export function ButtonProgress({form}) {
    const [loggedIn] = useStore(
    (state) => [state.status],
  )
  const { classes, theme } = useStyles();
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {    
    if (loggedIn === 'fulfilled') {
      setLoaded(true)
      interval.stop()
    }

    if (loggedIn === "pending") {
     loaded ? setLoaded(false) : !interval.active && interval.start()
    }
   }, [loggedIn])

  const interval = useInterval(
    () =>
      setProgress((current) => {
        if (current < 100) {
          return current + 1;
        }

        interval.stop();
        setLoaded(true);
        return 0;
      }),
    20
  );

  return (
    <Button
      form="my-form"
      type="submit"
      fullWidth
      className={classes.button}
      color={loaded && !loadingError && loggedIn ? 'teal' : theme.primaryColor}
    >
      <div className={classes.label}>
        {progress !== 0 ? 'Looking for some Dragon Glass...' : loaded && !loadingError && loggedIn ? 'Logged In (Aria, is ready)'  : 'Login'}
      </div>
      {progress !== 0 && (
        <Progress
          value={progress}
          className={classes.progress}
          color={theme.fn.rgba(theme.colors[theme.primaryColor][2], 0.35)}
          radius="sm"
        />
      )}
    </Button>
  );
}
