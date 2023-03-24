import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import Plants from '../../components/Plants';



const Category = () => {
  return (
    <View style={styles.container}>
        <View style={styles.search_wrap}>
            <TextInput style={styles.search} placeholder="What are you looking for?" />
        </View>
        <View style={styles.text_wrap}>
            <View style={styles.text_row}>
                <Text style={styles.culinary}>Culninary</Text>
                <Text style={styles.plants_num}>74 loài</Text>
            </View>
        </View>
        <View style={styles.wrap_content}>
          <Plants name="Ajwain" img={require('../../assets/plants/image1.png')}/>
          <Plants name="Ajwain" img={require('../../assets/plants/image1.png')}/>
          <Plants name="Ajwain" img={require('../../assets/plants/image1.png')}/>
          <Plants name="Ajwain" img={require('../../assets/plants/image1.png')}/>
          <Plants name="Ajwain" img={require('../../assets/plants/image1.png')}/>
          <Plants name="Ajwain" img={require('../../assets/plants/image1.png')}/>
        </View>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    height: `100%`,
    width: `100%`,
    alignItems: 'center',
  },
  search_wrap: {
    width: `100%`,
    height: `10%`,
    backgroundColor: '#1C7C27',
    alignItems: 'center',
    position: 'relative',
    zIndex: 100,
},
search: {
  width: `90%`,
  height: 55,
  backgroundColor: 'white',
  borderRadius: 6,
  marginTop: `11%`,
  // fontSize: 14,
  alignItems: 'center',
  textAlign:'center',
  color:'grey',
},
  text_wrap:{
    width: `100%`,
    height: `24%`,
    backgroundColor: '#1F5F27',
    alignItems: 'center',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
},
  text_row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: `90%`,
    marginTop: 50,
    // backgroundColor:'lightblue',
},
  culinary:{
    font: 'Inter',
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight:'500',
},  
  plants_num:{
    font: 'Inter',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight:'400',
},
  wrap_content:{
    width: `90%`,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
})