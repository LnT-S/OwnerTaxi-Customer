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
                    latitudeDelta: 0.6,
                    longitudeDelta: 0.5,
                }}
                onMapReady={onMapReady}
            >
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title="Initial Title"
                    description="Marker Description"

                    style={{ height: 10, width: 1 }}
                />
                <Marker
                    coordinate={{ latitude: 39.78825, longitude: -122.4324 }}
                    title="Initial Title"
                    description="Marker Description"

                    style={{ height: 10, width: 1 }}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapComponent;
