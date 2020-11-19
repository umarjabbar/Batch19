import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YoutubeUi from './Tugas/Tugas12.js/App';
import ToggleIndex from './Latihan/week3-3/index';
import LoginScreen from './Tugas/Tugas13/LoginScreen'
import AboutScreen from './Tugas/Tugas13/AboutScreen'
export default function App() {
  return (
    <>
      {/* <YoutubeUi></YoutubeUi> */}
      {/* <ToggleIndex /> */}
      {/* <LoginScreen/> */}
      <AboutScreen/>
    </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
