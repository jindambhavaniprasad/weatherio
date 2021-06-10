import React from 'react'
import { Picker } from '@react-native-community/picker'
import { View, StyleSheet } from 'react-native'

export default function UnitsPicker({ unitSystem, setUnitSystem }) {
    return (
        <View style={styles.picker}>
            <Picker selectedValue={unitSystem} onValueChange={(item) => setUnitSystem(item)} mode='dropdown'>
                <Picker.Item label="°C" value="metric" />
                <Picker.Item label="°F" value="imperial" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    picker:{
        width:100,
        height:60,
        color:'#000',
        position:'absolute',
        top:100,
        right:0
    },
})