import React from 'react';
import {
  Image,
  ViewStyle,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Platform,
  Dimensions,
} from 'react-native';
import {icons} from 'assets';
import {Colors} from 'styles';
import {useTheme} from 'context/ThemeProvider';
import {dummyMapPlacesDummyData} from 'data';
import {MapPlace} from 'entity/place';
import AddressCell from './AddressCell';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginHorizontal: 24,
    zIndex: 9,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Platform.select({android: 0, ios: 8}),
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    shadowColor: Platform.select({
      android: Colors.gray[4],
      ios: 'rgba(0, 0, 0, 0.16)',
    }),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 5,
    zIndex: 12,
  },
  iconSearch: {
    width: 24,
    height: 24,
    tintColor: Colors.gray[5],
  },
  textInput: {
    flex: 1,
    marginLeft: 12,
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 19,
  },
  contentContainerStyle: {
    paddingTop: 48,
    paddingBottom: 16,
  },
  resultsContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 300,
    zIndex: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  flatList: {
    width: SCREEN_WIDTH,
    height: 300,
    zIndex: 10,
    borderRadius: 12,
  },
});

export interface SearchBarProps {
  style?: ViewStyle;
  onSearch?: (text: string) => void;
  placeholder?: string;
  onSelectAddress?: (item: MapPlace) => void;
}

const SearchBar = ({
  style,
  onSearch,
  placeholder = 'Search here',
  onSelectAddress,
}: SearchBarProps) => {
  const {colors, isDark} = useTheme();
  const [text, setText] = React.useState<string>('');
  const [isFocused, setFocused] = React.useState<boolean>(false);
  const [results, setResults] = React.useState<MapPlace[]>([]);
  const _onSearch = (value: string) => {
    onSearch && onSearch(value);
    setText(value);
    if (value.length > 0) {
      setResults(dummyMapPlacesDummyData);
    } else {
      setResults([]);
    }
  };
  const _onSelectAddress = (item: MapPlace) => {
    if (onSelectAddress) {
      onSelectAddress(item);
    }
    setResults([]);
  };
  const _onFocus = () => {
    if (text.length > 0) {
      setResults(dummyMapPlacesDummyData);
    }
    setFocused(true);
  };
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.inputContainer, {backgroundColor: colors.buttonBg}]}>
        <Image
          style={[
            styles.iconSearch,
            {tintColor: isFocused ? colors.text : Colors.gray[5]},
          ]}
          source={icons.iconSearch}
        />
        <TextInput
          style={[styles.textInput, {color: colors.text}]}
          onChangeText={_onSearch}
          placeholder={placeholder}
          placeholderTextColor={isDark ? Colors.gray[5] : Colors.gray[1]}
          value={text}
          onFocus={_onFocus}
          onBlur={() => setFocused(false)}
        />
      </View>
      {results.length > 0 && (
        <View
          style={[styles.resultsContainer, {backgroundColor: colors.buttonBg}]}>
          <FlatList
            style={styles.flatList}
            scrollEnabled
            contentContainerStyle={styles.contentContainerStyle}
            data={results}
            renderItem={({item}: {item: MapPlace}) => (
              <AddressCell
                title={`${item.title} ${item.icon}`}
                address={item?.address}
                onPress={() => _onSelectAddress(item)}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default SearchBar;
