import '../global.css';

import 'react-native-ease/nativewind';
import React, { ReactNode } from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SplashView } from '@/core';

SplashScreen.preventAutoHideAsync();
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

function Provider({ children }: { children: ReactNode }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'NetflixSans-Regular': require('../assets/font/NetflixSans-Rg.ttf'),
    'NetflixSans-Medium': require('../assets/font/NetflixSans-Md.ttf'),
    'NetflixSans-MediumItalic': require('../assets/font/NetflixSans-MdIt.ttf'),
  });
  const [introFinished, setIntroFinished] = React.useState(false);

  React.useEffect(() => {
    //
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!introFinished) {
    return <SplashView onFinish={() => setIntroFinished(true)} />;
  }

  if (!fontsLoaded) return null;
  const loggIn = false;
  return (
    <Provider>
      <Stack>
        <Stack.Protected guard={!loggIn}>
          <Stack.Screen name="(intro)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={loggIn}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </Provider>
  );
}
