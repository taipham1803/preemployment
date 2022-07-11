import React from 'react';
import {
  View,
  TouchableOpacity,
  Platform,
  Image,
  StyleSheet,
} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Colors, Style} from 'styles';
import {icons} from 'assets';
import {useTheme} from 'context/ThemeProvider';

const styles = StyleSheet.create({
  addButtonContainer: {
    position: 'absolute',
    top: -48,
    alignSelf: 'center',
    width: 60,
    height: 60,
    backgroundColor: Colors.primary,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  bottomBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: Platform.select({ios: 68, android: 60}),
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
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
    elevation: 4,
  },
  bottomBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 7,
  },
});

const TabBar = ({state, descriptors = {}, navigation}: BottomTabBarProps) => {
  const {colors} = useTheme();
  const {routes = []} = state;
  return (
    <View
      style={[
        styles.bottomBarContainer,
        {
          backgroundColor: colors.background,
          borderTopColor: colors.bottomBarBorder,
        },
      ]}>
      <View style={styles.bottomBarContent}>
        {Array.isArray(routes) &&
          routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const isFocused = state?.index === index;

            const _onPressTabBar = () => {
              const event = navigation?.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({
                  name: route?.name,
                  merge: true,
                } as never);
              }
            };

            const onLongPress = () => {
              navigation?.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            const onPressAdd = () => {};

            if (index === 2) {
              return (
                <View
                  key={`TabBar-${route?.key}`}
                  style={[Style.con({flex: 1})]}>
                  <TouchableOpacity
                    onPress={onPressAdd}
                    style={styles.addButtonContainer}>
                    <Image style={styles.addIcon} source={icons.iconAdd} />
                  </TouchableOpacity>
                </View>
              );
            }

            return (
              <TouchableOpacity
                key={`TabBar-${route?.key}`}
                style={[Style.con({flex: 1, cen: true})]}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={_onPressTabBar}
                onLongPress={onLongPress}>
                {options?.tabBarIcon &&
                  options?.tabBarIcon({
                    focused: isFocused,
                    color: '',
                    size: 24,
                  })}
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export default TabBar;
