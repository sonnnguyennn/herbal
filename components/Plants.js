import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Plants = (props) => {
  return (
    <View style={styles.item_box}>
       <Image source={props.img}style={[styles.image]}/>
       <Text style={styles.item_title}>
          {props.name}
       </Text>
    </View>
  )
}

export default Plants

const styles = StyleSheet.create({
  item_box: {
    alignItems: 'center',
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
  image:{
    width: 100,
    height:100,
    borderRadius: 6,
  },
  item_title: {
    font: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginVertical: 10,
  }
})