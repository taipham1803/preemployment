import React from 'react';
import {
  Image,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  Platform,
  StyleProp,
} from 'react-native';
import {useTheme} from 'context/ThemeProvider';
import {Colors} from 'styles';

export interface CircleButtonProps {
  style?: StyleProp<ViewStyle> | undefined;
  onPress?: () => void;
  icon: ImageSourcePropType;
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 40,
    shadowColor: Platform.select({
      android: Colors.gray[4],
      ios: 'rgba(0, 0, 0, 0.16)',
    }),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSearch: {
    width: 24,
    height: 24,
  },
  textInput: {
    flex: 1,
    marginLeft: 12,
  },
});

const CircleButton = ({style, onPress, icon}: CircleButtonProps) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style, {backgroundColor: colors.buttonBg}]}>
      <Image
        style={[styles.iconSearch, {tintColor: colors.buttonIconColor}]}
        source={icon}
      />
    </TouchableOpacity>
  );
};

export default CircleButton;
