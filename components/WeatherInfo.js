import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { colors } from '../utils';

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

const WeatherInfo = ({ currentWeather, units }) => {
    const { main: { temp },
        weather: [details],
        name, } = currentWeather;
    const { icon, main, description } = details;
    const url = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
        <View style={styles.info}>
            <Text style={styles.place}>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri: url }}></Image>
            <Text style={styles.temp}>{temp}{units==='metric'?'°C':'°F'}</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.main}>{main}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        alignItems: 'center',
    },
    place:{
        fontFamily:'gotham-bold',
        fontSize:20
    },
    weatherIcon: {
        height: 100,
        width: 100
    },
    weatherDescription: {
        fontFamily:'gotham-book',
        textTransform: 'uppercase',
    },
    temp: {
        fontSize: 40,
        fontFamily:'gotham-bold',
        color: PRIMARY_COLOR,
        marginBottom:20
    },
    main: {
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '500',
        fontFamily:'gotham-medium',
        marginTop: 20
    }
})
export default WeatherInfo;
