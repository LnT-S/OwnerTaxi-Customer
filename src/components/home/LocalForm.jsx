import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlacesAutoComplete from '../map/PlacesAutoComplete';
import { BgColor, ScreenColor } from '../../styles/colors';
import { getResponsiveValue } from '../../styles/responsive';
import Buttons from '../../adOns/atoms/Buttom';
import MapComponent from '../map/MapComponent';

const LocalForm = function () {

    const [isPressed, setisPressed] = useState({
        state: false,
        index: -1
    })

    const VehicleArray = [
        {
            type: 'auto',
            personCount: 3
        },
        {
            type: 'Mini',
            personCount: 4
        },
        {
            type: 'sedan',
            personCount: 4
        },
        {
            type: 'SUV',
            personCount: 6
        },
    ]

    const handleVehicleType = function (item, index) {
        setisPressed({ state: true, index: index })
        console.log("vehical choose", item.name)
    }


    return (
        <AuthenticatedLayout
            title={'Local Form'}
            showFooter={false}
        >
            <ScrollView style={{ flex: 1, backgroundColor: ScreenColor ,paddingHorizontal: 10}}
                nestedScrollEnabled={true}
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="true"
            >
                <View>
                    <View style={styles.mapContainer}>
                        <MapComponent />
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
                   
                    {/*Choose Vehical*/}
                    <View>
                        <View>
                            <Text style={styles.text}>Choose Vehicle Type</Text>
                        </View>
                        {/*Vehical*/}
                        <View>
                            <FlatList
                                style={{}}
                                keyExtractor={(item, index) => (index)}
                                data={VehicleArray}
                                horizontal
                                renderItem={({ item, index }) => {
                                    return <TouchableOpacity onPress={()=>handleVehicleType(item,index)}>
                                        <View style={styles.vehicleImageContainer}>
                                            <View style={[styles.vehicleImage, (isPressed.state && isPressed.index === index) ? styles.bgcolor : '']}>
                                                <Icon name="directions-car" size={30} color="#000" />
                                            </View>
                                            <View style={styles.vehicleName}>
                                                <Text style={styles.nameText}>
                                                    {item.type}
                                                </Text>
                                                <Text style={styles.nameText}>
                                                {item.personCount} + 1
                                            </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }}
                            />
                        </View>
                       
                    </View>
                    
                    {/*Budget*/}
                    <View>
                        <View>
                            <Text style={styles.text}>Budget</Text>
                        </View>
                        <View style={{justifyContent: 'center',alignItems:'center'}}>
                        <TextInput
                        style={styles.textInput}
                        placeholder="Enter Amount"
                        keyboardType="numeric"
                        placeholderTextColor={'gray'}
                        />
                        </View>
                    </View>
                    {/*Submit*/}
                    <View style={styles.buttons}>
                        <Buttons name="SUBMIT" style={{ width: '90%' }} />
                    </View>
                </View>
            </ScrollView>
        </AuthenticatedLayout>
    );
}

const styles = StyleSheet.create({
    mapContainer: {
        height: 450,
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
        flexDirection: 'row',
        marginHorizontal: 10,
        backgroundColor: ScreenColor,
        paddingBottom: 10,
        opacity: 0.8
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
    TimeInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 8,
    },
    Timeicon: {
        marginRight: 8,
    },
    Timeinput: {
        flex: 1,
        fontSize: 16,
        padding: 0,
    },
    text: {
        fontSize: 18,
        fontWeight: '800',
        color: 'black',
        margin: 10,
        paddingLeft: 5
    },

    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        height: getResponsiveValue(70, 50),
        paddingHorizontal: 10,
        position: 'relative',
        flex: 1,
        fontSize: 16,
        color: 'black',
        backgroundColor: `white`,
    },

    vehicleImageContainer: {
        margin: 5,
        marginHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    vehicleImage: {
        borderWidth: 3,
        padding: 10,
        borderRadius: 50,
        borderColor: BgColor

    },

    nameText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        textTransform: 'uppercase',
        textAlign:'center'
    },
    bgcolor: {
        backgroundColor: BgColor
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10
    },
    TimeBottons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 5
    }
})

export default LocalForm;
