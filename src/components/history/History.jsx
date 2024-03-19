import React from 'react'
import { Text, View ,FlatList, StyleSheet} from 'react-native'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout'
import LazyLoadActiveRequestCard from './ActiveRequestCard'
const History = () => {
    const activeList = [
        {
            from: 'Aman Tiwari, Naween chowk SITAPUR',
            to: 'Shruti Mishra, Ghura mau bangla',
            date: '06-07-2019',
            time: '12:00 PM',
            customerID: 'Shruti Mishra',
            budget: 550
        },
        {
            from: 'Aman Tiwari, Naween chowk SITAPUR',
            to: 'Shruti Mishra, Ghura mau bangla',
            date: '06-07-2019',
            time: '12:00 PM',
            customerID: 'Shruti Mishra',
            budget: 550
        },
        {
            from: 'Aman Tiwari, Naween chowk SITAPUR',
            to: 'Shruti Mishra, Ghura mau bangla',
            date: '06-07-2019',
            time: '12:00 PM',
            customerID: 'Shruti Mishra',
            budget: 550
        },
        {
            from: 'Aman Tiwari, Naween chowk SITAPUR',
            to: 'Shruti Mishra, Ghura mau bangla',
            date: '06-07-2019',
            time: '12:00 PM',
            customerID: 'Shruti Mishra',
            budget: 550
        },
        {
            from: 'Aman Tiwari, Naween chowk SITAPUR',
            to: 'Shruti Mishra, Ghura mau bangla',
            date: '06-07-2019',
            time: '01:00 PM',
            customerID: 'Shruti Mishra',
            budget: 550
        }

    ];
    return (
        <AuthenticatedLayout title={'History'}>
                <FlatList
                    keyExtractor={(item, index) => (index)}
                    data={activeList}
                    renderItem={({ item }) => {
                        return <View style={styles.FlatListviewStyle}><LazyLoadActiveRequestCard item={item} /></View>
                    }}

                />
        </AuthenticatedLayout>
    )
}
const styles = StyleSheet.create({
    FlatListviewStyle: {
        marginVertical: 10
    }
})
export default History