import React, {useState} from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  const [count, setCount] = useState(0)
  return (
  <View>
    <Text>The current Count is {count}</Text>
    <Button title = 'Increase Count' onPress = {() => setCount(count + 1)}/>
    <Button title = 'Decrease Count' onPress = {() => setCount(count - 1)}/>
    <Text style={styles.text}>My name is Excel and I'm going to be walking you through this course.</Text>
    <Button 
    title = 'Go to components demo'
    onPress={() => navigation.navigate('Components')}/>
    <Button 
    title = 'Go to List Demo'
    onPress = {() => navigation.navigate('List')}/>
    <Button title = 'Go to Color Screen' 
    onPress = {() => navigation.navigate('Color')}/>
    <Button title = 'Go to Square D' 
    onPress = {() => navigation.navigate('Square')}/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default HomeScreen;
