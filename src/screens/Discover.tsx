import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationProp} from '@react-navigation/core';
import MapView, {PROVIDER_GOOGLE, Region} from 'react-native-maps';
import {useSetRecoilState} from 'recoil';

import {jsons} from 'assets';
import {dummyMapPlacesDummyData} from 'data';
import SearchBar from 'components/SearchBar';
import PlaceCarouselList from 'components/PlaceCarouselList';
import NearbyPlaces from 'components/NearbyPlaces';
import {MapPlace} from 'entity/place';
import {useTheme} from 'context/ThemeProvider';
import {placeSelected} from 'states/discover';
import {SafeAreaView} from 'react-native-safe-area-context';
import AngleButton from 'components/AngleButton';
import ThemeToggle from 'components/ThemeToggle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    zIndex: 2,
  },
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  searchBar: {
    marginTop: 40,
  },
  mapButtonContainer: {
    position: 'absolute',
    top: 148,
    right: 24,
    zIndex: 1,
  },
  iconNavigation: {
    marginTop: 10,
  },
  placeCarouselList: {
    marginTop: 'auto',
    marginBottom: Platform.select({android: 34 + 48, ios: 48}),
  },
});

export default ({}: {navigation: NavigationProp<any>}) => {
  const mapRef = React.useRef<MapView>(null);
  const {isDark} = useTheme();
  const setPlaceSelected = useSetRecoilState(placeSelected);

  const [currentRegion] = React.useState<Region>({
    latitude: 50.0931439,
    longitude: 14.4466954,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const handleSelectPlace = (item: MapPlace) => {
    setPlaceSelected(item);
    mapRef.current?.animateCamera({
      center: item?.coord,
      pitch: 0,
      zoom: 17,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <MapView
        ref={mapRef}
        customMapStyle={isDark ? jsons.mapStyleDarkCustom : jsons.mapJsonEnable}
        provider={PROVIDER_GOOGLE}
        style={styles.mapView}
        zoomEnabled
        pitchEnabled
        region={currentRegion}>
        <NearbyPlaces onPress={handleSelectPlace} />
      </MapView>
      <SafeAreaView style={styles.safeAreaView} pointerEvents="box-none">
        <View style={styles.mapButtonContainer}>
          <ThemeToggle />
          <AngleButton mapRef={mapRef} />
        </View>
        <SearchBar
          style={styles.searchBar}
          onSelectAddress={handleSelectPlace}
        />
        <PlaceCarouselList
          data={dummyMapPlacesDummyData}
          style={styles.placeCarouselList}
          onChange={handleSelectPlace}
          onPressItem={handleSelectPlace}
        />
      </SafeAreaView>
    </View>
  );
};
