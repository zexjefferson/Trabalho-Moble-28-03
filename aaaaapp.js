import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const um = require('./img/faceUm.png')
const dois = require('./img/faceDois.png')
const tres = require('./img/faceTres.png')
const quatro = require('./img/faceQuatro.png')
const cinco = require('./img/faceCinco.png')
const seis = require('./img/faceSeis.png')

export default class App extends Component{
  state = {
    valor: 1,
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text} >{um}</Text>

      <Button title='Rodar'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
