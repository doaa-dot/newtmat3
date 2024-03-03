import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Send() {
  return (
    <View >
        <Image style={styles.image} source={require('../srs/acecc/sendmm.jpg')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:400,
        height:700
    }
    
})