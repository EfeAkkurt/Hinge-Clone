import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import WebView from 'react-native-webview';

const HelpCenterScreen = () => {
  const {url} = useLocalSearchParams<{url:
    string}>();
  
  return (
    <WebView 
    source={{uri: url}}
    />
  );
};

export default HelpCenterScreen

const styles = StyleSheet.create({})