//this page is for recipe complete dish image
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageDetail  from '../components/ImageDetail'

const ImageScreen = () => {
  return (

    <View>
      <ImageDetail
      imageTitle = 'sunset'
      imageSource = {require('../../assets/sunset.jpg')}
      imageScore = {10}
      />
      <ImageDetail
      imageTitle = 'lakeview'
      imageSource = {require('../../assets/lakeview.jpg')}
      imageScore = {6}
      />
      <ImageDetail
      imageTitle = 'lonelytree'
      imageSource = {require('../../assets/lonelytree.jpg')}
      imageScore = {8}
      />
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({})
