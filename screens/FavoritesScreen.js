import React from "react";
import {
  StyleSheet, TouchableOpacity, Text, View
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useSelector } from 'react-redux';

import DefaultText from "../components/DefaultText";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  if (favMeals.length == 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>There are no favorite items. Add some!!</DefaultText>
      </View>
    );
  }
  return (
    <MealList navigation={props.navigation} listData={favMeals}></MealList>
  );
};

FavoritesScreen.navigationOptions =(navData)=> {
  return {
    headerTitle: "Your favourites",
    headerLeft: (
      <View style={styles.menuButtonContainer}>
        <TouchableOpacity onPress={() => navData.navigation.toggleDrawer()}>
          <View>
            <Ionicons name="ios-menu" size={25} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  menuButtonContainer: {
    marginLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
  }
});

export default FavoritesScreen;
