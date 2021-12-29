import * as React from 'react';
import { View, Linking, StatusBar, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';import { NavigationContainer } from '@react-navigation/native';
import { CustomTabs } from 'react-native-custom-tabs';

import Home from './components/Home';
import SnowReport from './components/SnowReport';
import WebView from 'react-native-webview';
import Lesson from './components/Lesson';
import Food from './components/Food';
import SnowCams from './components/SnowCamsScreen';
// import { StatusBar } from 'expo-status-bar';
// import Notifs from './components/Notifs';

function HomeScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" /> 
      <Home nav={navigation} />
    </>
  );
}

function SnowReportScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" /> 
      <SnowReport nav={navigation} />
    </>
  );
}

function BrowserScreen({ navigation, route }) {
  return(
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: route.params.url }}
          style={{ flex: 1 }}
        />
      </View>
    </>
  )
}

function LessonScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Lesson nav={navigation} />
    </>
  );
}

function FoodScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Food nav={navigation} />
    </>
  );
}

function SnowCamsScreen({ navigation }){
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SnowCams nav={navigation} />
    </>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <Image source={require('./assets/pns-logo.png')} style={{width: 270 * .7, resizeMode: 'cover', height: 150 * .7, padding: 30, marginBottom: 70, alignSelf: 'center'}} />

          <DrawerItemList {...props} />

          <DrawerItem label="Buy tickets" onPress={() => Linking.openURL('https://www.perfectnorth.com/?keyword=Lift%20Tickets')} />
          <DrawerItem label="COVID-19 Information" onPress={() => Linking.openURL('https://www.perfectnorth.com/covid-19-information')} />
          <DrawerItem label="✚ Call Office or Ski Patrol" onPress={() => Linking.openURL(`tel:18125373754`)} style={{
            backgroundColor: 'red',
          }} labelStyle={{
            color: 'white',
          }} />
        </View>
        <View>
          <DrawerItem label="App created by Jack Crane" onPress={() => Linking.openURL('https://jackcrane.rocks?ref=pns-app')} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Drawer.Screen name="Snow Report" component={SnowReportScreen} />
        <Drawer.Screen name="Snow Cams" component={SnowCamsScreen} />
        <Drawer.Screen name="Lessons" component={LessonScreen} />
        <Drawer.Screen name="Food" component={FoodScreen} />
        {/* <Drawer.Screen name="Notifications" component={Notifs} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}