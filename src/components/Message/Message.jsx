import React, { useState } from 'react'
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MessageCard from './MessageCard';
import { useNavigation } from '@react-navigation/native';

const Message = () => {

    const navigation = useNavigation()
    const [pageIsLoading , setPageIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)

    const refreshing = async () => {
    }
    const fetchData = async () => {
        setIsRefreshing(true)
        setInterval(() => {
            setIsRefreshing(false)
        }, 200)

    }

    const ChatList = [
        {
            image: require('../../assets/imgaes/Profile.png'),
            name: 'Person Name',
            lastMessage: 'This is just a example of Vendor Notification Click here to see more Notification related to vendor',
        },
        {
            image: require('../../assets/imgaes/Profile.png'),
            name: 'Person Name',
            lastMessage: 'This is just a example of Vendor Notification Click here to see more Notification related to vendor',
        },
        {
            image: require('../../assets/imgaes/Profile.png'),
            name: 'Person Name',
            lastMessage: 'This is just a example of Vendor Notification Click here to see more Notification related to vendor',
        },
        {
            image: require('../../assets/imgaes/Profile.png'),
            name: 'Person Name',
            lastMessage: 'Thisssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss is just a example of Vendor Notification Click here to see more Notification related to vendor',
        },
        {
            image: require('../../assets/imgaes/Profile.png'),
            name: 'Person Name',
            lastMessage: 'This is just a example of Vendor Notification Click here to see more Notification related to vendor',
        },
        {
            image: require('../../assets/imgaes/Profile.png'),
            name: 'Person Name',
            lastMessage: 'This is just a example of Vendor Notification Click here to see more Notification related to vendor',
        },
        {
            image: require('../../assets/imgaes/Profile.png'),
            name: 'Person Name',
            lastMessage: 'This is just a example of Vendor Notification Click here to see more Notification related to vendor',
        },
        {
            image: require('../../assets/imgaes/Profile.png'),
            name: 'Name',
            lastMessage: 'This is just a example of Vendor Notification Click here to see more Notification related to vendor',
        },

    ]

    const handleMessageChat = (item) => {
        navigation.navigate('messageScreen',{item})
    }
    if(pageIsLoading){
        return <LoadingScreen />
    }else{
        return (
            <AuthenticatedLayout title={'Messages'} showMessageIcon={false}>
                <View style={{ marginTop: 10, flex : 1}}>
                    {isRefreshing && <ActivityIndicator size={'large'} color={'black'} />}
                    <FlatList
                        style={{}}
                        keyExtractor={(item, index) => (index)}
                        data={ChatList}
                        renderItem={({ item }) => {
                            return <TouchableOpacity onPress={()=>handleMessageChat(item)}>
                                <View style={styles.FlatListviewStyle}>
                                    <MessageCard item={item} />
                                </View>
                            </TouchableOpacity>
                        }}
                        refreshControl={
                            <RefreshControl refreshing={isRefreshing} onRefresh={fetchData} />
                        }
                    />
                </View>
            </AuthenticatedLayout>
        )
    }
}

const styles = StyleSheet.create({
    flexDirection: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        position : 'relative'
    },
    FilterIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '800',
        color: 'black'
    },
    ThreeWaywidth: {
        flexBasis: '85%',
        marginRight: 10
    },
    margin: {
        marginTop: 15
    },
    FlatListviewStyle: {
        marginVertical: 1
    }
})

export default Message