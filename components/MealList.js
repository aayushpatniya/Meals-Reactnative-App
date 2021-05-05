import React, { useEffect } from "react";
import {useSelector} from "react-redux";
import { StyleSheet, Text, View, FlatList } from 'react-native';

import MealItem from "../components/MealItem";

const MealList = (props) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  const renderMealItem = (itemData) => {
    const isFav = favMeals.some(meal => meal.id === itemData.item.id);
    return (
      <MealItem
        {...itemData}
        options={{ title: "My home" }}
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              item: itemData,
              isFav:isFav,
            },
          });
        }}
        navigation={props.navigation}
      ></MealItem>
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        style={{ width: "100%", padding: 10 }}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default MealList;