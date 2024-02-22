import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

navigator.geolocation = require('@react-native-community/geolocation');

const PlacesAutoComplete = () => {
    return (
        <View style={{  height : '100%' , borderBottomWidth : 2 , borderBottomColor : 'violet'}}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyAlEujvNEFTFUBtG9363FjtK-3YOLAUSfM',
                    language: 'en',
                }}
                currentLocation={true}
                currentLocationLabel='Current location'
                styles={{
                    row : {
                        zIndex : 20,
                    },
                    listView : {
                        backfaceVisibility : 1,
                        position : 'absolute',
                        top : 40,
                        left : 0,
                        zIndex : 500
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
})

export default PlacesAutoComplete;
