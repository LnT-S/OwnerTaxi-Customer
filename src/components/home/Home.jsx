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
               
                <View style={styles.suggestionContainer}>
                    <Text style={styles.suggestiontext}>Suggestions</Text>
                    <View style={styles.suggestioninnerContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Local')}>
                            <Image source= {require('../../assets/imgaes/Local.jpg')} 
                            style={{ width: 80, height: 80 ,borderRadius:10}}/>
                            <Text style={styles.suggestionText}>Local</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Intercity')}>
                            <Image source={require('../../assets/imgaes/Intercity.png')} style={{ width: 80, height: 80,borderRadius:10 }}/>
                            <Text style={styles.suggestionText}>Intercity</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={require('../../assets/imgaes/sharing.jpg')} style={{ width: 80, height: 80,borderRadius:10 }}/>
                            <Text style={styles.suggestionText}>Sharing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Rental')}>
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
        backgroundColor: ScreenColor,
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