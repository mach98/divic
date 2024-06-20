import { Tabs } from 'expo-router';
import {
  ShipmentIcon,
  WalletIcon,
  ScanIcon,
  ProfileIcon,
} from '@/themes/icons';
import { COLORS } from '@/themes/colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { CompanyLogo } from '@/themes/images';

export default () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='Shipments'
        options={{
          tabBarIcon: () => <ShipmentIcon color={COLORS.primary} />,
          headerShown: true,
          headerLeft: () => (
            <AntDesign
              name='user'
              size={25}
              style={{
                marginLeft: 15,
                padding: 10,
                borderRadius: 100,
                backgroundColor: COLORS.receivedColor,
              }}
            />
          ),
          headerTitle: () => (
            <Image
              style={{ width: 250, height: 20, tintColor: COLORS.primary }}
              source={CompanyLogo}
              resizeMode='contain'
            />
          ),
          headerRight: () => (
            <Ionicons
              name='notifications-outline'
              size={25}
              style={{
                marginRight: 10,
                padding: 10,
                borderRadius: 100,
                backgroundColor: COLORS.receivedColor,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='Scan'
        options={{ tabBarIcon: () => <ScanIcon color={COLORS.primary} /> }}
      />
      <Tabs.Screen
        name='Wallet'
        options={{ tabBarIcon: () => <WalletIcon color={COLORS.primary} /> }}
      />
      <Tabs.Screen
        name='Profile'
        options={{ tabBarIcon: () => <ProfileIcon color={COLORS.primary} /> }}
      />
    </Tabs>
  );
};
