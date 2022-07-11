import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Routes} from './Routes';
import {icons} from './../assets/index';
import {Colors, Style} from 'styles';

import TabBar from './TabBar';
import Discover from 'screens/Discover';
import MapView from 'screens/MapView';
import Creation from 'screens/Creation';
import Notify from 'screens/Notify';
import Profile from 'screens/Profile';
import {useTheme} from 'context/ThemeProvider';

const bottomTabStyles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

const BottomTab = createBottomTabNavigator();
export const BottomTabScreen = () => {
  const {colors} = useTheme();
  const getIconTintColor = (focused: boolean): string => {
    if (focused) {
      return Colors.primary;
    }
    return colors.buttonIconColor;
  };
  return (
    <BottomTab.Navigator tabBar={props => <TabBar {...props} />}>
      <BottomTab.Screen
        key={`tab-${Routes.Discover}`}
        name={Routes.Discover}
        component={Discover}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                bottomTabStyles.icon,
                Style.con({
                  tin: getIconTintColor(focused),
                }),
              ]}
              source={icons.iconDiscover}
            />
          ),
        }}
      />
      <BottomTab.Screen
        key={`tab-${Routes.MapView}`}
        name={Routes.MapView}
        component={MapView}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                bottomTabStyles.icon,
                Style.con({tin: getIconTintColor(focused)}),
              ]}
              source={icons.iconMap}
            />
          ),
        }}
      />
      <BottomTab.Screen
        key={`tab-${Routes.Creation}`}
        name={Routes.Creation}
        component={Creation}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                bottomTabStyles.icon,
                Style.con({tin: getIconTintColor(focused)}),
              ]}
              source={icons.iconAdd}
            />
          ),
        }}
      />
      <BottomTab.Screen
        key={`tab-${Routes.Notify}`}
        name={Routes.Notify}
        component={Notify}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                bottomTabStyles.icon,
                Style.con({tin: getIconTintColor(focused)}),
              ]}
              source={icons.iconNotify}
            />
          ),
        }}
      />
      <BottomTab.Screen
        key={`tab-${Routes.Profile}`}
        name={Routes.Profile}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                bottomTabStyles.icon,
                Style.con({tin: getIconTintColor(focused)}),
              ]}
              source={icons.iconUser}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
