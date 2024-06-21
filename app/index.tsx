import { Link, Redirect } from 'expo-router';
import { Text, View } from 'react-native';
import LoginScreen from './Auth/login';
import Shipments from './Main/Shipments';

export default function Index() {
  return <Redirect href='Main' />;
}
