import React from "react";
import { View, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

import { CATEGORIES } from '../data/dummy-data';
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMeals = (props) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  let categoryId = props.navigation.getParam('categoryId')
  let category = CATEGORIES.find(item => item.id === categoryId)
  
  const displayedMeals = availableMeals.filter(meal =>meal.categoryIds.indexOf(categoryId) >= 0);
  if (displayedMeals.length <= 0 || !displayedMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found. Maybe check your filteres?</DefaultText>
      </View>
    );
  }
  return (
    <MealList listData={displayedMeals} navigation={props.navigation}></MealList>
  );
};

CategoryMeals.navigationOptions = (navigationData) => {
  let categoryId = navigationData.navigation.getParam('categoryId')
  let category = CATEGORIES.find(item => item.id === categoryId)
  return {
    headerTitle: category.title,
  };
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
  }
});

export default CategoryMeals;
