//this is my recipe main page show different section of recipe, oNPress to go list of recipe page
//note This is my Components Screen
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ComponentsScreen = () => {
  const name = 'CJ Ho';
	return (
		<View>
			<Text style={styles.textStyle}>
        Getting started with React Native!
        </Text>
      <Text style={styles.subHeaderStyle}>
        My name is {name}
        </Text>
		</View>
	);
};

export default ComponentsScreen;

const styles = StyleSheet.create({
	textStyle: {
    fontSize: 40,
    color: 'red',
    backgroundColor: 'lightyellow'
  },
  subHeaderStyle: {
    fontSize: 20,
    color: 'blue',
    backgroundColor: 'lightgreen'
  }
});
