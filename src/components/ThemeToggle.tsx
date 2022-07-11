import React from 'react';
import {ViewStyle, StyleSheet} from 'react-native';
import CircleButton from './CircleButton';
import {icons} from 'assets';
import {useTheme} from 'context/ThemeProvider';

export interface ThemeToggleProps {
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
});

const ThemeToggle = ({style}: ThemeToggleProps) => {
  const {setScheme, isDark} = useTheme();
  const handleToggleAppTheme = () => {
    isDark ? setScheme('light') : setScheme('dark');
  };
  return (
    <CircleButton
      icon={icons.iconToggle}
      style={[styles.container, style]}
      onPress={handleToggleAppTheme}
    />
  );
};

export default ThemeToggle;
