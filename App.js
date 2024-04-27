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
  LogBox
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
import SourceDestinationForm from './src/components/form/SourceDestinationForm';
import Message from './src/components/Message/Message';
import Notification from './src/components/Notification/Notification';
import MessageScreen from './src/components/Message/MessageScreen';
import NotificationFullPage from './src/components/Notification/NotificationFullPage';
import LocalForm from './src/components/home/LocalForm.jsx';
import Intercity from './src/components/home/Intercity.jsx';
import Rental from './src/components/home/Rental.jsx';
import Sharing from './src/components/home/Sharing.jsx';
import Setting from './src/components/settings/Settting.jsx';
import Profile from './src/components/profile/Profile';
import Services from './src/components/services/Services.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Terms from './src/components/terms&Condition/terms.jsx';
import Privacy from './src/components/privacy/Privacy.jsx';
import BidingPage from './src/components/active Booking/BidingPage.jsx';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();
LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.'])

function DrawerNavigator() {

  return (
    <ContextProvider>
    <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <CustomDrawerContent {...props} />} backBehavior="history" detachInactiveScreens={true}>
      <Drawer.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Drawer.Screen name="Local" component={LocalForm} options={{ headerShown: false }} />
      <Drawer.Screen name="Intercity" component={Intercity} options={{ headerShown: false }} />
      <Drawer.Screen name="Rental" component={Rental} options={{ headerShown: false }} />
      <Drawer.Screen name="Sharing" component={Sharing} options={{ headerShown: false }} />
      <Drawer.Screen name="ActiveBooking" component={ActiveBooking} options={{ headerShown: false }} />
      <Drawer.Screen name="History" component={History} options={{ headerShown: false }} />
      <Drawer.Screen name="MyProfile" component={Profile} options={{ headerShown: false }} />
      <Drawer.Screen name="Message" component={Message} options={{ headerShown: false }} />
      <Drawer.Screen name="messageScreen" component={MessageScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Drawer.Screen name="notificationScreen" component={NotificationFullPage} options={{ headerShown: false }} />
      <Drawer.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
      <Drawer.Screen name="Services" component={Services} options={{ headerShown: false }} />
      <Drawer.Screen name='SourceDestinationForm' component={SourceDestinationForm} options={{ headerShown: false }}
    />
    <Drawer.Screen name='Terms' component={Terms} options={{ headerShown: false }}
    />
    <Drawer.Screen name='Privacy' component={Privacy} options={{ headerShown: false }}
    />
    <Drawer.Screen name='Bidding' component={BidingPage} options={{ headerShown: false }}
    />
    </Drawer.Navigator>
    </ContextProvider>
  );
}

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute , setInitialRoute] = useState("LoginScreen")

  const isTokenAvailable = async ()=>{
    let token = await AsyncStorage.getItem('token')
    console.log("TOKEN ",token)
    if(token!==null && token !==undefined){
      setInitialRoute("HomeScreen")
      return true
    }
    return false
  }

  useEffect(() => {
    isTokenAvailable().then(is=>{
      console.log(is)
    }).catch(error=>{
      console.log("ERROR IN LOGGING TOKEN",error)
    })
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
            initialRouteName={initialRoute}
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
      <FlashMessage />
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
