import React from 'react';
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () => {
   const greeting = {name: 'Excel'}

    return ( <View>
    <Text style = {styles.textStyle}>Getting started with React Native</Text>
    <Text style = {styles.subHeader}>My name is {greeting.name}</Text>
     </View>)
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 20
    }
})

export default ComponentsScreen