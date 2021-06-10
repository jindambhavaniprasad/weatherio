import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils';

export default function Reload({load}) {
    const iconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'
    return (
        <View style={styles.reloadIcon}>
            <Ionicons onPress={load} name={iconName} size={24} color={colors.PRIMARY_COLOR} />
        </View>
    )
}
const styles= StyleSheet.create({
    reloadIcon:{
        position:'absolute',
        right:20,
        top:274,
    }
})

