import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../route/screenNames';
import { creatUser } from '../srs/acecc/api';

export default function Information() {
  const navegtion=useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setMail] = useState('');
  const[eroor,setEror]=useState(false)
  // console.log("fhone",phone)
  const onSubmit=()=>{
    if(!name||!phone||!email){
      Alert.alert("faild")
    }
    else{
      const creatUserBody={
        "name":name,
        "phone":phone,
        "email":email,
      }
      creatUser (creatUserBody).then(res=>{
        navegtion.navigate('send')
      })
    }
  }
  const onLoginPress=()=>{
    if(name.length==0){
      setEror(true)
      return null;
    }
    if(phone.length==0){
      setEror(true)
      return null;
    }
    if(email.length==0){
      setEror (true)
      return null;
    }
    navegtion.navigate(ScreenNames.send)
  }
  return (
    <View >
      <Text style={styles.text}>registrantion</Text>  
      <View>
       <TextInput
      style={styles.input}
      placeholder='name'
      value={name}
      onChangeText={name=>{setName(name)
      if(name.length!=0){
       setEror(false)
      };
      }}
      />   
      <TextInput
     style={styles.input}
      placeholder='e-mail'
      value={email}
      onChangeText={email=>{setMail(email)
      if(email.length!=0){
        setEror(false)
      };
      }}
      />
      <TextInput
      style={styles.input}
      keyboardType='numeric'
      value={phone}
      maxLength={10}
      placeholder='num'
      onChangeText={phone=>{
        setPhone(phone)
          if(phone.length!=0){
            setEror(false)
          }        
      }}
      /> 
      </View>      
      <Button       
      title='send'
      color='red'
      onPress={()=>onLoginPress()}
      />
      {eroor?<Text style={styles.conditiner}>Fill in the data</Text>:null}
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    left: 50,
    top:10
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    margin:50,
    padding: 5,
    width: 200,
    left:40
    
  },
  conditiner:{
    color:'red'
  },
})