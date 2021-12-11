import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

const styles = StyleSheet.create({
  windsock: {
    transform: [{rotate: '45deg'}],
    width: 30,
    height: 30,
    fontSize: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherItems: {
    flexDirection: 'row',
  },
  weatherItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#00E8FC',
    borderWidth: 4,
    borderRadius: 10,
    borderStyle: 'solid',
    width: 100,
    height: 100,
  },
  weatherItemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})

const Weather = (props) => {
  const [weather, setWeather] = useState({});
  const [weatherReady, setWeatherReady] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=75a3934f2c424c6dab5164017213011&q=47025&aqi=no`);
      const json = await response.json();
      setWeather(json);
      setWeatherReady(true);
      // console.log(json)
    })()
  }, [])

  return (
    <View style={styles.weatherItems}>
      <View style={styles.weatherItem}>
        <Text style={styles.weatherItemTitle}>Wind</Text>
        {weatherReady ? (
          <>
            <Text style={{...styles.windsock, transform: [{rotate: `${weather?.current?.wind_degree - 90}deg`}]}}>➤</Text>
            <Text>{weather?.current?.wind_mph} mph</Text>
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
      <View style={{...styles.weatherItem, marginHorizontal: 10}}>
        <Text adjustsFontSizeToFit={true} style={styles.weatherItemTitle}>Temp.</Text>
        {weatherReady ? (
          <>
            <Text style={{fontSize: 30}}>{weather?.current?.temp_f.toFixed(0)}℉</Text>
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
      <View style={styles.weatherItem}>
        <Text style={styles.weatherItemTitle}>Condition</Text>
        {weatherReady ? (
          <>
            <Text>{weather?.current?.condition.text}</Text>
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    </View>
  )
}

export default Weather;