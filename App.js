/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ContextProvider } from './src/context/ContextProvider';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import HomePage from './src/components/home/Home';
import ProfilePage from './src/components/profile/Profile';
import SplashScreen from './src/screens/static/SplashScreen';
import LoginPage from './src/components/Login/Login';
import SignupScreen from './src/components/Login/SignUp';
import Forget from './src/components/Login/Forget';
import { BgColor } from './src/styles/colors';
import OtpScreen from './src/components/Login/OTP';
import NewPassword from './src/components/Login/NewPassword';
import AuthenticatedLayout from './src/screens/layout/AuthenticatedLayout';
import CustomDrawerContent from './src/adOns/molecules/CustomDrawerContent';
import ActiveBooking from './src/components/active Booking/ActiveBooking';
import History from './src/components/history/History';
import MyProfile from './src/components/My profile/myProfile';
import Settings from './src/components/settings/Settings';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

function DrawerNavigator() {

  return (
    <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <CustomDrawerContent {...props} />} backBehavior="history">
      <Drawer.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Drawer.Screen name="ActiveBooking" component={ActiveBooking} options={{ headerShown: false }} />
      <Drawer.Screen name="History" component={History} options={{ headerShown: false }} />
      <Drawer.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />
      <Drawer.Screen name="Setting" component={Settings} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when the loading task is complete
    }, 2500); // Simulate loading for 2 seconds, replace this with your actual loading logic
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ContextProvider>
        <NavigationContainer >
          <StatusBar barStyle="dark-content" backgroundColor="#ffea00" />
          {isLoading ? (
            <SplashScreen />
          ) : (<Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: 'horizontal',

            }}
          >
            <Stack.Screen
              name='LoginScreen'
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='ForgetScreen'
              component={Forget}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='OTPScreen'
              component={OtpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='NewPassScreen'
              component={NewPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='SignupScreen'
              component={SignupScreen}
              options={{ headerShown: false }}
            />
              <Stack.Screen
                name='HomeScreen'
                component={DrawerNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='ProfileScreen'
                component={ProfilePage}
                options={{ headerShown: false }}
              />
          </Stack.Navigator>)}
        </NavigationContainer>
      </ContextProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: BgColor
  }
})

export default App;
