import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { getResponsiveValue } from '../../styles/responsive';

navigator.geolocation = require('@react-native-community/geolocation');

const PlacesAutoComplete = (props) => {
    const { placeholder } = props
    return (
        <View style={{ height: 45, margin: 10, color: 'white' }}>
            <GooglePlacesAutocomplete
                placeholder={placeholder}
                textInputProps={{
                    placeholderTextColor: 'white'
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
                currentLocationStyle={{ color : 'white'}}
                
                styles={{
                    predefinedPlacesDescription: {
                        color: 'white',
                        backgroundColor: 'black'
                    },
                    textInput: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        height: getResponsiveValue(70, 50),
                        borderRadius: 20,
                        paddingHorizontal: 10,
                        backgroundColor: `black`,
                        marginBottom: getResponsiveValue(40, 20),
                        color: 'white',
                        borderColor: 'white',
                        borderWidth: 2,
                        position: 'relative',
                        flex: 1,
                        fontSize: 18,
                        color: 'white',
                        backgroundColor: `black`,
                    },
                    row: {
                        backgroundColor: 'black',
                        zIndex: 3,
                    },
                    listView: {
                        position: 'absolute',
                        top: 50,
                        left: 0,
                        zIndex: 500,
                        color: 'white'
                    },
                    

                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        color: 'white',
        backgroundColor: 'black',
        zIndex: 2
    },
    listItemText: {
        color: 'white'
    }
})

export default PlacesAutoComplete;
