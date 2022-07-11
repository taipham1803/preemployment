import React from 'react';
import {ViewStyle, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useTheme} from 'context/ThemeProvider';
import {Colors} from 'styles';

export interface AddressCellProps {
  style?: ViewStyle;
  onPress?: () => void;
  title?: string;
  address?: string;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.black,
  },
  address: {
    fontSize: 11,
    fontWeight: '400',
    color: Colors.gray[1],
    marginTop: 3,
  },
});

const AddressCell = ({style, onPress, title, address}: AddressCellProps) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style,
        {backgroundColor: colors.buttonBg, borderColor: colors.border},
      ]}>
      <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
      <Text style={[styles.address, {color: colors.textSub}]}>{address}</Text>
    </TouchableOpacity>
  );
};

export default AddressCell;
