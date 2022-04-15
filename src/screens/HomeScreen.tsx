//this is going to be my recipe homepage onPress to go to recipe main page
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>
        HomeScreen
      </Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'yellow',
    backgroundColor: 'lightblue',
  },
})
