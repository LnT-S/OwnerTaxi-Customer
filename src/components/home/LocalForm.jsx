import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlacesAutoComplete from '../map/PlacesAutoComplete';
import { BgColor, ScreenColor } from '../../styles/colors';
import { getResponsiveValue } from '../../styles/responsive';
import Buttons from '../../adOns/atoms/Buttom';
import MapComponent from '../map/MapComponent';
import { useProfile } from '../../context/ContextProvider';
import { localBooking } from '../../services/apiCall';
import FlashMessage from 'react-native-flash-message';
import { showNoty } from '../../common/flash/flashNotification';

const LocalForm = function () {

    const localFormRef = useRef(null)
    const [isPressed, setisPressed] = useState({
        state: false,
        index: -1
    })
    const { profileState, profileDispatch } = useProfile()
    const [VehicleArray, setVehicleArray] = useState([
        {
            type: 'auto',
            capacity: 3
        },
        {
            type: 'Mini',
            capacity: 4
        },
        {
            type: 'sedan',
            capacity: 4
        },
        {
            type: 'xuv',
            capacity: 4
        },
        {
            type: 'abc',
            capacity: 4
        }
    ])
    const [bookingForm, setBookingForm] = useState(profileState.bookingForm)
    const [pickUp, setPickUp] = useState({
        description: '',
        latitude: null,
        longitude: null,
        date: {
            msec: new Date().getTime(),
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            day: new Date().getDate(),
            hour: new Date().getHours(),
            min: new Date().getMinutes()
        }
    })
    const [drop, setDrop] = useState({
        description: '',
        latitude: null,
        longitude: null,
        date: {
            msec: null,
            year: null,
            month: null,
            day: null,
            hour: null,
            min: null
        }
    })
    const [marker, setMarker] = useState([pickUp, drop])
    useEffect(() => {
        console.log('Pick Up ', pickUp)
        setMarker([pickUp, drop])
    }, [pickUp])
    useEffect(() => {
        console.log('Drop point ', drop)
        setMarker([pickUp, drop])
    }, [drop])
    useEffect(() => {
        console.log('Marker point ', marker)
    }, [marker])

    const [vehicle, setVehicle] = useState({
        type: '',
        subType: '',
        capacity: 1,
    })
    useEffect(() => {
        if (isPressed.index !== -1) {
            // console.log('Vehicle', VehicleArray[isPressed.index].type)
            setVehicle(prev => {
                return { ...prev, type: VehicleArray[isPressed.index].type }
            })
        }
    }, [isPressed])
    const [budget, setBudget] = useState('')
    const [budgetError, setBudgetError] = useState('')
    const checkAndSetBudget = (v) => {
        console.log(parseInt(v))
        if (!isNaN(parseInt(v)) || v === '') {
            setBudgetError('')
            setBudget(v)
        } else {
            console.log('}')
            setBudgetError('Attempt to insert invalid budget')
        }
    }
    const [submitError, setSubmitError] = useState('')
    const handleSubmit = async () => {
        // check required data is complete
        if (pickUp.description === '' || pickUp.latitude === null || pickUp.longitude === null) {
            setSubmitError('Pickup Point Required')
            return
        }
        if (drop.description === '' || drop.latitude === null || drop.longitude === null) {
            setSubmitError('Drop Point Required')
            return
        }
        if (vehicle.type.type === '') {
            setSubmitError('Vehicle Is Required')
            return
        }
        if (budget === '') {
            setSubmitError('Enter Your Budget');
            return
        }
        setSubmitError('')
        const data = {
            initiator: "customer",
            pickUp,
            drop,
            budget,
            bookingType: "local",
            bookingSubType: "",
            extrasIncluded: false,
            vehicle
        }
        try {
            let resObj = await localBooking(data)
            console.log(resObj)
            if (resObj.status !== 200) {
                showNoty(resObj.data.message, "danger")
            } else {
                showNoty(resObj.data.message, "success")
            }
        } catch (error) {
            console.log('ERROR IN LOCAL BOOKING ', error)
        }
    }

    useEffect(() => {
        return () => {
            setSubmitError('');
            setBudgetError('');
        }
    }, [])
    return (
        <AuthenticatedLayout
            title={'Local Form'}
            showFooter={false}
        >
            <ScrollView style={{ flex: 1, backgroundColor: ScreenColor, paddingHorizontal: 10 }}
                nestedScrollEnabled={true}
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="true"
            >
                <View>
                    <FlashMessage ref={localFormRef} />
                    <View style={styles.mapContainer}>
                        <MapComponent markerArray={marker} />
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
                                    <PlacesAutoComplete
                                        placeholder={'Enter Your Pickup Location'}
                                        update={setPickUp}
                                    />
                                </View>
                                <View><Text style={styles.text}>Drop Location</Text></View>
                                <View style={styles.dropContainer}>
                                    <PlacesAutoComplete
                                        placeholder={'Destination'}
                                        update={setDrop}
                                    />
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
                                    return <TouchableOpacity onPress={() => { setisPressed({ state: true, index: index }) }}>
                                        <View style={styles.vehicleImageContainer}>
                                            <View style={[styles.vehicleImage, (isPressed.state && isPressed.index === index) ? styles.bgcolor : '']}>
                                                <Icon name="directions-car" size={30} color="#000" />
                                            </View>
                                            <View style={styles.vehicleName}>
                                                <Text style={styles.nameText}>
                                                    {item.type}
                                                </Text>
                                                <Text style={styles.nameText}>
                                                {item.capacity} + 1
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
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter Amount"
                                keyboardType="numeric"
                                placeholderTextColor={'gray'}
                                onChangeText={(v) => { checkAndSetBudget(v) }}
                            />
                            {budgetError !== '' ? <Text style={{ color: 'red', fontSize: 14, fontFamily: 'serif' }}>{budgetError}</Text> : ''}
                        </View>
                    </View>
                    {/*Submit*/}
                    <View style={styles.buttons}>
                        {submitError !== '' ? <Text style={{ color: 'red', fontSize: 16, fontFamily: 'serif', marginBottom: 10, marginTop: 5 }}>{submitError}</Text> : ''}
                        <Buttons
                            name="SUBMIT"
                            style={{ width: '90%' }}
                            onPress={handleSubmit}
                            error={submitError !== '' ? true : false} />
                    </View>
                </View>
            </ScrollView>
        </AuthenticatedLayout>
    );
}

const styles = StyleSheet.create({
    mapContainer: {
        height: 600,
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
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        textTransform: 'uppercase',
        textAlign:'center'
    },
    bgcolor: {
        backgroundColor: BgColor
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
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
