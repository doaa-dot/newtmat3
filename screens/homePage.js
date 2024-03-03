import { StatusBar, StyleSheet, Text, View, FlatList, SafeAreaView, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenNames from '../route/screenNames';
import SearchFilter from './SearchFilter';
import dataGuids from './dataGuids';
const HomePage = () => {
  const tourGuide = [
    // {
    //   name: 'Acco',
    //   // image: require("../srs/acecc/moataz.png"),
    //   guids: [
    //     {
    //       guidsName: 'moataaz',
    //       image: require('../srs/acecc/moataz.png'),

    //     },
    //     {
    //       guidsName: 'ftcfy',
    //       image: require('../srs/acecc/moataz.png'),
    //     },
    //     {
    //       guidsName: 'hedgh',
    //       image: require('../srs/acecc/moataz.png'),
    //     },
    //     {
    //       guidsName: 'hbsvchsg',
    //       image: require('../srs/acecc/moataz.png'),
    //     },
    //   ]
    // },
    // {
    //   name: 'yafo',
    //   // image: require('../srs/acecc/moataz.png'),
    //   guids: [
    //     {
    //       guidsName: 'lara',
    //       image: require('../srs/acecc/lara.jpeg'),
    //     }
    //   ]
    // },
    // {
    //   name: 'rammle',
    //   // image: require('../srs/acecc/moataz.png'),
    //   guids: [
    //     {
    //       guidsName: 'yosef',
    //       image: require('../srs/acecc/yosef.png'),
    //     }
    //   ]
    // },
    // {
    //   name: 'Nazareth',
    //   // image: require('../srs/acecc/moataz.png'),
    //   guids: [
    //     {
    //       guidsName: 'seven',
    //       image: require('../srs/acecc/seven.jpg'),
    //     }
    //   ]
    // },
    // {
    //   name: 'haifa',
    //   // image: require('../srs/acecc/moataz.png'),
    //   guids: [
    //     {
    //       guidsName: 'alex',
    //       image: require('../srs/acecc/seven.jpg'),
    //     }
    //   ]
    // },
    // {
    //   name: 'lod',
    //   // image: require('../srs/acecc/moataz.png'),
    //   guids: [
    //     {
    //       guidsName: 'alex',
    //       image: require('../srs/acecc/seven.jpg'),
    //     }
    //   ]
    // },
    // {
    //   name: 'Ramallah',
    //   // image: require('../srs/acecc/moataz.png'),
    //   guids: [
    //     {
    //       guidsName: 'alex',
    //       image: require('../srs/acecc/seven.jpg'),
    //     }
    //   ]
    // },
    // {
    //   name: 'Eilat',
    //   // image: require('../srs/acecc/moataz.png'),
    //   guids: [
    //     {
    //       guidsName: 'alex',
    //       image: require('../srs/acecc/seven.jpg'),
    //     }
    //   ]
    // },
    // {
    //   name: 'Dead Sea',
    //   // image: require('../srs/acecc/moataz.png'),
    //   guids: [
    //     {
    //       guidsName: 'alex',
    //       image: require('../srs/acecc/seven.jpg'),
    //     }
    //   ]
    // },
    // {
    //   name: 'alquds',
    //   // image: require('../srs/acecc/moataz.png'),
    //   guids: [
    //     {
    //       guidsName: 'alex',
    //       image: require('../srs/acecc/seven.jpg'),
    //     }
    //   ]
    // },
    // {
    //   name: 'Beersheba',
    //   // image: require('../srs/acecc/moataz.png'),
    //   guids: [
    //     {
    //       guidsName: 'alex',
    //       image: require('../srs/acecc/seven.jpg'),
    //     }
    //   ]
    // },
    // {
    //   name: 'Tiberias',
    //   // image: require('../srs/acecc/moataz.png'),
    //   guids: [
    //     {
    //       guidsName: 'alex',
    //       image: require('../srs/acecc/seven.jpg'),
    //     }
    //   ]
    // },
  ];
  const [input, setInput] = useState("");
  const navigation = useNavigation();
  // const onetourguide = ({ item }) => (
  //   <TouchableOpacity
  //     onPress={() => navigation.navigate(ScreenNames.TourGuide, { item })}
  //   >
  //     <View style={styles.item}>
  //       {/* <View style={styles.avatarContainer}>
  //         <Image source={item.image} style={styles.avatar} />
  //       </View > */}
  //       <Text style={styles.name}>{item.name}</Text>
  //     </View>
  //   </TouchableOpacity>
  // )
  // headerComponit = () => {
  //   // return <Text style={styles.listHeadLine}>search tour guide</Text>
  // }
  // itemSaparator = () => {
  //   return <View style={styles.separator} />
  // }
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }} >
      <TextInput
        value={input} onChangeText={(text) => setInput(text)}
        placeholder='search'
        clearButtonMode='always'
        style={styles.searchBox}
      />
      <SearchFilter data={dataGuids} input={input} setInput={setInput} />
      {/* <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={headerComponit}
        data={dataGuids}
        renderItem={onetourguide}
        ListEmptyComponent={<Text>erooor</Text>}
      /> */}
    </SafeAreaView>
  )
}
export default HomePage
const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc'
  },
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listHeadLine: {
    color: '#333',
    fontSize: 21,
    fontWeight: 'bold',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },
  avatarContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 55,
    width: 89,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 55,
    width: 55,
  },
  name: {
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 13,
    fontWeight: 'bold'
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc'
  },
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 4,
    borderRadius: 15,
  }
})