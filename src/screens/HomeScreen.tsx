//this is going to be my recipe homepage onPress to go to recipe main page
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

//temp solve the Binding element 'navigation' implicitly has an 'any' type.ts issue, best approach is here ==>
//https://stackoverflow.com/questions/63132548/react-navigation-5-error-binding-element-navigation-implicitly-has-an-any-type
const HomeScreen = ({navigation}: {navigation: any}) => {

  return (
    <View>
      <Text style={styles.styleHeader}>
        Howdy!! This is my Home Screen
      </Text>

      <Button
      title="Go to Component Demo"
      onPress={() => navigation.navigate('Components')}
      />

      <Button
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
      />

      <Button
      title="Go to Image Demo"
      onPress={() => navigation.navigate('Image')}
      />

      <Button
      title="Go to Table Demo"
      onPress={() => navigation.navigate('Table')}
      />

      <Button
      title="Go to Another List Demo"
      onPress={() => navigation.navigate('AnotherList')}
      />

      <Button
      title="Go to Grid View Demo"
      onPress={() => navigation.navigate('GridView')}
      />

      <TouchableOpacity
      onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.styleMain}>
          Go to Counter Demo
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  styleHeader: {
    marginVertical: 20,
    fontSize: 40,
    color: 'yellow',
    backgroundColor: 'lightblue',
  },
  styleTouch: {
    marginVertical: 15,
    fontSize: 25,
    color: 'blue',
    backgroundColor: 'lightyellow',
  },
  styleMain: {
    marginVertical: 10,
    fontSize: 20,
    color: 'orange',
    backgroundColor: 'lightpink'
  }
})
