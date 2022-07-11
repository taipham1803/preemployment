/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {LatLng, Marker} from 'react-native-maps';
import {useTheme} from 'context/ThemeProvider';
import {Colors, Style} from 'styles';

const styles = StyleSheet.create({
  markerContent: {
    padding: 20,
    backgroundColor: Colors.tran,
  },
});
export interface MarkerCustomProps {
  coord: LatLng;
  icon: string;
  id: string | number;
  rotation?: number;
  z?: number;
  size?: number;
  imageSize?: number;
  onPress?: () => void;
  isSelected?: boolean;
}

const MarkerCustom = ({
  coord,
  icon,
  id,
  rotation,
  z,
  size = 40,
  onPress,
  isSelected = false,
}: MarkerCustomProps) => {
  const {colors} = useTheme();
  const [track, setTrack] = React.useState<boolean>(false);
  let timeoutTracksView: NodeJS.Timeout;

  React.useEffect(() => {
    setTrack(true);
    timeoutTracksView = setTimeout(() => {
      setTrack(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutTracksView);
    };
  }, [coord, icon, rotation, z, size, colors.buttonBg, isSelected]);

  return (
    <Marker
      coordinate={coord}
      tracksViewChanges={track}
      onPress={onPress}
      identifier={`${id}`}
      zIndex={isSelected ? 100 : z}
      rotation={rotation}>
      <View style={styles.markerContent}>
        <View
          style={[
            Style.con({
              size: isSelected ? 50 : 36,
              bg: colors.markerBg,
              cen: true,
            }),
            Style.border({
              bor: 50,
              width: 2,
              color: isSelected ? colors.markerBorder : Colors.tran,
            }),
            Style.sha(
              Platform.select({
                android: Colors.gray[4],
                ios: 'rgba(0, 0, 0, 0.16)',
              }),
              0,
              4,
              12,
              12,
            ),
          ]}>
          <Text>{icon}</Text>
        </View>
      </View>
    </Marker>
  );
};

export default MarkerCustom;
