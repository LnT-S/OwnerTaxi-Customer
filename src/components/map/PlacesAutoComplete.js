import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { getResponsiveValue } from '../../styles/responsive';

navigator.geolocation = require('@react-native-community/geolocation');

const PlacesAutoComplete = (props) => {
    const { placeholder } = props
    return (
        <View style={{ height: 45, margin: 5, color: 'black' }}>
            <GooglePlacesAutocomplete
                placeholder={placeholder}
                textInputProps={{
                    placeholderTextColor: 'gray'
                }}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyAlEujvNEFTFUBtG9363FjtK-3YOLAUSfM',
                    language: 'en',
                }}
                renderRow={(rowData, index) => (
                    <View style={styles.listItem}>
                        <Text style={styles.listItemText}>{rowData.description}</Text>
                    </View>
                )}
                currentLocation={true}
                currentLocationLabel='Current location'

                currentLocationStyle={{ color : 'black' }}
                
                styles={{
                    predefinedPlacesDescription: {
                        color: 'black',
                        backgroundColor: 'white'
                    },
                    textInput: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        height: getResponsiveValue(70, 50),
                        paddingHorizontal: 10,
                        marginBottom: getResponsiveValue(40, 20),
                        position: 'relative',
                        flex: 1,
                        fontSize: 16,
                        color: 'black',
                        backgroundColor: `white`,
                    },
                    row: {
                        backgroundColor: 'white',
                        zIndex: 500,
                        color: 'black'
                    },
                    listView: {
                        position: 'absolute',
                        top: 50,
                        left: 0,
                        zIndex: 500,
                        color: 'black'
                    },
                    

                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        color: 'black',
        backgroundColor: 'white',
        zIndex: 2
    },
    listItemText: {
        color: 'black'
    }
})

export default PlacesAutoComplete;
