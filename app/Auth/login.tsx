import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { CompanyLogo } from '@/themes/images';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoSpace}>
        <Image source={CompanyLogo} style={styles.logo} />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push('/loginMenu')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#2F50C1',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoSpace: { flex: 2, justifyContent: 'center' },
  logo: { width: 200, height: 100, resizeMode: 'contain' },
  loginButton: {
    backgroundColor: '#F9F8FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    width: '90%',
  },
  loginText: { fontWeight: '600', fontSize: 20, color: '#2F50C1' },
});
