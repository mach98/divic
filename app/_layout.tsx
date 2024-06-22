import { LoginMenu } from '@/components/Menus/LoginMenu';
import { AuthProvider, useAuth } from '@/context/Auth';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AuthStack = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Auth' />
  </Stack>
);

const MainTab = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Main' />
  </Stack>
);

export default function RootLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <GestureHandlerRootView>
      <AuthProvider>{isLoggedIn ? <MainTab /> : <AuthStack />}</AuthProvider>
    </GestureHandlerRootView>
  );
}
