import React, { useEffect, useState } from 'react'
import { BackHandler, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SearchBox from '../../adOns/atoms/Search'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout'
import ModeCards from '../../common/cards/ModeCards'
import local from '../../assets/imgaes/local.png'
import intercity from '../../assets/imgaes/intercity.jpeg'
import { BgColor } from '../../styles/colors'

const HomePage = () => {
    const navigation = useNavigation()
    const [showSearchResult, setShowSearchResults] = useState(true)
    //Dummy Search Array
    const [searchArray, setSearchArray] = useState(['item1', 'uditsir', 'kalyaanimaam', 'shrutimaam', 'herapheri', 'kgf'])
    useEffect(() => {
        const backAction = () => {
            navigation.goBack()
            return true
        }
        console.log("BACKHANDLER SET IN HOME PAGE")
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => {
            console.log('BACKHANDLER REMOVED FROM HOME PAGE')
            backHandler.remove()
        };
    }, []);

    return (
        <AuthenticatedLayout title={'Home'}>
            <ScrollView >
                <View style={{ position: 'relative' }}>
                    <View style={{ zIndex: 2 }}>
                        <SearchBox searchArray={searchArray} />
                    </View>
                    <View style={{ position: 'relative', zIndex: 1 }}>
                        <View>
                            <View style = {styles.pamHeadingContainer}>
                                <Text style = {styles.pamHeading}>
                                    Pick A Mode
                                </Text>
                            </View>
                            <View>
                                <View style={styles.individualModeContainer}>
                                    <View style={styles.modeHeadingContainer}>
                                        <Text style={styles.modeHeading}>Local</Text>
                                    </View>
                                    <View style = {{...styles.modeCardsContiner , justifyContent : 'flex-start', padding : 11}}>
                                        <ModeCards image = {intercity} mode={'Local'} subMode = {'One Way'}/>
                                    </View>
                                </View>
                                <View style={styles.individualModeContainer}>
                                    <View style={styles.modeHeadingContainer}>
                                        <Text style = {styles.modeHeading}>InterCity</Text>
                                    </View>
                                    <View style = {styles.modeCardsContiner}>
                                        <ModeCards image = {intercity} mode={'InterCity'} subMode = {'Round Trip'}/>
                                        <ModeCards image = {intercity} mode={'InterCity'} subMode = {'One Way'}/>
                                        <ModeCards image = {intercity} mode={'InterCity'} subMode = {'Sharing'}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </AuthenticatedLayout>
    )
}

const styles = StyleSheet.create({
    
    pamHeadingContainer : {
        paddingHorizontal : 10,
        marginVertical : 5,
        borderBottomWidth : 2
    },
    pamHeading : {
        fontSize : 24,
        fontWeight : '900',
        marginTop : 5,
        fontStyle : 'normal'
    },
    individualModeContainer:{
        padding : 1,
        marginVertical : 6
    },
    individualMode : {
    },
    modeHeadingContainer : {
    },
    modeHeading : {
        fontWeight : '600',
        fontSize : 20,
        margin : 5,
        color: 'black',
        padding : 3
    },
    modeCardsContiner : {
        padding : 5,
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-around',
        gap : 15,
    }
})

export default HomePage