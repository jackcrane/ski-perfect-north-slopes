import React, { useState } from 'react';
import { ScrollView, Text, Image, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import styles from './Styles';

const Lesson = (props) => {

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
        <Image source={require('../assets/lesson-hero.jpeg')} style={{height: (400 - (scrollPosition * 1)), ...styles.heroImage, zIndex: 1}} />
        <Text style={{marginTop: -150, zIndex: 2, fontSize: 70, color: 'white', textShadowColor: 'black', textShadowRadius: 6}}>Lessons at Perfect North</Text>
        <View style={{marginHorizontal:0}}>
          <View>
            <Text style={styles.title}>About Lessons</Text>
            <Text style={styles.content}>
              Skiing and snowboarding are all about having fun!  That is why we have a great Snow Sports School Staff whose focus is to help you have fun on the slopes.  Whether you are new to the sport or are an experienced skier/snowboarder, we have trained instructors who can take you to the next level. 
              {'\n\n'}
              Please review the descriptions of our lessons below and stop by the Snow Sports School desk to learn more and purchase a lesson.
              <Text style={{fontWeight: 'bold'}}>Valid Lift Tickets and Equipment are required for lessons.</Text>
            </Text>
            <View style={lstyles.linkscontainer}>
              <Text style={lstyles.linktext}>Learn more about </Text>
              <TouchableOpacity onPress={() => {Linking.openURL('https://perfectnorth.com/childrens-lessons')}}>
                <Text style={lstyles.link}>Children's Lessons</Text>
              </TouchableOpacity>
              <Text style={lstyles.linktext}>, </Text>
              <TouchableOpacity onPress={() => {Linking.openURL('https://perfectnorth.com/adult-lesson-series')}}>
                <Text style={lstyles.link}>Adult Lessons</Text>
              </TouchableOpacity>
              <Text style={lstyles.linktext}>, </Text>
              <TouchableOpacity onPress={() => {Linking.openURL('https://perfectnorth.com/adaptive')}}>
                <Text style={lstyles.link}>Adaptive Lessons</Text>
              </TouchableOpacity>
              <Text style={lstyles.linktext}>, or </Text>
              <TouchableOpacity onPress={() => {Linking.openURL('https://perfectnorth.com/racing')}}>
                <Text style={lstyles.link}>Racing</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Introductory Group Lesson</Text>
            <View style={lstyles.pricecontainer}>
              <Text style={lstyles.price}>$10</Text>
              <Text style={lstyles.pricedesc}>/person, ages 9+</Text>
            </View>
            <Text style={styles.content}>
              If you are new to skiing/snowboarding, we want to give you tips to get started out right and to have a good first experience on the snow. Our goal is to help you discover the fun of sliding on the snow, learning to control your speed and making those first turns through terrain-based teaching techniques. Lessons are 50 minutes long and taught on the hour, from 10AM-8PM daily and 10AM-10PM during late night sessions, unless otherwise stated.
              {'\n\n'}
              Purchase this lesson at the Lesson Information Window in the West Lodge and bring your lesson ticket to the Learn to Turn Area (on the snow, west of the West Lodge) at the top of the hour.
              {'\n\n'}
              All lessons are subject to instructor availability.  
            </Text>
          </View>
          <View>
            <Text style={styles.title}>Next Step Lesson</Text>
            <View style={lstyles.pricecontainer}>
              <Text style={lstyles.price}>$20</Text>
              <Text style={lstyles.pricedesc}>/person, ages 9+</Text>
            </View>
            <Text style={styles.content}>
              The Next Step Lesson is the place to start enhancing your skills or to refresh your memory after some time away from the slopes. Learn the basics necessary to move from the beginner area to slightly steeper slopes. This 50-minute-long lesson is designed for beginners to learn how to safely load and unload chairlifts and to control speed through turn shape. Next Step Lessons are on the hour, from 10AM-8PM daily and 10AM-10PM during late night sessions, unless otherwise stated.
              {'\n\n'}
              Purchase this lesson at the Lesson Information Window in the West Lodge and bring your lesson ticket to the Learn to Turn Area (on the snow, west of the West Lodge) at the top of the hour.
              {'\n\n'}
              All lessons are subject to instructor availability.  
            </Text>
          </View>
          <View>
            <Text style={styles.title}>Children's Introductory Group Lesson</Text>
            <View style={lstyles.pricecontainer}>
              <Text style={lstyles.price}>$20</Text>
              <Text style={lstyles.pricedesc}>/child, ages 4-8, Groups of 3 children to 1 instructor</Text>
            </View>
            <Text style={styles.content}>
              If your child is new to skiing/snowboarding, we want to give them tips to get started out right and to have a good time on the snow. Our goal is to help kids discover the fun of sliding on the snow, learning to control your speed and making those first turns through terrain-based teaching techniques. This intro lesson is taught in groups of 3 students to 1 instructor so that children can have detailed attention and gain an understanding of skiing/riding.
              {'\n\n'}
              Take advantage of our Children’s Introductory Lesson so that they can have a great day on the slopes. Lessons are 50 minutes long and taught on the hour, from 10AM-8PM daily and 10AM-10PM during late night sessions, unless otherwise stated.
              {'\n\n'}
              Purchase this lesson at the Lesson Information Window in the West Lodge and bring your lesson ticket to the Learn to Turn Area (on the snow, west of the West Lodge) at the top of the hour.
              {'\n\n'}
              All lessons are subject to instructor availability.  
            </Text>
          </View>
          <View>
            <Text style={styles.title}>Children's Next-Step Lesson</Text>
            <View style={lstyles.pricecontainer}>
              <Text style={lstyles.price}>$30</Text>
              <Text style={lstyles.pricedesc}>/child, ages 4-8, Groups of 2 children to 1 instructor</Text>
            </View>
            <Text style={styles.content}>
              Let our specially trained staff help your child improve their skills on the beginner area terrain.  If your child is showing interest in snow sports, the Children’s Next-Step Lesson is designed to bridge the gap between the Introductory Lesson and their first chair lift ride. They will learn to control their speed and become more comfortable making turns. We keep this lesson limited to groups 2 students to 1 instructor to help with loading/unloading the chair and have more detailed attention on their snow sports development. Lessons are 50 minutes long, taught on the hour from 10AM-8PM daily and 10AM-10PM during late night sessions, unless otherwise stated.
              {'\n\n'}
              Purchase this lesson at the Lesson Information Window in the West Lodge and bring your lesson ticket to the Learn to Turn Area (on the snow, west of the West Lodge) at the top of the hour.
              {'\n\n'}
              All lessons are subject to instructor availability.  
            </Text>
          </View>
          <View>
            <Text style={styles.title}>Rent an Instructor Lesson</Text>
            <View style={lstyles.pricecontainer}>
              <Text style={lstyles.price}>$80</Text>
              <Text style={lstyles.pricedesc}> Ages 9+ can share an instructor with up to 8 people</Text>
            </View>
            <View style={lstyles.pricecontainer}>
              <Text style={lstyles.price}>$60</Text>
              <Text style={lstyles.pricedesc}> Ages 4-8 can share an instructor with up to 8 other children</Text>
            </View>
          </View>
          <Text style={styles.content}>
            Take your skiing or snowboarding to the next level by taking a Private Lesson! We can work with you on basic beginner skills, linking turns on steeper terrain, carving, freestyle/terrain park skills, etc. Enjoy this lesson in a private 1 on 1 ratio format, or create a group of similarly aged and skilled friends or family for a group lesson (it is strongly recommended that children ages 4-8 have their own individual instructor). Lessons are 50 minutes long, taught on the hour from 10AM-8PM daily and 10AM-10PM during late night sessions, unless otherwise stated.
            {'\n\n'}
            Rent an Instructor works best when:
            {'\n'}
            - You’re wanting to take your skills to more intermediate/advance terrain{'\n'}
            - Focused 1:1 attention on your skiing/riding{'\n'}
            - Friends/Family want to stay together and learn together{'\n'}
            - Parents want to work with an instructor to help teach their children
            {'\n\n'}
            Purchase this lesson at the Lesson Information Window in the West Lodge and bring your lesson ticket to the Learn to Turn Area (on the snow, west of the West Lodge) at the top of the hour.
            {'\n\n'}
            All lessons are subject to instructor availability.  
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Adult lessons/clinics</Text>
          <Text style={styles.content}>
            The Adult Lesson Series is a great program for skiers and snowboarders who are looking to improve and advance their skills on the snow! These lessons cover a wide range of topics for both skiing and snowboarding.  You can pick and choose which lesson (or lessons) you would like to attend, as long as you meet the prerequisite for any particular lesson.
            {'\n\n'}
            We encourage you to stop by the Snow Sports School desk when you arrive to Perfect North and set up a <Text style={{fontWeight:'bold'}}>Rent An Instructor</Text> lesson that focuses on one of the topics listed. Enjoy the Rent An Instructor lesson in a private 1 on 1 ratio format, or create a group of up to 6 people similarly aged and skilled friends or family for a group lesson.
          </Text>
        </View>
        <Text>{'\n\n\n\n\n\n\n\n\n\n\n'}</Text>
      </ScrollView>
    </>
  )
}

export default Lesson;