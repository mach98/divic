import { Link, Redirect } from 'expo-router';
import { Text, View } from 'react-native';
import LoginScreen from './login';

export default function Index() {
  return <Redirect href={'/MainScreen'} />;
}
