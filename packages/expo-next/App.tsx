import React from 'react';
import * as Updates from 'expo-updates';
import { enableScreens } from 'react-native-screens';
import { DripsyProvider } from 'dripsy';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { ApolloProvider } from '@apollo/client';
import { IdProvider } from '@radix-ui/react-id';

enableScreens();

import Navigation from './src/navigation';
import theme from 'app/design-system/theme';
import { useApollo } from 'app/utils/init-apollo';

export default function App() {
  const apolloClient = useApollo();
  const [fontsLoaded, error] = useFonts({
    ...Feather.font,
    'Arial Rounded MT Std': require('./public/fonts/ArialRoundedMTStd.ttf'),
    'Arial Rounded MT Std Bold': require('./public/fonts/ArialRoundedMTStdBold.ttf'),
    'Arial Rounded MT Std Extra Bold': require('./public/fonts/ArialRoundedMTStdExtraBold.ttf'),
    'Arial Rounded MT Std Light': require('./public/fonts/ArialRoundedMTStdLight.ttf')
  });

  if (error) {
    console.error(error);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <IdProvider>
        <DripsyProvider theme={theme}>
          <SafeAreaProvider>
            <StatusBar style="light" />
            <Navigation />
          </SafeAreaProvider>
        </DripsyProvider>
      </IdProvider>
    </ApolloProvider>
  );
}
