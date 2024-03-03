import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenNames from './screenNames';
import HomePage from '../screens/homePage';
import ScreenStart from '../screens/screenStart';
import Tourguide from '../screens/TourGuide';
import Information from '../screens/information';
import send from '../screens/send';
const MainNavegetor = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ScreenNames.screenStart} component={ScreenStart} options={{ headerShown: false }} />
                <Stack.Screen name={ScreenNames.homePage} component={HomePage} />
                <Stack.Screen name={ScreenNames.TourGuide} component={Tourguide} />
                <Stack.Screen name={ScreenNames.Information}component={Information}/>
                <Stack.Screen name={ScreenNames.send}component={send}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MainNavegetor; 