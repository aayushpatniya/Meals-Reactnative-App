import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Button, Icon } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import Colors from '../constants/colors';

const MealDetailScreen = props => {
  let item = props.navigation.getParam("item").item;
  
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
    </View>
  );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  let item = navigationData.navigation.getParam("item");
  return {
    headerTitle: item.item.title,
    headerRight: () => (
      <TouchableOpacity onPress={() => console.log("favourite")}>
        <View>
          <Ionicons name="ios-star-outline" size={26} color="white" />
        </View>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent:"center",
  }
})

export default MealDetailScreen;