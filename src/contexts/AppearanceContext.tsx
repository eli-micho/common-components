/* eslint-disable no-shadow */
import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from '@mui/material/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { deepmerge } from '@mui/utils';
import React, { useMemo } from 'react';
import useLocalStorage from 'use-local-storage';
import blueTheme from '../themes/blackTheme';
import blackTheme from '../themes/blackTheme';

export const themes = ['black'] as const;
export type AvailableThemes = typeof themes[number] | string;

export const variants = ['light', 'dark'] as const;
export type AvailableVariants = typeof variants[number];

export interface AppearanceContextState {
  theme: AvailableThemes;
  themeVariant: AvailableVariants;
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: AvailableThemes) => void;
  // eslint-disable-next-line no-unused-vars
  setThemeVariant: (variant: AvailableVariants) => void;
  toggleTheme: () => void;
  toggleThemeVariant: () => void;
}

const AppearanceContext = React.createContext<AppearanceContextState>(
  null as never
);

const AppearanceContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const { children } = props;
  const [theme, setTheme] = useLocalStorage<AvailableThemes>(
    'teto-theme-color',
    'blue'
  );
  const [themeVariant, setThemeVariant] = useLocalStorage<AvailableVariants>(
    'teto-theme-variant',
    'light'
  );
  function _switchTheme() {
    switch (theme) {
      case 'black':
        return createTheme(blueTheme[themeVariant]);
      default:
        return createTheme(blackTheme[themeVariant]);
    }
  }

  const currentTheme = useMemo(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (): Theme => {
      const result = _switchTheme();
      return result;
    },
    [theme, themeVariant]
  );

  const _toggleTheme = () => {
    setTheme(theme);
  };

  const _toggleThemeVariant = () => {
    setThemeVariant((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <StyledEngineProvider injectFirst>
      <AppearanceContext.Provider
        value={{
          theme,
          themeVariant,
          setTheme: (newTheme) => setTheme(newTheme),
          setThemeVariant: (newVariant) => setThemeVariant(newVariant),
          toggleTheme: _toggleTheme,
          toggleThemeVariant: _toggleThemeVariant,
        }}
      >
        <ThemeProvider theme={currentTheme}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </AppearanceContext.Provider>
    </StyledEngineProvider>
  );
};

export const AppearanceProvider = AppearanceContextProvider;
export const AppearanceConsumer = AppearanceContext.Consumer;
export default AppearanceContext;
