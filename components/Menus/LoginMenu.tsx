import { COLORS } from '@/themes/colors';
import { MaterialIcons } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import React, { useMemo, FC, forwardRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SButton from '../Button/SButton';
import { useAuth } from '@/context/Auth';
import { useRouter } from 'expo-router';

interface LoginMenuProps {}

type Ref = BottomSheet;
export const LoginMenu: FC<LoginMenuProps> = forwardRef<Ref, LoginMenuProps>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['90%'], []);
    const loginCredentials = {
      url: 'www.brandimic.com',
      username: 'ali@brandimic.com',
      password: 'testy123@',
    };
    const router = useRouter();
    const { login } = useAuth();
    const [url, setUrl] = useState(loginCredentials.url);
    const [username, setUsername] = useState(loginCredentials.username);
    const [password, setPassword] = useState(loginCredentials.password);

    const handleLogin = () => {
      if (
        url === loginCredentials.url &&
        username === loginCredentials.username &&
        password === loginCredentials.password
      ) {
        login();
        router.replace('Main');
      } else {
        Alert.alert('Error', 'Invalid Credentials');
      }
    };

    return (
      <BottomSheet
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        ref={ref}
        index={-1}
      >
        <View style={styles.container}>
          <View>
            <View style={styles.cancelSection}>
              <MaterialIcons
                name='arrow-back-ios'
                size={25}
                color={COLORS.primary}
              />
              <Text style={styles.cancelText}>Cancel</Text>
            </View>
            <Text style={styles.headerText}>Login</Text>
            <Text style={styles.textDetails}>
              Please enter your First, Last name and your phone number in order
              to register
            </Text>
            <View style={styles.loginForm}>
              <TextInput
                placeholder='URL'
                style={styles.formInput}
                inputMode='url'
                autoCapitalize='none'
                value={url}
                onChangeText={setUrl}
              />
              <TextInput
                placeholder='Username / Email'
                inputMode='text'
                autoCapitalize='none'
                value={username}
                onChangeText={setUsername}
                style={styles.formInput}
              />
              <TextInput
                placeholder='Password'
                style={styles.formInput}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>
          <SButton
            title='Login'
            onPress={handleLogin}
            buttonColor={COLORS.inactiveColor}
            fontColor={COLORS.canceledText}
            titleSize={17}
            borderRadius={10}
          />
        </View>
      </BottomSheet>
    );
  }
);

LoginMenu.displayName = 'Login Menu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
  },
  textDetails: {
    fontSize: 20,
    marginTop: 10,
    color: COLORS.canceledText,
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
  cancelSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cancelText: { fontSize: 20, color: COLORS.primary },
});
