import React, {useEffect} from 'react';
import {StatusBar, useColorScheme, Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {TailwindProvider} from 'tailwind-rn';
import Toast from 'react-native-toast-message';
import utilities from './tailwind.json';
import {RecoilRoot} from 'recoil';

import {MainStack} from 'navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Style} from 'styles';
import {ThemeProvider} from './src/context/ThemeProvider';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
  }, []);

  return (
    <>
      <TailwindProvider utilities={utilities}>
        <GestureHandlerRootView style={[Style.con({flex: 1}), backgroundStyle]}>
          <RecoilRoot>
            <ThemeProvider>
              <SafeAreaProvider>
                <NavigationContainer>
                  <MainStack />
                </NavigationContainer>
              </SafeAreaProvider>
            </ThemeProvider>
          </RecoilRoot>
        </GestureHandlerRootView>
      </TailwindProvider>
      <Toast />
    </>
  );
};

export default App;
