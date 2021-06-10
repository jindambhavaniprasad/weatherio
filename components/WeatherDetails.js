import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/index'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function WeatherDetails({ weatherInfo, unitSystem }) {
    const { main: { feels_like, humidity, pressure },
        wind: { speed } } = weatherInfo;
    
    const windSpeed = unitSystem === 'metric' ? `${Math.round(speed)} m/s` :`${Math.round(speed)} miles/hr`
    return (
        <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailsRow}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: colors.BORDER_COLOR, borderBottomWidth: 1, borderBottomColor: colors.BORDER_COLOR }}>
                    <View style={styles.weatherDetailsRow}>
                        <FontAwesome5 name='temperature-low' size={25} color={colors.PRIMARY_COLOR} />
                        <View style={styles.weatherText}>
                            <Text>Feels Like</Text>
                            <Text style={styles.secondaryText}>{feels_like}{unitSystem==='metric'?'°C':'°F'}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ ...styles.weatherDetailsBox, borderBottomWidth: 1, borderBottomColor: colors.BORDER_COLOR }}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name='water' size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.weatherText}>
                            <Text>Humidity</Text>
                            <Text style={styles.secondaryText}>{humidity} %</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.weatherDetailsRow}>
                <View style={{ ...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: colors.BORDER_COLOR }}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name='speedometer' size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.weatherText}>
                            <Text>Pressure</Text>
                            <Text style={styles.secondaryText}>{`${pressure} hPa`}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.weatherDetailsBox}>
                    <View style={styles.weatherDetailsRow}>
                        <MaterialCommunityIcons name='weather-windy' size={25} color={colors.PRIMARY_COLOR} />
                        <View style={styles.weatherText}>
                            <Text>Wind Speed</Text>
                            <Text style={styles.secondaryText}>{windSpeed}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
        margin: 15,
        marginBottom: 50,
        borderWidth: 1,
        borderColor: colors.BORDER_COLOR,
        borderRadius: 10,
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    weatherDetailsBox: {
        padding: 20,
        flex: 1
    },
    weatherText: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        fontFamily: 'gotham-medium'
    },
    secondaryText: {
        color: colors.SECONDARY_COLOR,
        fontWeight: '500',
        fontFamily: 'gotham-bold'
    }
})