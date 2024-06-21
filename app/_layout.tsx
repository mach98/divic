import { Stack } from 'expo-router';
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
  const isLoggedIn = false;
  return (
    <GestureHandlerRootView>
      {isLoggedIn ? <MainTab /> : <AuthStack />}
    </GestureHandlerRootView>
  );
}
