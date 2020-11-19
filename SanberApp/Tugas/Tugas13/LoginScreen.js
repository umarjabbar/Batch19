import React, {Component} from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'


export default class LoginScreen extends Component {
  render() {
    return (
      <>
        <View style={classes.container}>
          <ImageBackground source={require('./assets/bg_sanberApp_login.png')} style={classes.bgImg}>
            <View style={classes.form}>
              <Image source={require('./assets/sanberlogo.png') } style={classes.logoImg}/>
              <Text style={classes.appName}>SanberApp</Text>
              <Text style={classes.appTagline}>Ngoding santai berkualitas</Text>
              <TextInput style={classes.input} placeholder={'Email / username'}/>
              <TextInput style={classes.input} placeholder={'Password'} secureTextEntry={true}/>
              <TouchableOpacity style={classes.forgotPass}>
                <Text style={{color: 'white'}}>Lupa passwod?</Text>
              </TouchableOpacity>
              <TouchableHighlight style={classes.loginBtn}>
                <Text style={{color: 'white'}}>Login</Text>
              </TouchableHighlight>
              <TouchableOpacity style={{marginTop: 12}}>
                <Text style={{color: 'white'}}>Buat akun baru</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
            <Text style={classes.appVer}>SanberApp 1.0</Text>
        </View>
      </>
    )
  }
}

const classes = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5fdff',
  },
 
  bgImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  form: {
    width: 275,
    height: 375,
    marginTop: 32,
    // backgroundColor: 'red',
    alignItems: 'center'
  },

  logoImg: {
    height: 65,
    width: 80
  },

  appName: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#0868C1"
  }, 

  input: {
    backgroundColor: '#DDEFFF',
    width: 275,
    // height: 32,
    paddingTop: 7,
    paddingBottom: 5,
    paddingLeft: 12,
    marginTop: 17
  },

  forgotPass: {
    alignSelf: "flex-start",
    marginTop: 7,
  },

  loginBtn: {
    width: 275,
    backgroundColor:"#185086",
    alignItems: 'center',
    marginTop: 17,
    paddingVertical: 12,
    borderRadius: 7
  },

  appVer: {
    bottom: 0,
    alignSelf: "center",
    position: 'absolute',
    color: 'rgba(0,0,0,.25)',
    marginBottom: 7,
    zIndex: 2,
  }


});