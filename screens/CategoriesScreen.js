import React from "react";
import { StyleSheet, Button, View, Text, FlatList, TouchableOpacity } from "react-native";

import {CATEGORIES, MEALS} from '../data/dummy-data';
import Colors from "../constants/colors";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        onPress={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
        title={itemData.item.title}
        style={{backgroundColor:itemData.item.color}}
      ></CategoryGridTile>
    );
  };

  return (
    <FlatList data={CATEGORIES} style={{flex:1}} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meals Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary: "white",
  },
  headerTintColor: Platform.OS === "ios" ? Colors.accent : 'white',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
