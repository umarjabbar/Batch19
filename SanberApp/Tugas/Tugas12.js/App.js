import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image, 
  TouchableOpacity,
  ScrollView
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './components/VideoItem';
import Data from './data.json';

export default class YoutubeUi extends Component {
  render() {
    // alert(Data.kind)
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('./images/yt_logo.png')} style={{width: 98, height: 22}}/>
          <View style={styles.navIcons}>
            <TouchableOpacity><Icon style={styles.iconBtn} name="search" size={27}/></TouchableOpacity>
            <TouchableOpacity><Icon style={styles.iconBtn} name="account-circle" size={27}/></TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <VideoItem video={Data.items[1]}/>
            <VideoItem video={Data.items[3]}/>
            <VideoItem video={Data.items[2]}/>
            <VideoItem video={Data.items[4]}/>
          </ScrollView>
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={27}/>
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={27}/>
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={27}/>
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={27}/>
            <Text style={styles.tabTitle}>Librabry</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 56,
    backgroundColor: 'white',
    elevation: 7,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navIcons: {
    flexDirection: 'row'
  },
  iconBtn: {
    marginLeft: 17
  },
  body: {
    flex: 1
  },
  tabBar: {
    backgroundColor: "white",
    height: 62,
    elevation: 12,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitle: {
    fontSize: 11,
  }

});
