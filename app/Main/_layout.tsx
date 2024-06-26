import { Tabs } from 'expo-router';
import {
  ShipmentIcon,
  WalletIcon,
  BarcodeIcon,
  ProfileIcon,
} from '@/themes/icons';
import { COLORS } from '@/themes/colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { CompanyLogo } from '@/themes/images';

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tabs.Screen
        name='Shipments'
        options={{
          tabBarIcon: ({ focused, color }) => (
            <ShipmentIcon
              color={focused ? COLORS.primary : COLORS.searchIconColor}
            />
          ),
          headerLeft: () => (
            <AntDesign
              name='user'
              size={25}
              style={{
                marginHorizontal: 15,
                borderRadius: 100,
                backgroundColor: COLORS.canceledColor,
                padding: 10,
              }}
              color={COLORS.receivedText}
            />
          ),
          headerTitle: () => (
            <Image
              style={{ width: 200, height: 20, tintColor: COLORS.primary }}
              source={CompanyLogo}
              resizeMode='contain'
            />
          ),
          headerRight: () => (
            <Ionicons
              name='notifications-outline'
              size={25}
              color={COLORS.receivedText}
              style={{
                marginHorizontal: 15,
                borderRadius: 100,
                backgroundColor: COLORS.canceledColor,
                padding: 10,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='Scan'
        options={{
          tabBarIcon: ({ focused }) => (
            <BarcodeIcon
              color={focused ? COLORS.primary : COLORS.searchIconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='Wallet'
        options={{
          tabBarIcon: ({ focused }) => (
            <WalletIcon
              color={focused ? COLORS.primary : COLORS.searchIconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='Profile'
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              color={focused ? COLORS.primary : COLORS.searchIconColor}
            />
          ),
        }}
      />
    </Tabs>
  );
};
