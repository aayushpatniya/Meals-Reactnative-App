import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMeals = (props) => {

  const renderMealItem = (itemData) => {
    // console.log(itemData);
    return (
      <MealItem
        {...itemData}
        options={{ title: "My home" }}
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              item: itemData,
            },
          });
        }}
      ></MealItem>
    );
  };

  let categoryId = props.navigation.getParam('categoryId')
  let category = CATEGORIES.find(item => item.id === categoryId)
  
  const displayedMeals = MEALS.filter(meal =>meal.categoryIds.indexOf(categoryId) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} style={{width:'100%', padding:10}} renderItem={renderMealItem}></FlatList>
    </View>
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default CategoryMeals;
