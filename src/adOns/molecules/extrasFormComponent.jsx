import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ExtrasFormComponent = (props) => {
    const { extraDistance, extraHour } = props;
   
    return (
        <View style={styles.container}>
            <View>
                <Icon name="info" size={30} color={'black'}/>
            </View>
            <View>
                <View>
                    <Text style={styles.text}>₹{extraDistance}/Km for extra distance and</Text>
                </View>
                <View>
                    <Text style={styles.text}>₹{extraHour}/min for extra time</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '85%',
        backgroundColor:'white',
        padding: 10,
        borderRadius: 6,
        margin: 10
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    },
})

export default ExtrasFormComponent;
