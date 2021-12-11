import React, { useEffect, useState } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';

import AutoHeightImage from 'react-native-auto-height-image';

const localstyles = StyleSheet.create({
  cardBgParent:{
    width: '100%',
  },
  cardBg: {
    width: 30,
    height: 250,
    backgroundColor: '#5AD2F4',
  }
})

const ExtendedImage = (props) => {
  const [ wrapperWidth, setWrapperWidth ] = useState(0)
  const [ imageLoaded, setImageLoaded ] = useState(false)

  useEffect(() => {
    console.log(imageLoaded)
  }, [imageLoaded])

  return (
    <View
      style={{ display: 'flex', flexDirection: 'row' }}
      onLayout={event => setWrapperWidth(event.nativeEvent.layout.width)}
    >
      <View>
        <AutoHeightImage
          width={wrapperWidth}
          source={props.src}
          maxHeight={600}
          onLoad={() => setImageLoaded(true)}
        />
        <Text>{imageLoaded}</Text>
      </View>
    </View>
  )
}

export default ExtendedImage