import React from 'react'
import { Text, View, FlatList, ScrollView,StyleSheet, StatusBar } from 'react-native'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout'
import ActiveCard from './ActiveCard'
import { BgColor, ScreenColor } from '../../styles/colors'
import { height, width } from '../../styles/responsive'

const ActiveBooking = () => {

    const activeBookingArray = [
        {
            type: 'intercity',
            subType: 'round-trip',
            status: 'pending',
            pickUp: {
                point: 'naveen chowk',
                time: '02:00'
            },
            drop: {
                point: 'GIC',
                time: '17:00'
            },
            payment: {
                amount: 3000,
                budget: 2000,
                mode: 'cash'
            }
        },
        {
            type: 'Local',
            subType: '',
            status: 'confirmed',
            pickUp: {
                point: 'naveen chowk',
                time: '02:00'
            },
            drop: {
                point: 'GIC',
                time: '17:00'
            },
            payment: {
                amount: 3000,
                mode: 'cash'
            }
        },
        {
            type: 'Rental',
            subType: '',
            status: 'cancelled',
            pickUp: {
                point: 'naveen chowk',
                time: '02:00'
            },
            drop: {
                point: 'GIC',
                time: '17:00'
            },
            payment: {
                amount: 3000,
                mode: 'cash'
            }
        },
        {
            type: 'Rental',
            subType: '',
            status: 'cancelled',
            pickUp: {
                point: 'naveen chowk',
                time: '02:00'
            },
            drop: {
                point: 'GIC',
                time: '17:00'
            },
            payment: {
                amount: 3000,
                mode: 'cash'
            }
        },
        {
            type: 'Rental',
            subType: '',
            status: 'cancelled',
            pickUp: {
                point: 'naveen chowk',
                time: '02:00'
            },
            drop: {
                point: 'GIC',
                time: '17:00'
            },
            payment: {
                amount: 3000,
                mode: 'cash'
            }
        }
        , {
            type: 'Rental',
            subType: '',
            status: 'cancelled',
            pickUp: {
                point: 'naveen chowk',
                time: '02:00'
            },
            drop: {
                point: 'GIC',
                time: '17:00'
            },
            payment: {
                amount: 3000,
                mode: 'cash'
            }
        }
    ]
    return (
        <AuthenticatedLayout title={'Active Booking'}>
            <ScrollView style={{ flex: 1, backgroundColor: BgColor, height:height}}>
                <FlatList
                    keyExtractor={(item, index) => (index)}
                    data={activeBookingArray}
                    snapToInterval={width}
                    alwaysBounceHorizontal={true}
                    showsHorizontalScrollIndicator={true}
                    decelerationRate='fast'
                    horizontal
                    renderItem={({ item, index }) => {
                        return <View>
                            <ActiveCard item={item} />
                        </View>
                    }}
                />
            </ScrollView>
        </AuthenticatedLayout>
    )
}
const styles = StyleSheet.create({
    numberText:{
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        textTransform: 'capitalize'
    }
})
export default ActiveBooking