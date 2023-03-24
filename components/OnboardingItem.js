import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, useWindowDimensions} from 'react-native'; 
import slides from '../slides';


export default function OnboardingItem({item}) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
        <Image source={item.image} style={[styles.image ,{width: '100%', height: '90%', borderRadius: 10}]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.7,
    // backgroundColor: 'green',
    justifyContent:'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 22,
  },
  image:{
    justifyContent: 'center',
    
  },
});



// {/* <View style={{flex: 0.3}}>
//     <Text style={styles.title}>{item.title}</Text>
//     <Text style={styles.description}>{item.title}</Text>
// </View>

// title:{
//   fontWeight:'800',
//   fontSize: 28,
//   marginBottom: 10,
//   color: 'black',
//   textAlign:'center',
// },
// description: {
//   fontWeight:'300',
//   paddingHorizontal: 64,
//   color: 'black',
//   textAlign:'center',
// } */}
