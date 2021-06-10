import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location'
import WeatherInfo from './components/WeatherInfo';
import { BASE_URL, ERROR_TEXT, fetchFonts } from './utils/index';
import UnitsPicker from './components/UnitsPicker';
import { colors } from './utils/index'
import Reload from './components/Reload';
import WeatherDetails from './components/WeatherDetails';
import { WEATHER_API_KEY } from './key';

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null);

  const [currentWeather, setCurrentWeather] = useState(null);

  const [font, setFonts] = useState(false);

  const [unitSystem, setUnitSystem] = useState('metric');

  useEffect(() => {
    loadFonts()
    load()
  }, [unitSystem])

  const loadFonts = async () => {
    await fetchFonts();
    setFonts(true);
  }

  const load = async () => {

    setCurrentWeather(null)
    setErrorMessage(null)
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage("Location permission needed")
      } else {
        let location = await Location.getCurrentPositionAsync();
        let { latitude, longitude } = location.coords
        const url = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${WEATHER_API_KEY}`
        const res = await fetch(url);
        const response = await res.json();
        if (res.ok) {
          setCurrentWeather(response)
        } else {
          setErrorMessage(ERROR_TEXT)
        }
      }
    } catch (error) {
      setErrorMessage(ERROR_TEXT)
    }

  }

  if (font && currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.main}>
          <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
          <WeatherInfo currentWeather={currentWeather} units={unitSystem} />
          <Reload load={load} />
          <StatusBar style="auto" />
        </View>
        <WeatherDetails weatherInfo={currentWeather} unitSystem={unitSystem} />
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center',fontFamily:'gotham-medium',lineHeight:30 }}>{errorMessage}</Text>
        <Reload load={load} />
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color={colors.PRIMARY_COLOR} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center'
  },
  main: {
    justifyContent: 'center',
    flex: 1
  }
});
