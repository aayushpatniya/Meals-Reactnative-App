import React from 'react';
import { useSelector } from "react-redux";
import { Platform, Text, TouchableOpacity, TouchableNativeFeedback, View, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  
  let categoryId = props.categoryId;
  let category = CATEGORIES.find((item) => item.id === categoryId);
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );
    
  return (
    <View style={styles.gridItem}>
      <TouchableCmp
        onPress={props.onPress}
        style={{ flex: 1 }}
        background={TouchableNativeFeedback.Ripple("#efefef")}
      >
        <View style={{ ...styles.container, ...props.style }}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 130,
    margin: 15,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: 15,
    elevation: 10,
  },
  title: {
    // fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: "right",
  },
});

export default CategoryGridTile;