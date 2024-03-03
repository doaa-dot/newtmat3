import { Image, StyleSheet, Text, View, TouchableOpacity, style, Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import ScreenNames from '../route/screenNames'
import { useNavigation } from '@react-navigation/native'
const ScreenStart = () => {
    const navigation=useNavigation();
    return (
        <View style={styles.photo}>
            <Image source={require('../srs/acecc/images.jpeg')} />
            <View style={styles.boox}>
                <Text style={styles.textboox}>Tamata3</Text>
                <Text style={styles.find}>Find a tour guide </Text>
                <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.homePage)} >
                    <Text style={styles.click}>🔎</Text>
                </TouchableOpacity>
                <Text style={styles.doyou}>{'Do you want to become'} {'\n'}
                    {'a tour guide?Connect with us'}
                </Text> 
                
                <Image source={require('../srs/acecc/whatscolor.png')}
                    style={styles.phone}
                />
                <Image source={require('../srs/acecc/colorphone.png')}
                    style={styles.phone}
                />
                <TouchableOpacity  style={styles.regester} onPress={()=>navigation.navigate(ScreenNames.Information)}>
                    <Text style={styles.textregesete}>register your information</Text>
                </TouchableOpacity>
              
                <Text style={styles.numPhone}>{'+972505462546'}{'\n'}{'\n'}{'05562488242'}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    photo: {
        backgroundColor: 'white',
        flex: 1
    },
    boox: {
        backgroundColor: '#6495ed',
        width: "100%",
        height: "80%",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    textboox: {
        fontSize: 50,
        left: 100,
        color: '#ffff',
        // fontWeight: 'bold ',
        textDecorationLine: 'underline',
    },
    find: {
        fontSize: 25,
        left: 120,
        top: 50,
        color: '#fff',
        fontWeight: '800'
    },
    click: {
        color: 'black',
        fontSize: 25,
        bottom: -20,
        left: 80,
    },
    doyou: {
        fontSize: 20,
        top: 150,
        color: '#fff',
        left: 10,
        fontWeight: '600',
        fontWeight:'bold',
        

    },
    phone: {
        height: 50,
        width: 50,
        top: 230,
        right:5
    },
    numPhone: {
        fontSize: 20,
        top: 120,
        left: 40,
        color: '#fff',

       
    },
    regester:{
        top:80,
        left:115,       
    },
    textregesete:{
        color:"#fff",
        fontSize:18,
        right:100, 
    }
})
export default ScreenStart;