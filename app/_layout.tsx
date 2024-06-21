import { COLORS } from '@/themes/colors';
import {
  BarcodeIcon,
  ProfileIcon,
  ShipmentIcon,
  WalletIcon,
} from '@/themes/icons';
import { CompanyLogo } from '@/themes/images';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Stack, Tabs } from 'expo-router';
import { Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AuthStack = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='/app/Auth/login' />
  </Stack>
);

const MainTab = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Main' />
  </Stack>
);
export default function RootLayout() {
  const isLoggIn = false;
  return (
    <GestureHandlerRootView>
      <MainTab />
    </GestureHandlerRootView>
  );
}
