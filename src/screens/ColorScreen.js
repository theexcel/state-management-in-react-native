import React, {useState} from 'react';
import {Text, Button, View, StyleSheet} from 'react-native'

const ColorScreen = () => {
    const [color, setColor] = useState([])


    return (
        <View>
            <Button 
            title='Add a Color' 
            onPress = {() => setColor([...color, randomRgb()])}/>
            <View style = {{height: 100, width: 100, backgroundColor: randomRgb()}}/>
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 70
    }
})

export default ColorScreen