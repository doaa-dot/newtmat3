import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenNames from '../route/screenNames';
import { useNavigation } from '@react-navigation/native';
const SearchFilter = ({ data, input, setInput }) => {
    const navigation = useNavigation();
    return (
        <View>
            <FlatList data={data} renderItem={({ item }) => {
                if (input === "") {
                    return (
                        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(ScreenNames.TourGuide, { item })}>
                            <Text style={styles.name}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }
                if (item.name.toLowerCase().includes(input.toLowerCase())) {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.TourGuide, { item })}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }
            }
            }
            />
        </View>
    )
}
export default SearchFilter
const styles = StyleSheet.create({
    name: {
        fontWeight: '600',
        fontSize: 20,
        marginLeft: 13,
        fontWeight: 'bold',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 13,
    }

})