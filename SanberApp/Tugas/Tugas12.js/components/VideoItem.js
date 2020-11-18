import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native';


export default class VideoItem extends Component {
  render () {
    let video = this.props.video;
    // alert(video.id)
    return (
        <View style={styles.container}>
          <Image source={{uri: video.snippet.thumbnails.medium.url}} style={{height: 200}}/>
          <View style={styles.desContainer}>
            <Image source={{uri: 'https://randomuser.me/api/portraits/men/3.jpg'}} style={{height: 50, width: 50, borderRadius: 25}}/>
            <View style={styles.videoDetail}>
              <Text style={styles.videoTitle}>{video.snippet.title}</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  desContainer: {
    flexDirection: 'row',
    paddingTop: 17
  },
  videoTitle: {
    fontSize: 16,
    paddingLeft: 12
  },
  videoDetail: {
    width: 272

  }
}) 