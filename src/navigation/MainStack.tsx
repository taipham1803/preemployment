import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'styles/palette';
import {Routes} from './Routes';

import {BottomTabScreen} from './BottomTab';

const MainStack = createNativeStackNavigator();

export default function Main() {
  return (
    <MainStack.Navigator
      initialRouteName={Routes.BottomTabScreen}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.black,
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <MainStack.Screen
        name={Routes.BottomTabScreen}
        component={BottomTabScreen}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
}
