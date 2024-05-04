import React, { useEffect, useState } from 'react'
import { BackHandler, ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList, Animated, Easing, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout'
import { BgColor, ScreenColor } from '../../styles/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlacesAutoComplete from '../map/PlacesAutoComplete'
import { Image } from 'react-native-elements'
import { getProfile } from '../../services/profileServices'
import { useProfile } from '../../context/ContextProvider'

const HomePage = () => {
    const navigation = useNavigation()
    const { profileState, profileDispatch } = useProfile()
    //Dummy Search Array

    const TourPackage = [
        {
            image: require('../../assets/imgaes/IntercityTour.jpeg'),
            name: 'Tour Name'
        },
        {
            image: require('../../assets/imgaes/Local.jpg'),
            name: 'Tour Name'
        },
        {
            image: require('../../assets/imgaes/Tour.png'),
            name: 'Tour Name'
        },
        {
            image: require('../../assets/imgaes/Tour.png'),
            name: 'Tour Name'
        },
        {
            image: require('../../assets/imgaes/Local.jpg'),
            name: 'Tour Name'
        },
        {
            image: require('../../assets/imgaes/Local.jpg'),
            name: 'Tour Name'
        },
        {
            image: require('../../assets/imgaes/IntercityTour.jpeg'),
            name: 'Tour Name'
        },

    ]
    const Services = [
        {
            image: require('../../assets/imgaes/Local.jpg'),
            name: 'Local'
        },
        {
            image: require('../../assets/imgaes/Intercity.png'),
            name: 'Intercity'
        },
        {
            image: require('../../assets/imgaes/sharing.jpg'),
            name: 'Sharing'
        },
        {
            image: require('../../assets/imgaes/rental.jpg'),
            name: 'Rental'
        },
    ]

    const handleNavigationServices = (name) => {
        console.log(name)
        let navigationName = 'Local'
        if (name === 'Intercity') {
            navigationName = 'Intercity'
        } else if (name === 'Rental') {
            navigationName = 'Rental'
        } else if (name === 'Sharing') {
            navigationName = 'Sharing'
        }
        navigation.navigate(navigationName)
    }
    useEffect(() => {
        getProfile()
            .then(data => {
                profileDispatch({
                    type: 'PHONE',
                    payload: data.data.data.phoneNo
                })
                profileDispatch({
                    type: 'USERNAME',
                    payload: data.data.data.name
                })
                profileDispatch({
                    type: 'AVATAR',
                    payload: data.data.data.avatar
                })
            })
            .catch(err => {
                console.log("ERROR IN RETRIVING PROFILE ", err)
            })
    }, [profileState.refresh])
    useEffect(() => {
        const backAction = () => {
            navigation.goBack()
            return true
        }
        console.log("BACKHANDLER SET IN HOME PAGE")
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => {
            console.log('BACKHANDLER REMOVED FROM HOME PAGE')
            backHandler.remove()
        };
    }, [profileState.refresh]);


    return (
        <AuthenticatedLayout title={'OwnerTaxi'} showBackIcon={false}>
            <ScrollView style={styles.mainContainer}>
                {/**Welcome */}
                <View style={styles.container}>
                    <Image
                        source={require('../../assets/imgaes/DriverAppLogo.png')}
                        style={[styles.image]}
                    />
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', margin: 15 }}>
                        <Text style={styles.weltext}>Welcome, </Text>
                        <Text style={styles.usertext}>User Name</Text>
                    </View>
                </View>
                <View style={styles.suggestionContainer}>
                    <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginHorizontal: 10 }}>
                        <Text style={styles.suggestiontext}>Services</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Services')}>
                            <Text style={styles.seetext}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={{ marginHorizontal: 20 }}
                        keyExtractor={(item, index) => (index)}
                        data={Services}
                        horizontal
                        renderItem={({ item, index }) => {
                            return <TouchableOpacity style={{ margin: 10 }}>
                                <Image source={item.image}
                                    style={{ width: 75, height: 80, borderRadius: 10 }} onPress={() => handleNavigationServices(item.name)} />
                                <Text style={styles.suggestionText}>{item.name}</Text>
                            </TouchableOpacity>
                        }}
                    />

                </View>
                <View style={styles.TourPacContainer}>
                    <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginHorizontal: 10 }}>
                        <Text style={styles.suggestiontext}>Tour Packages</Text>

                    </View>
                    <FlatList
                        style={{ marginHorizontal: 10 }}
                        keyExtractor={(item, index) => (index)}
                        data={TourPackage}

                        renderItem={({ item, index }) => {
                            return <TouchableOpacity style={{ margin: 10 }}>
                                <View style={styles.vehicleImage}>
                                    <Image source={item.image} style={{ width: 170, height: 150, borderRadius: 10 }} />
                                    <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Text style={styles.tourText}>
                                            {`${item.name}`}
                                        </Text>
                                        <Icon name="arrow-forward" size={30} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        }}
                        numColumns={2}
                    />
                </View>
            </ScrollView>
        </AuthenticatedLayout>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: BgColor,
    },

    TourPacContainer: {
        marginBottom: 10
    },
    suggestiontext: {
        color: 'black',
        fontSize: 20,
        fontWeight: '800',
        margin: 24
    },

    suggestionText: {
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center'
    },
    container: {
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 150,
    },
    weltext: {
        color: 'black',
        fontSize: 28,
        fontWeight: '500',
        textAlign: 'center',
        fontStyle: 'normal',
        textTransform: 'uppercase',
    },
    usertext: {
        color: 'black',
        fontSize: 28,
        fontWeight: '800',
        textAlign: 'center',
        fontStyle: 'italic',
        textTransform: 'uppercase',
    },
    text: {
        color: 'black',
        fontSize: 16,
        marginLeft: 10
    },
    nametext: {
        color: 'black',
        fontSize: 26,
        fontWeight: '600',
        textAlign: 'center',
        fontStyle: 'italic',
        textTransform: 'uppercase',
    },
    tourText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    },
    seetext: {
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
    }
})

export default HomePage