// MapComponent.js
import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PlacesAutoComplete from './PlacesAutoComplete';

const MapComponent = () => {

    const mapViewRef = useRef(null);

    const onMapReady = () => {
        // Coordinates of your markers
        const coordinates = [
            { latitude: 37.78825, longitude: -122.4324 },
            // Add other marker coordinates as needed
        ];

        // Fit the map to the provided coordinates
        mapViewRef.current.fitToCoordinates(coordinates, {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
            animated: true,
        });
    };

    return (
        <View style={styles.container}>
            <MapView
                ref={mapViewRef}
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                }}
                onMapReady={onMapReady}
            >
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title="Initial Title"
                    description="Marker Description"

                    style={{ height: 10, width: 1 }}
                />
               
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
    },
    map:{
        height:450,
    }
});

export default MapComponent;
