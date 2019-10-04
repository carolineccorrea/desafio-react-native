import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Home extends Component {
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
        source ={require('../src/assets/img0.png')}
        style = {styles.logo}
        
        />
      </TouchableOpacity>
      <TouchableOpacity style ={styles.touch} >
        <Image 
        source ={require('../src/assets/img1.png')}
        style = {styles.logo}
        
        />
      </TouchableOpacity>

      
      <TouchableOpacity style ={styles.touch} >
        <Image 
        source ={require('../src/assets/img2.png')}
        style = {{width:400,height:190}}
        
        />
      </TouchableOpacity>
      
      <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Game')} >
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style ={styles.game} >
        <Text style ={styles.textoBotao}>
            GAME
        </Text>
        </LinearGradient>
      </TouchableOpacity >
      

     

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
  width:400,height:160
 
},

game: {
  width:401,
  borderWidth: 1,
  height:130,
  borderTopLeftRadius:45,
  backgroundColor:'blue',
  borderColor: '#fff',
  marginTop:-50
},

textoBotao: {
  color:'white',
  textAlign:"center",
  fontSize:45,
  marginTop:35
},

textoImg: {

}
 
})