import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const LoginMenu = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Login</Text>
        <Text style={styles.textDetails}>
          Please enter your First, Last name and your phone number in order to
          register
        </Text>
        <View style={styles.loginForm}>
          <TextInput placeholder='URL' style={styles.formInput} />
          <TextInput placeholder='Username / Email' style={styles.formInput} />
          <TextInput placeholder='Password' style={styles.formInput} />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#2F50C1',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 15,
          padding: 15,
          borderRadius: 15,
          width: '90%',
        }}
      >
        <Text style={{ fontWeight: '600', fontSize: 15, color: '#FFF' }}>
          Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
  },
  textDetails: {
    fontSize: 20,
    marginTop: 10,
  },
  loginForm: {
    marginTop: 15,
  },
  formInput: {
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#F9F8FB',
    marginTop: 20,
  },
});
