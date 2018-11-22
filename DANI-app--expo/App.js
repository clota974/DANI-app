import React from 'react';
import Header from "./components/header.js"
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
        style={{
          flex: 1,
          alignSelf: 'stretch',
          width: undefined,
          height: undefined
        }}
        source={require("./assets/pleurer.jpg")}
		    >

			<Header title="Vaincre la tristesse"/>

        	<View style={styles.bottomView}>
        		<Text>Test</Text>
        	</View>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView:{
 
    width: '100%', 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  }
});
