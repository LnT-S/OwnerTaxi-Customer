// CustomDrawerContent.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import YesNoModal from './YesNoModal';
import { useProfile } from '../../context/ContextProvider';
interface CustomDrawerProps {
  state: any; // React Navigation state object
  navigation: any; // React Navigation navigation object
}

const CustomDrawerContent: React.FC<CustomDrawerProps> = ({ state, navigation }) => {

  const {profileState , profileDispatch} = useProfile()
  const activeRouteName = state.routeNames[state.index]; // Get the active route name
  const [showModal, setShowModal] = useState(false)
  const mainNavigation = useNavigation()

  const handleNavigation = (routeName: string) => {
    navigation.navigate(routeName);
  };
  const handleYes = async () => {
    await AsyncStorage.removeItem('token')
    // profileDispatch({type:'REFRESH', payload:!profileState.refresh})
    setShowModal(false);
    navigation.closeDrawer();
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    });
};

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <YesNoModal
              show={showModal}
              setShow={setShowModal}
              title={'EXIT ?'}
              message={'Are You Sure Want To Logout ?'}
              handleYes={handleYes}
              yesText={'Yes'}
              noText={'No'}/>

      <View style={{ display: 'flex', alignItems: 'flex-end', marginRight: 15, marginTop: 10 }}>
        <Icon name="settings" size={24} color="#ffea00" onPress={() => handleNavigation('Setting')} />
      </View>
      <View style={styles.profileContainer}>
        <Icon name="person" size={50} color="#ffea00" />
        <Text style={styles.profileText}>Person name</Text>
        <Text style={styles.profileText}>123-456-7890</Text>
      </View>
      <TouchableOpacity
        style={[
          activeRouteName === 'Home' && styles.activeItemBackground,
        ]}
        onPress={() => handleNavigation('Home')}>
        <Text style={[
          styles.text,
          activeRouteName === 'Home' && styles.activeItemColor,
        ]}>
          Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          activeRouteName === 'ActiveBooking' && styles.activeItemBackground,
        ]}
        onPress={() => handleNavigation('ActiveBooking')}>
        <Text style={[
          styles.text,
          activeRouteName === 'ActiveBooking' && styles.activeItemColor,
        ]}>Active Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          activeRouteName === 'MyProfile' && styles.activeItemBackground,
        ]}
        onPress={() => handleNavigation('MyProfile')}>
        <Text style={[
          styles.text,
          activeRouteName === 'MyProfile' && styles.activeItemColor,
        ]}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          activeRouteName === 'History' && styles.activeItemBackground,
        ]}
        onPress={() => handleNavigation('History')}>
        <Text style={[
          styles.text,
          activeRouteName === 'History' && styles.activeItemColor,
        ]}>History</Text>
      </TouchableOpacity>


      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={async () => {
            // Implement logout functionality
            
            setShowModal(true)
          }}>
          <Icon name="exit-to-app" size={30} color="black" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    color: '#ffea00',
    marginLeft: 20,
    marginVertical: 10,
  },
  profileText: {
    fontSize: 18,
    marginVertical: 5,
    color: 'white',
  },
  logoutContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoutButton: {
    backgroundColor: '#ffea00',
    paddingVertical: 15,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  activeItemColor: {
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  activeItemBackground: {
    backgroundColor: '#e9f285',
    color: 'black',// Your active item background color
    marginHorizontal: 10
  },
});

export default CustomDrawerContent;
