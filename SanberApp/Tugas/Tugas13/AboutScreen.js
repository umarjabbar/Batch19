import React, {Component} from 'react';
import { 
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AboutScreen = () =>{
  return (
    <>
      <View style={classes.container}>
        <View style={classes.profile}>
          <Image source={require('./assets/um.jpg')} style={classes.profileImage}/>
          <View style={classes.profileInfo}>
            <Text style={classes.title}>Tentang Saya</Text>
            <Text style={classes.name}>Umar Abdul Jabar</Text>
            <Text style={classes.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora dolorem et deserunt nesciunt ipsa doloremque nobis nisi sit aut repellendus vel, repellat odit ullam adipisci vero distinctio eveniet obcaecati.</Text>
          </View>
        </View>
        <View style={classes.itemContainer}>
          <Text style={classes.title}>Medsosku</Text>
          <View style={classes.linkItem}>
            <View style={classes.item}>
              <Text style={classes.socmedName}>Facebook</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default AboutScreen;

const classes = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
    marginTop: 21,
  },

  profile: {
    flexDirection: 'row',
  },

  profileImage: {
    width: 132,
    height: 240,
    borderBottomRightRadius: 32
  },

  profileInfo: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 7
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },

  name: {
    fontSize: 21,
  },

  desc: {
    marginTop: 2,
    fontSize: 15
  },

  itemContainer: {
    marginHorizontal: 17,
    marginTop: 17
  },

  item: {
    flexDirection: 'row',
    // marginTop: 7
  },

  linkItem: {
    backgroundColor: 'blue',
    height: 72,
    width: 72,
    alignItems: 'center',
    justifyContent: "center"
  },

  socmedName: {
    color: 'white'
  }
})