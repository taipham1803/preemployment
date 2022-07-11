import * as React from 'react';
import {Appearance} from 'react-native';
import {lightColors, darkColors} from 'styles/colorThemes';

export interface ThemeContextProps {
  isDark: boolean;
  colors: any;
  setScheme: (scheme: string) => void;
}

export const ThemeContext = React.createContext({
  isDark: false,
  colors: lightColors,
  setScheme: (scheme: string) => console.log(scheme),
});

export const ThemeProvider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const colorScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = React.useState(colorScheme === 'dark');
  React.useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (scheme: string) => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme as any}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
