import {ImageSourcePropType} from 'react-native';
import {LatLng} from 'react-native-maps';

export type MapPlace = {
  id: number;
  title: string;
  subTitle?: string;
  address?: string;
  key: string;
  coord: LatLng;
  icon: string;
  thumb?: string | ImageSourcePropType;
};
