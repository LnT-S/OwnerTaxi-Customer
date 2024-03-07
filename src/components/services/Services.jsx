import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import { ScrollView } from 'react-native-gesture-handler';
import { ScreenColor } from '../../styles/colors';

const Services = () => {
    const navigation = useNavigation();

    return (
        <AuthenticatedLayout title={'Services We Offer'}>
            <ScrollView style={{flex:1,backgroundColor: ScreenColor}}>
                <View style={styles.suggestioninnerContainer}>
                    <TouchableOpacity style={styles.suggestionContainer} onPress={() => navigation.navigate('Local')}>
                        <Image source={require('../../assets/imgaes/Local.jpg')}
                            style={{ width: 140, height: 140, borderRadius: 10 }} />
                        <Text style={styles.suggestionText}>Local</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.suggestionContainer} onPress={() => navigation.navigate('Intercity')}>
                        <Image source={require('../../assets/imgaes/Intercity.png')} style={{ width: 140, height: 140, borderRadius: 10 }} />
                        <Text style={styles.suggestionText}>Intercity</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.suggestioninnerContainer}>
                    <TouchableOpacity style={styles.suggestionContainer} onPress={() => navigation.navigate('Sharing')}>
                        <Image source={require('../../assets/imgaes/sharing.jpg')} style={{ width: 140, height: 140, borderRadius: 10 }} />
                        <Text style={styles.suggestionText}>Sharing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.suggestionContainer} onPress={() => navigation.navigate('Rental')}>
                        <Image source={require('../../assets/imgaes/rental.jpg')} style={{ width: 140, height: 140, borderRadius: 10 }} />
                        <Text style={styles.suggestionText}>Rental</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </AuthenticatedLayout >
    );
}

const styles = StyleSheet.create({
    suggestionContainer: {
        margin: 30
    },
    suggestioninnerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    suggestionText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    },
})

export default Services;
