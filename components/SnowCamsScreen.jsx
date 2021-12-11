import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

import styles from './Styles';
import SnowCams from './SnowCams';

const SnowCamsScreen = () => {

  const lstyles = StyleSheet.create({
    price:{
      paddingVertical: 10,
      fontSize: 35,
      color: 'green',
      fontWeight: 'bold',
      // paddingRight: 10
      width: '20%'
    },
    pricecontainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    pricedesc: {
      fontSize: 20,
      marginRight: 10,
      width: '70%'
    },
    linkscontainer: {
      paddingTop: 30,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    linktext:{
      fontSize: 18,
    },
    link: {
      fontSize: 18,
      color: '#d55e2d',
      textDecorationLine: 'underline',
    }
  })

  const [ scrollPosition, setScrollPosition ] = useState(0);

  return (
    <>
      <ScrollView style={styles.homeContainer} scrollIndicatorInsets={{ right: 1 }} onScroll={(e) => e.nativeEvent.contentOffset.y >= 0 && setScrollPosition(e.nativeEvent.contentOffset.y)} scrollEventThrottle={16} >
        <Image source={require('../assets/red-chair-hero.jpeg')} style={{height: (300 - (scrollPosition * 1)), maxHeight: 300, ...styles.heroImage, zIndex: 1}} />
        <Text style={{marginTop: -80, zIndex: 2, fontSize: 70, color: 'white', textShadowColor: 'black', textShadowRadius: 6}}>Snow Cams</Text>
        <View style={{marginHorizontal:0}}>
          <View>
            <Text style={styles.title}>Area Cam</Text>
            <SnowCams camID='5' />
            <Text style={styles.title}>Front of Lodge cam</Text>
            <SnowCams camID='2' />
            <Text style={styles.title}>Snow tubing cam</Text>
            <SnowCams camID='3' />
          </View>
        </View>
        <Text>{'\n\n\n\n\n\n\n\n\n\n\n'}</Text>
      </ScrollView>
    </>
  )
}

export default SnowCamsScreen;