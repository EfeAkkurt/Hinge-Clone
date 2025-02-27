import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'; // bunu yazmamızın amacı exponun fontlarını kullanabilmek
import { fonts } from '@/constants/fonts';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { colors } from '@/constants/Colors';

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
  const [fontsLoaded, fontError] = useFonts(fonts); // fontslar için

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      backgorund: colors.white
    },
  };

  return ( 
  <ThemeProvider value={theme}>
    <Slot />
  </ThemeProvider>
  );
};

export default AppLayout