import React, { useState } from 'react';
import { ScrollView, Text, Image, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import styles from './Styles';

const Lesson = (props) => {

  const lstyles = StyleSheet.create({
    menu_row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: '#ccc',
      borderStyle: 'solid',
      borderBottomWidth: 2,
      paddingVertical: 5
    },
    price:{
      fontSize: 20
    },
    item: {
      fontSize: 20
    }
  })

  const [ scrollPosition, setScrollPosition ] = useState(0);

  const [ChowCorralMenu, setChowCorralMenu] = useState([
    {
      "item": "Cheeseburger",
      "price": "$6.50"
    },
    {
      "item": "Hot Dog",
      "price": "$3.00"
    },
    {
      "item": "Hamburger",
      "price": "$6.50"
    },
    {
      "item": "Hoagie",
      "price": "$7.50"
    },
    {
      "item": "Fried Chicken Sandwich",
      "price": "$5.50"
    },
    {
      "item": "Meatball Hoagie",
      "price": "$7.50"
    },
    {
      "item": "Grilled Chicken Sandwich",
      "price": "$5.50"
    },
    {
      "item": "Turkey Sandwich",
      "price": "$5.00"
    },
    {
      "item": "Hot Ham & Cheese Sandwich",
      "price": "$3.50"
    },
    {
      "item": "Chicken Wrap",
      "price": "$6.00"
    },
    {
      "item": "Peanut Butter & Jelly",
      "price": "$2.50"
    },
    {
      "item": "Chili Cheese Coneys (2)",
      "price": "$7.00"
    },
    {
      "item": "Soup",
      "price": "$5.00"
    },
    {
      "item": "Nachos (extra cheese $1)",
      "price": "$4.00"
    },
    {
      "item": "Baked Potato (1 topping)",
      "price": "$3.50"
    },
    {
      "item": "Pretzel Bites",
      "price": "$4.00"
    },
    {
      "item": "Chicken Tenders",
      "price": "$5.50"
    },
    {
      "item": "Mac N' Cheese",
      "price": "$5.00"
    },
    {
      "item": "Extra Topping",
      "price": "$0.50"
    },
    {
      "item": "Chili",
      "price": "$5.00"
    },
    {
      "item": "Salad",
      "price": "$5.00"
    },
    {
      "item": "Bread Bowl & Soup",
      "price": "$10.00"
    },
    {
      "item": "Veggies",
      "price": "$4.00"
    },
    {
      "item": "Bread Bowl",
      "price": "$5.00"
    },
    {
      "item": "Pizza, Small",
      "price": "$7.50"
    },
    {
      "item": "Chips and Pretzels",
      "price": "$2.00"
    },
    {
      "item": "Grilled Chicken Salad",
      "price": "$7.00"
    },
    {
      "item": "Pringles",
      "price": "$2.00"
    },
    {
      "item": "Beef Stew",
      "price": "$5.00"
    },
    {
      "item": "Snack Pack",
      "price": "$3.00"
    },
    {
      "item": "Pie",
      "price": "$4.00"
    },
    {
      "item": "Cookie",
      "price": "$1.00"
    },
    {
      "item": "Cake",
      "price": "$3.00"
    },
    {
      "item": "Ice Cream",
      "price": "$3.00"
    },
    {
      "item": "Cheesecake",
      "price": "$4.00"
    },
    {
      "item": "Candy",
      "price": "$2.00"
    },
    {
      "item": "Dippin' Dots",
      "price": "$5.00"
    },
    {
      "item": "Soft Drink",
      "price": "$3.00"
    },
    {
      "item": "Bottled Drink",
      "price": "$3.50"
    },
    {
      "item": "Iced Tea",
      "price": "$3.00"
    },
    {
      "item": "Energy Drink",
      "price": "$4.00"
    },
    {
      "item": "Bottled Water",
      "price": "$3.50"
    },
    {
      "item": "Milk (white & chocolate)",
      "price": "$3.00"
    },
    {
      "item": "Juice",
      "price": "$3.50"
    },
    {
      "item": "Coffee / Hot Tea",
      "price": "$2.00"
    },
    {
      "item": "Hot Chocolate",
      "price": "$2.00"
    },
    {
      "item": "Egg, Cheese, Sausage Biscuit/Croissant",
      "price": "$4.50"
    },
    {
      "item": "Muffin",
      "price": "$3.00"
    },
    {
      "item": "Breakfast Burrito",
      "price": "$5.00"
    },
    {
      "item": "Donut",
      "price": "$1.50"
    },
    {
      "item": "Cinnamon Roll",
      "price": "$4.00"
    },
    {
      "item": "Fruit",
      "price": "$1.25"
    },
    {
      "item": "Yogurt Parfait",
      "price": "$4.00"
    },
    {
      "item": "Cereal",
      "price": "$3.00"
    }
  ])

  const [SlipNSlide, setSnipNSlideMenu] = useState([
    {
      "item": "Hamburger / Cheeseburger",
      "price": "$6.50"
    },
    {
      "item": "Bag of Pretzels / Chips",
      "price": "$2.00"
    },
    {
      "item": "Hot Dog",
      "price": "$3.00"
    },
    {
      "item": "Candy",
      "price": "$2.00"
    },
    {
      "item": "Chicken Tenders",
      "price": "$5.50"
    },
    {
      "item": "Bottled Drinks",
      "price": "$3.50"
    },
    {
      "item": "Nachos",
      "price": "$4.00"
    },
    {
      "item": "Coffee",
      "price": "$2.00"
    },
    {
      "item": "Pretzel Bites",
      "price": "$4.00"
    },
    {
      "item": "Hot Chocolate",
      "price": "$2.00"
    },
    {
      "item": "Cheese Sticks",
      "price": "$5.00"
    },
    {
      "item": "Fries",
      "price": "$3.50"
    },
    {
      "item": "Salad",
      "price": "$5.00"
    },
    {
      "item": "Funnel Cake Fries",
      "price": "$3.50"
    },
    {
      "item": "Veggies",
      "price": "$4.00"
    },
    {
      "item": "PB&J",
      "price": "$2.50"
    },
    {
      "item": "Yogurt Parfait",
      "price": "$4.00"
    },
    {
      "item": "Bread Sticks",
      "price": "$3.00"
    },
    {
      "item": "Snack Pack",
      "price": "$3.00"
    },
    {
      "item": "Small Pizza",
      "price": "$7.50"
    },
    {
      "item": "Pizza, Large (Groups Only, 5+ Pizzas. Must call to order in advance.)",
      "price": "$25.00"
    }
  ])

  return (
    <>
      <ScrollView style={styles.homeContainer} scrollIndicatorInsets={{ right: 1 }} onScroll={(e) => e.nativeEvent.contentOffset.y >= 0 && setScrollPosition(e.nativeEvent.contentOffset.y)} scrollEventThrottle={16} >
        <Image source={require('../assets/food-hero.jpeg')} style={{height: (400 - (scrollPosition * 1)), ...styles.heroImage, zIndex: 1}} />
        <Text style={{marginTop: -150, zIndex: 2, fontSize: 70, color: 'white', textShadowColor: 'black', textShadowRadius: 6}}>Food & Beverage</Text>
        <View style={{marginHorizontal:0}}>
          <View>
            <Text style={styles.title}>The Chow Corral</Text>
            <Text style={{...styles.content, marginBottom: 20}}>
              Located in the main lodge, kick back in front of the fire and enjoy a meal!
            </Text>
            <>
              {
                ChowCorralMenu.map((item, index) => {
                  return (
                    <View key={index} style={lstyles.menu_row}>
                      <Text style={lstyles.item}>{item.item}</Text>
                      <Text style={lstyles.price}>{item.price}</Text>
                    </View>
                  )
                })
              }
            </>
          </View>
          <View>
            <Text style={styles.title}>Grilling on the deck</Text>
            <Text style={{...styles.content, marginBottom: 20}}>
              Weather permitting, get fresh grill hamburgers, cheeseburgers, hot dogs, and more on the deck of the Main Lodge!
            </Text>
          </View>
          <View>
            <Text style={styles.title}>Sip-n-Slide Snack Shack</Text>
            <Text style={{...styles.content, marginBottom: 20}}>
              Take a rest from tubing and enjoy a snack in the Snow Tubing Area!
            </Text>
            <>
              {
                SlipNSlide.map((item, index) => {
                  return (
                    <View key={index} style={lstyles.menu_row}>
                      <Text style={lstyles.item}>{item.item}</Text>
                      <Text style={lstyles.price}>{item.price}</Text>
                    </View>
                  )
                })
              }
            </>
          </View>
        </View>
        <Text>{'\n\n\n\n\n\n\n\n\n\n\n'}</Text>
      </ScrollView>
    </>
  )
}

export default Lesson;