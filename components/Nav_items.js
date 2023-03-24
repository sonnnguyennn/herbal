import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'

export default function Nav_items(props) {
  return (
      <View style={styles.nav_item}>
        <Image source={props.img_icon} style={[styles.icon]}/>
        <Text style={styles.icon_text}>
          {props.text}
        </Text>
      </View>
  )
}
const styles = StyleSheet.create({
nav_item: {
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
  aspectRatio:1,
  height: `100%`,
},
icon_text: {
  font: 'Inter',
  fontSize: 12,
  fontWeight: '500',
  color: 'white',
  marginTop: 6,
},
icon:{
  width: '33%',
  height:`33%`,
}
})
