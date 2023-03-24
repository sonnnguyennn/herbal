import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View, Img } from 'react-native';
import Item_herbal from './components/Item_herbal';
import Onboarding from './components/Onboarding';
import Nav_items from './components/Nav_items';
import HomeScreen from './navigation/screens/HomeScreen';
import Category from './navigation/pages/Culinary';


export default function App() {
  return (
    <View style={styles.main}>
      <HomeScreen/>
      {/* <Category/> */}
    </View>

  );
}

const styles = StyleSheet.create({
});
