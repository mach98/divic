import BottomSheet from '@gorhom/bottom-sheet';
import React, { useMemo, FC, forwardRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

interface LoginMenuProps {}

type Ref = BottomSheet;
export const LoginMenu: FC<LoginMenuProps> = forwardRef<Ref, LoginMenuProps>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['80%'], []);

    return (
      <BottomSheet
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        ref={ref}
        index={-1}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.headerText}>Login</Text>
            <Text style={styles.textDetails}>
              Please enter your First, Last name and your phone number in order
              to register
            </Text>
            <View style={styles.loginForm}>
              <TextInput placeholder='URL' style={styles.formInput} />
              <TextInput
                placeholder='Username / Email'
                style={styles.formInput}
              />
              <TextInput placeholder='Password' style={styles.formInput} />
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#F9F8FB',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 15,
              padding: 15,
              borderRadius: 15,
            }}
          >
            <Text style={{ fontWeight: '600', fontSize: 15 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    );
  }
);

LoginMenu.displayName = 'Travelers Menu';

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
