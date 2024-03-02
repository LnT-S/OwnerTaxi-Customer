import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlacesAutoComplete from '../map/PlacesAutoComplete';
import { BgColor, ScreenColor } from '../../styles/colors';
import { getResponsiveValue } from '../../styles/responsive';
import Buttons from '../../adOns/atoms/Buttom';
import DatePicker from '../../adOns/atoms/DatePicker';

const LocalForm = function () {

    const [isPressed, setisPressed] = useState({
        state: false,
        index: -1
    })
    const [carSpecificArray, setCarSpecificArray] = useState([])
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [showTimePicker, setShowTimePicker] = useState(false)
    const [dateSelected, setDateSelected] = useState(new Date())
    const [timeSelected, setTimeSelected] = useState(new Date())

    const VehicleArray = [
        {
            type: 'sedan',
            specific: ['city', 'verna', 'swift', 'mercedes']
        },
        {
            type: 'xuv',
            specific: ['wagonr', 'xuv500', 'defender', 'thar']
        },
        {
            type: 'abc',
            specific: ['ab', 'bc', 'cd', 'ef']
        }
    ]

    const handleVehicleType = function (item, index) {
        setisPressed({ state: true, index: index })
        setCarSpecificArray(item.specific)
        console.log("vehical choose", item.name)
    }


    return (
        <AuthenticatedLayout
            title={'Local Form'}
            showFooter={false}
        >
            <ScrollView style={{ flex: 1, backgroundColor: ScreenColor }}
                nestedScrollEnabled={true}
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="true"
            >
                <View style={styles.MainContainer}>
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
                   {/*Select Time*/}
                   <View>
                   {/*Time Heading*/}
                   <View>
                       <Text style={styles.text}>Select Time</Text>
                   </View>
                   {/*Timming*/}
                   <View style={styles.TimeBottons}>
                       <TouchableOpacity style={[styles.textInput, { marginRight: 5 }]} onPress={() => setShowDatePicker(true)}>
                           <Icon name="date-range" size={24} color="black" style={styles.Timeicon} />
                           <Text
                               style={styles.Timeinput}       
                           >{dateSelected.toDateString()}</Text>
                       </TouchableOpacity>
                       {showDatePicker && <DatePicker
                           initialDate={dateSelected}
                           setSelectedDate={setDateSelected}
                           setShowDatePicker={setShowDatePicker}
                           mode='date'
                       />}
                       <TouchableOpacity style={styles.textInput} onPress={() => setShowTimePicker(true)}>
                           <Icon name="alarm" size={24} color="black" style={styles.Timeicon} />
                           <Text
                               style={styles.Timeinput}       
                           >{timeSelected.toLocaleTimeString()}</Text>
                       </TouchableOpacity>
                       {showTimePicker && <DatePicker
                           initialDate={timeSelected}
                           setSelectedDate={setTimeSelected}
                           setShowDatePicker={setShowTimePicker}
                           mode='time'
                       />}
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
                                    return <TouchableOpacity onPress={() => handleVehicleType(item, index)}>
                                        <View style={styles.vehicleImageContainer}>
                                            <View style={[styles.vehicleImage, (isPressed.state && isPressed.index === index) ? styles.bgcolor : '']}>
                                                <Icon name="directions-car" size={30} color="#000" />
                                            </View>
                                            <View style={styles.vehicleName}>
                                                <Text style={styles.nameText}>
                                                    {item.type}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }}
                            />
                        </View>
                        {/*Vehical Type*/}
                        <View>
                            {carSpecificArray.length != 0 ? <FlatList
                                style={{}}
                                keyExtractor={(item, index) => (index)}
                                data={carSpecificArray}
                                horizontal
                                renderItem={({ item }) => {
                                    return <TouchableOpacity onPress={() => handleVehicleType(item)}>
                                        <View style={styles.vehicleImageContainer}>
                                            <View style={[styles.vehicleImage]}>
                                                <Icon name="directions-car" size={30} color="#000" />
                                            </View>
                                            <View style={styles.vehicleName}>
                                                <Text style={styles.nameText}>
                                                    {item}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }}
                            /> : ''}
                        </View>
                    </View>
                    {/*Budget*/}
                    <View>
                        <View>
                            <Text style={styles.text}>Budget</Text>
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter Amount"
                            keyboardType="numeric"
                        />
                    </View>
                    {/*Submit*/}
                    <View style={styles.buttons}>
                        <Buttons name="Schedule A Ride" style={{width: '50%'}}/>
                        <Buttons name="Book Now" style={{width: '45%'}} />
                    </View>
                </View>
            </ScrollView>
        </AuthenticatedLayout>
    );
}

const styles = StyleSheet.create({
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
        fontSize: 16,
        fontWeight: '800',
        color: 'black',
        margin: 5,
        paddingLeft: 5
    },
  
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
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
        fontSize: 12,
        fontWeight: '500',
        color: 'black',
    },
    bgcolor: {
        backgroundColor: BgColor
    },
    buttons: {
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginVertical:10
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
