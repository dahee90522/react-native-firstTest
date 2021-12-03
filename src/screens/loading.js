import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: 30,
        paddingVertical: 100
    },
    textStyle:{
        fontSize:20
    }
})

export default function Loading({ navigation }){
    return(
        <View>
          <Text>Loading!</Text>
          <Button
            title="Go to Test"
            onPress={() => navigation.navigate("Test")}
          />
        </View>
    )
}