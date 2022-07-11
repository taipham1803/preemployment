import {dummyMapPlacesDummyData} from 'data';
import {MapPlace} from 'entity/place';
import React from 'react';
import {ViewStyle} from 'react-native';
import MarkerCustom from './MarkerCustom';
import {useRecoilValue} from 'recoil';
import {placeSelected} from 'states/discover';
export interface NearbyPlacesProps {
  style?: ViewStyle;
  onPress?: (item: MapPlace) => void;
}

const NearbyPlaces = ({onPress}: NearbyPlacesProps) => {
  const curItem = useRecoilValue(placeSelected);
  return (
    <>
      {dummyMapPlacesDummyData.map((item: MapPlace) => {
        return (
          <MarkerCustom
            key={`MarkerCustom-${item?.id}-${item?.address}`}
            id={item.id}
            coord={item.coord}
            icon={item.icon}
            onPress={() => onPress && onPress(item)}
            isSelected={curItem?.id === item?.id}
          />
        );
      })}
    </>
  );
};

export default NearbyPlaces;
