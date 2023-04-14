
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput
} from 'react-native';
import React from 'react';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {

  render(){

    return (
      <View style={styles.container}>

        <Text style={[styles.largeText, styles.textStyle]}>São Paulo</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Nublado</Text>
        <Text style={[styles.largeText, styles.textStyle]}>24º</Text>
        

        {/* <TextInput
          autoCorrect={false}
          placeholder="Digite a sua cidade"
          placeholderTextColor="black"
          style={styles.TextInput}

        /> */}

        <SearchInput placeholder="Digite sua cidade"/>
  
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    textAlign: 'center', 
    width: '90%',
    backgroundColor:'#ffc300cc',
    borderRadius: 100,
    borderColor: 'black',
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    height: 40,

    
  },
  textStyle: {

    textAlign:'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize:44,
  },
  smallText : {
    fontSize: 18,
  },

});
