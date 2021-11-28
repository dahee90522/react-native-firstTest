import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100
    },
    textStyle:{
        fontSize:30
    }
})

export default function Loading(){
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Loading Screen</Text>
        </View>
    )
}