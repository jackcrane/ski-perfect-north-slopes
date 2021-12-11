import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import WebView from 'react-native-webview';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  wv: {
    height: 250,
    
  }
})

const runFirst = `
  document.querySelectorAll('header').forEach(element => element.remove())
  document.querySelectorAll('h1').forEach(element => element.remove())
  document.querySelectorAll('a').forEach(el => el.remove())
  document.querySelectorAll('p').forEach(el => el.remove())
  document.querySelectorAll('footer').forEach(el => el.remove())
  document.querySelectorAll('#divSatisfiChat').forEach(el => el.remove())
  setTimeout(() => {
    document.querySelectorAll('#divSatisfiChat').forEach(el => el.remove())
  }, 500)
  document.querySelectorAll('.clearfix').forEach(el => el.remove())
  document.querySelectorAll('div[role=dialog]').forEach(el => el.remove())
  document.querySelector('.content_inner').style.margin = '0px'
  document.querySelector('.content_inner').style.width = '100%'
  document.querySelector('#webcam_holder').style.maxWidth = '100%'
  document.querySelector('body').style.overflow = 'hidden'
  true;
`;

const SnowCams = (props) => {

  // const [webview, setWebview] = useState(null);
  const webview = useRef(null);
  const iframePressable = useState(false);

  return (
    <>
      {
        props.camID ? (
          <View>
            <WebView 
              ref={webview}
              style={styles.wv} 
              source={{ uri: "https://perfectnorth.com/snow-cams?view=" + props.camID }}
              onMessage={(m) => console.log(m)} 
              injectedJavaScript={runFirst} 
              scrollEnabled={false}
              allowsInlineMediaPlayback={true}
              onNavigationStateChange={() => webview.current.goBack()}
            />
            {
              props.showLinks && (
                <TouchableOpacity onPress={props.nav.navigate('Snow Cams')}>
                  <Text>Click to view the rest of the snow cams</Text>
                </TouchableOpacity>
              )
            }
          </View>
        ) : (
          <View>

            <WebView 
              ref={webview}
              style={styles.wv} 
              source={{ uri: "https://perfectnorth.com/snow-cams" }}
              onMessage={(m) => console.log(m)} 
              injectedJavaScript={runFirst} 
              scrollEnabled={false}
              allowsInlineMediaPlayback={true}
              onNavigationStateChange={() => webview.current.goBack()}
            />
            {
              props.showLinks && (
                <TouchableOpacity onPress={() => props.nav.navigate('Snow Cams')}>
                  <Text>Click to view the rest of the snow cams</Text>
                </TouchableOpacity>
              )
            }
          </View>
        )
      }
    </>
  )
}

export default SnowCams;