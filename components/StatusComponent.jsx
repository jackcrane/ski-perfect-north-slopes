import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const StatusComponent = (props) => {
  const lstyles = StyleSheet.create({
    content:{
      fontSize: 18,
    },
    row: {
      flexDirection: 'row',
    },
    value: {
      fontWeight: 'bold',
    }
  })

  return (
    <View style={lstyles.row}>
      {props.prefix}
      <Text style={lstyles.content}>{props.title}: </Text>
      <Text style={{...lstyles.content, ...lstyles.value, color:props.value ? 'green' : 'red'}}>{props.value ? 'open' : 'closed'}</Text>
    </View>
  )
}

export default StatusComponent;