import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import data from './dataGuids';
import dataGuids from './dataGuids';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../route/screenNames';
const Tourguide = ({ route }) => {
  const navegtion = useNavigation();
  const { item } = route.params;
  // console.log('====================================');
  //  console.log(item);
  // console.log('====================================');
  const renderGuide = () => { 
    const guids = item.guids
    return (
      guids.map((item, i) =>     
        <View key={i}>
           <Text style={styles.nameguide}>{ item.guidsName}</Text>           
          <Image style={styles.imageGuide} source={ item.image} />     
        </View>       
      )    
    )
  }
  return (
    <View >
      {/* <Text>{item.name}</Text> */}
      {/* {renderGuide()} */}
      <FlatList      
        data={dataGuids}
        renderItem={renderGuide}
        ListEmptyComponent={<Text>erooor</Text>} />
    </View>
  )
}
export default Tourguide
const styles = StyleSheet.create({
  imageGuide: {
    width: 200,
    height: 200,
    borderRadius: 100,
    left: 100,
  },
  nameguide: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  shreh: {
    fontSize: 50,
    color: '#000',
  },
  listsHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbeer: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})