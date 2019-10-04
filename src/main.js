import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity,Text} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image 
      source ={require('../src/assets/logoinicial.png')}
      style = {styles.logo}
      resizeMode= "contain"
      />

      <TextInput
      style = {styles.input}
      placeholder ="Email" />
      <TextInput
      style = {styles.input}
      placeholder ="Cpf" />

      <TouchableOpacity style = {styles.botao} onPress = {()=> this.props.navigation.navigate('Home')}>
        <Text style ={{color:'#ffffff'}}>
          ENTRAR
        </Text>
        </TouchableOpacity>

    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    paddingTop:150
  },

  logo: {
    width:"90%"
  },

  input: {
    width:298,
   borderColor: 'gray',
    borderWidth: 1,
    marginTop:14,
    fontSize:18,
  },

  botao: {
    width:300,
    backgroundColor:'orange',
    borderBottomLeftRadius:50,
    marginTop:14,
    height:60,
    alignItems:'center',
    justifyContent:'center'
  }
})