import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/pages/Welcome/welcome';
import Trip from './src/pages/PlainTrip/trip';
import Login from './src/pages/Login/login';
import Splace from './src/pages/Splace/splace';
import SignUp from './src/pages/SignUp/signUp';
import ForgetPass from './src/pages/ForgetPassword/forgetPass';
import VerificationCode from './src/pages/VerificationCode/verificationCode';
import Home from './src/pages/Home/home';

import Routes from './src/routes/routes';
import Details from './src/pages/Details/details';
import Profile from './src/pages/Profile/profile';





export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },
});
