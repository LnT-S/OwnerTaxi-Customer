import React, { useEffect, useState } from 'react'
import { BackHandler,StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout'
import {ScreenColor } from '../../styles/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlacesAutoComplete from '../map/PlacesAutoComplete'
import { Image } from 'react-native-elements'

const HomePage = () => {
    const navigation = useNavigation()
    //Dummy Search Array

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
    }, []);

    return (
        <AuthenticatedLayout title={'Home'}>
            <View style={styles.mainContainer}>
                <View style={styles.mapContainer}>
                    <View style={styles.addressContainer}>
                        <View style={styles.icon}>
                            <View style={styles.iconContainer}>
                                <Icon name="location-on" size={24} color="green" />
                            </View>
                            <View style={styles.dottedLine}>
                                {[...Array(10)].map((_, index) => (
                                    <Icon key={index} name="lens" size={4} color="gray" />
                                ))}
                            </View>
                            <View style={styles.iconContainer}>
                                <Icon name="location-on" size={24} color="red" />
                            </View>
                        </View>
                        <View style={styles.addressInput}>
                            <View><Text style={styles.text}>Pickup Location</Text></View>
                            <View style={styles.pickupCnontainer}>
                                <PlacesAutoComplete placeholder={'Enter Your Pickup Location'} />
                            </View>
                            <View><Text style={styles.text}>Drop Location</Text></View>
                            <View style={styles.dropContainer}>
                                <PlacesAutoComplete placeholder={'Destination'} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.suggestionContainer}>
                    <Text style={styles.suggestiontext}>Suggestions</Text>
                    <View style={styles.suggestioninnerContainer}>
                        <TouchableOpacity>
                            <Image source= {require('../../assets/imgaes/Local.jpg')} 
                            style={{ width: 80, height: 80 ,borderRadius:10}}/>
                            <Text style={styles.suggestionText}>Local</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/imgaes/Intercity.png')} style={{ width: 80, height: 80,borderRadius:10 }}/>
                            <Text style={styles.suggestionText}>Intercity</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/imgaes/sharing.jpg')} style={{ width: 80, height: 80,borderRadius:10 }}/>
                            <Text style={styles.suggestionText}>Sharing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/imgaes/rental.jpg')} style={{ width: 80, height: 80 ,borderRadius:10}}/>
                            <Text style={styles.suggestionText}>Rental</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.TourPacContainer}></View>
            </View>
        </AuthenticatedLayout>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        position: 'relative',
        backgroundColor: ScreenColor,
    },
    mapContainer: {
        height: 350,
        position: 'relative',
        backgroundColor: 'white',
    },
    icon: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '10%'
    },
    addressContainer: {
        width: '95%',
        position: 'absolute',
        top: 10,
        borderWidth: 2,
        flexDirection: 'row',
        marginHorizontal: 10,
        backgroundColor: ScreenColor,
        paddingBottom: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    dottedLine: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    addressInput: {
        width: '95%',
    },
    pickupCnontainer: {
        width: '95%',
        zIndex: 600,
    },
    dropContainer: {
        width: '95%',
        zIndex: 400,
    },
    text: {
        color: 'black',
        fontSize: 16,
        marginLeft: 10
    },
    suggestionContainer: {

    },
    TourPacContainer: {

    },
    suggestiontext: {
        color: 'black',
        fontSize: 18,
        fontWeight:'800',
        margin: 12
    },
    suggestioninnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    suggestionText:{
        color: 'black',
        fontSize: 14,
        fontWeight:'500',
        textAlign: 'center'
    }
})

export default HomePage