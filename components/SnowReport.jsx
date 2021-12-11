import React, { useState, useEffect } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView, Text, View, StyleSheet } from 'react-native';
import AnnotatedMap from './AnnotatedMap';
import styles from './Styles';
import StatusComponent from './StatusComponent';

const SnowReport = (props) => {
  const [ snowReport, setSnowReport ] = useState({});
  const [ requestNewSnowReport, setRequestNewSnowReport ] = useState(0);

  const lstyles = StyleSheet.create({
    group: {
      paddingVertical: 20,
      borderBottomColor: 'lightgrey',
      borderStyle: 'solid',
      borderBottomWidth: 2
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    content:{
      fontSize: 18,
    },
    row: {
      flexDirection: 'row',
    },
    value: {
      fontWeight: 'bold',
    },
    prefix: {
      fontSize: 20
    }
  });

  // console.log('Hello World')

  useEffect(() => {
    console.log('Requesting new snow report');
    (async () => {
      console.log('requesting snow report...');
      const response = await fetch('https://perfect-north-backend.jackcrane.rocks/');
      const json = await response.json();

      setSnowReport(json);
    })()
  }, [requestNewSnowReport]);

  return (
    <ScrollView scrollIndicatorInsets={{ right: 1 }} refreshControl={
      <RefreshControl refreshing={false} onRefresh={() => setRequestNewSnowReport(requestNewSnowReport + 1)} />
    } refreshing style={styles.TBShown_container}>
        {snowReport.comments ? (
          <>
            <View style={lstyles.group}>
              <AnnotatedMap snowReport={snowReport} />
            </View>
            <View style={lstyles.group}>
              <Text style={lstyles.title}>General Comments</Text>
              <Text style={lstyles.content}>{snowReport.comments}</Text>
            </View>
            <View style={lstyles.group}>
              <Text style={lstyles.title}>Snow</Text>
              <View style={lstyles.row}>
                <Text style={lstyles.content}>New snow in the last 24 hours: </Text>
                <Text style={{...lstyles.content, ...lstyles.value}}>{snowReport.current_conditions.new_snow_24_hrs}"</Text>
              </View>
              <View style={lstyles.row}>
                <Text style={lstyles.content}>New snow in the last 7 days: </Text>
                <Text style={{...lstyles.content, ...lstyles.value}}>{snowReport.current_conditions.new_snow_7_days}"</Text>
              </View>
              <View style={lstyles.row}>
                <Text style={lstyles.content}>Snow Base: </Text>
                <Text style={{...lstyles.content, ...lstyles.value}}>{snowReport.current_conditions.snow_base}</Text>
              </View>
            </View>
            <View style={lstyles.group}>
              <Text style={lstyles.title}>Lift Access</Text>
              <View style={lstyles.row}>
                <Text style={lstyles.content}>Open lifts count: </Text>
                <Text style={{...lstyles.content, ...lstyles.value}}>{snowReport.slope_access.open_lifts_count}</Text>
                <Text style={lstyles.content}> of </Text>
                <Text style={{...lstyles.content, ...lstyles.value}}>{snowReport.slope_access.total_lifts_count}</Text>
              </View>
              <StatusComponent title="Green Chairlift" value={snowReport.chair_lifts.green_chair} />
              <StatusComponent title="Red Chairlift" value={snowReport.chair_lifts.red_chair} />
              <StatusComponent title="Blue Chairlift" value={snowReport.chair_lifts.blue_chair} />
              <StatusComponent title="Orange Chairlift" value={snowReport.chair_lifts.orange_chair} />
              <StatusComponent title="White Chairlift" value={snowReport.chair_lifts.white_chair} />
            </View>
            <View style={lstyles.group}>
              <Text style={lstyles.title}>Slopes</Text>
              {
                Object.entries(snowReport.trail_status).map(([trail, content], index) => (
                  <StatusComponent key={index} prefix={
                    <Text style={{...lstyles.prefix, 
                      color: content.difficulty.code === 'gc' ? 'green' :
                      content.difficulty.code === 'bs' ? 'blue' :
                      content.difficulty.code === 'so' ? 'orange' :
                      content.difficulty.code === 'bsbd' ? 'black' :
                      content.difficulty.code === 'bd' ? 'black' :
                      content.difficulty.code === 'dbd' ? 'black' : ''
                    }}>
                      {
                        content.difficulty.code === 'gc' ? '●' :
                        content.difficulty.code === 'bs' ? '■' :
                        content.difficulty.code === 'so' ? '●' :
                        content.difficulty.code === 'bsbd' ? '■' :
                        content.difficulty.code === 'bd' ? '⬥' :
                        content.difficulty.code === 'dbd' ? '⬥⬥' : ''
                      }
                    </Text>
                  } title={trail} value={content.open} />
                ))
              }
            </View>
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
    </ScrollView>
  )
}

export default SnowReport;