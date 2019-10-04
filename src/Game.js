import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

      <TouchableOpacity style ={styles.touch} >
        <Image 
        source ={require('../src/assets/ranking.jpg')}
        style = {styles.logo}
        
        />
      </TouchableOpacity>
      <TouchableOpacity style ={styles.touch} >
        <Image 
        source ={require('../src/assets/controle.jpg')}
        style = {{width:400,height:260}}
        
        />
      </TouchableOpacity>


      <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Home')}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style ={styles.voltar} >
        <Text style ={styles.textoBotao}>
             VOLTAR
        </Text>
        </LinearGradient>
        </TouchableOpacity>
      

      
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"column",
    alignItems:"center"
    
  },


logo: {
  width:400,height:230
 
},

voltar: {
  width:401,
  borderWidth: 1,
  height:140,
  borderTopLeftRadius:45,
  backgroundColor:'blue',
  borderColor: '#fff',
  marginTop:-35
},


textoBotao: {
    color:'white',
    textAlign:"center",
    fontSize:45,
    marginTop:35

},

 
})