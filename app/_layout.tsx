import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false, headerShown: false }}>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen
        name='loginMenu'
        options={{
          presentation: 'modal',
          headerStyle: { backgroundColor: 'white' },
        }}
      />
      <Stack.Screen name='home' />
    </Stack>
  );
}
