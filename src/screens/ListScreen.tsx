//this will be one of the many recipe page which need listScreen with table to list ingredients & cooking directions and 4 image carousel
import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const ListScreen = () => {
  const ingredientsList = [
    { name: 'Sugar', amount: '1 cup' },
    { name: 'Baking Powder', amount: '1/2 cup' },
    { name: 'Salt', amount: '1/3 cup' },
    { name: 'Milk', amount: '1/4 cup' },
    { name: 'Flour', amount: '2 cups' },
    { name: 'Eggs', amount: '2' },
    { name: 'Butter', amount: '1/2 cup' },
    { name: 'Vanilla Extract', amount: '1/2 tsp' },
    { name: 'Baking Soda', amount: '1/4 tsp' },
    { name: 'Chocolate Chips', amount: '1/4 cup' },
    { name: 'Cocoa Powder', amount: '1/4 cup' },
    { name: 'Almonds', amount: '1/4 cup' },
    { name: 'Walnuts', amount: '1/4 cup' },
    { name: 'Cinnamon', amount: '1/8 tsp' },
    { name: 'Cloves', amount: '1/8 tsp' },
    { name: 'Cocoa', amount: '1/8 tsp' },
    { name: 'Coffee', amount: '1/8 tsp' },
  ]

  return (
    <FlatList
    //horizontal
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    keyExtractor={(ingredient) => ingredient.name}
    data={ingredientsList}
    renderItem={({item}) => {
      return (
      <Text style={styles.textStyle}>
        {item.name} {item.amount}
      </Text>
      )
    }}

    />
  )
}

export default ListScreen

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    fontSize: 20,
    color: 'red',
    backgroundColor: 'lightyellow'
  }
})
