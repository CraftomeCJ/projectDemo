import { StyleSheet, Text, View, Image, ImageRequireSource } from 'react-native'
import React from 'react'

const ImageDetail = ({
  imageSource,
  imageTitle,
  imageScore
}: {
  imageSource: ImageRequireSource,
  imageTitle: string,
  imageScore: number
}) => {

  return (
    <View>
      <Image
      source={imageSource}
      style={styles.styleImage}
      />
      <Text style={styles.styleText}>{imageTitle}</Text>
      <Text style={styles.styleText}>Image Score - {imageScore}</Text>
    </View>
  )
}

export default ImageDetail

const styles = StyleSheet.create({
  styleImage: {
    //justifyContent: 'center',
    //alignItems: 'center',
    //paddingLeft: 10,
    width: 380,
    height: 170,
    marginLeft: 7,
    borderRadius: 15,
  },
  styleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'blue',
    padding: 3,
    textAlign: 'center',
  }
})
