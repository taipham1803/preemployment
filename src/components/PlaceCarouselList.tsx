import React from 'react';
import {
  ViewStyle,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import {useRecoilValue} from 'recoil';

import {useTheme} from 'context/ThemeProvider';
import {MapPlace} from 'entity/place';
import {Colors} from 'styles';
import {placeSelected} from 'states/discover';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: 150,
  },
  itemContainer: {
    width: SCREEN_WIDTH,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContent: {
    width: SCREEN_WIDTH - 27 * 2,
    height: 90,
    backgroundColor: Colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 5,
  },
  itemThumb: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  titleAndSubTitleContainer: {
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
  },
  subTitle: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
  },
});

export interface PlaceCarouselListProps {
  style?: ViewStyle;
  data: MapPlace[];
  onChange?: (item: MapPlace) => void;
  onPressItem?: (item: MapPlace) => void;
}

const PlaceCarouselList = ({
  style,
  data = [],
  onPressItem,
  onChange,
}: PlaceCarouselListProps) => {
  const {colors} = useTheme();
  const carouselRef = React.useRef<Carousel<any>>(null);
  const curPlace = useRecoilValue(placeSelected);

  const getCurIndex = () => {
    const currentIndex = carouselRef.current?.currentIndex;
    if (!currentIndex) {
      return;
    }
    const newIndex = currentIndex + 1;
    if (newIndex && onChange && newIndex < data.length) {
      onChange(data[newIndex]);
    }
  };

  React.useEffect(() => {
    if (curPlace) {
      carouselRef.current?.snapToItem(curPlace?.id);
    }
  }, [curPlace]);

  const renderItem = ({item}: {item: MapPlace; index: number}) => {
    const thumbSrc: ImageSourcePropType | undefined =
      typeof item?.thumb === 'string' ? {uri: item.thumb} : item.thumb;
    return (
      <View style={[styles.itemContainer]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onLongPress={() => onPressItem && onPressItem(item)}
          style={[styles.itemContent, {backgroundColor: colors.buttonBg}]}>
          {thumbSrc && <Image style={styles.itemThumb} source={thumbSrc} />}
          <View style={styles.titleAndSubTitleContainer}>
            <Text style={[styles.title, {color: colors.text}]}>
              {item?.title}
            </Text>
            <Text style={[styles.subTitle, {color: colors.textSub}]}>
              {item?.subTitle}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={[styles.container, style]}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
        onScrollEndDrag={getCurIndex}
      />
    </View>
  );
};

export default PlaceCarouselList;
