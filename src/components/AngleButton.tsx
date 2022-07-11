import React, {RefObject} from 'react';
import {ViewStyle, StyleSheet} from 'react-native';
import CircleButton from './CircleButton';
import {icons} from 'assets';
import MapView from 'react-native-maps';

export interface AngleButtonProps {
  style?: ViewStyle;
  mapRef: RefObject<MapView> | null;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
});

const AngleButton = ({style, mapRef}: AngleButtonProps) => {
  const [isAngle, setAngle] = React.useState<boolean>(false);
  const _onPress = () => {
    if (!mapRef) {
      return;
    }
    if (isAngle) {
      mapRef?.current?.animateToViewingAngle(90);
    } else {
      mapRef?.current?.animateToViewingAngle(0);
    }
    setAngle(pre => !pre);
  };
  return (
    <CircleButton
      icon={icons.iconNavigation}
      style={[styles.container, style]}
      onPress={_onPress}
    />
  );
};

export default AngleButton;
