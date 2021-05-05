import React from "react";
import { StyleSheet, Button, View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import {CATEGORIES} from '../data/dummy-data';
import Colors from "../constants/colors";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {

  const renderGridItem = (itemData) => {
    // console.log(itemData)
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
        categoryId={itemData.item.id}
        title={itemData.item.title}
        style={{backgroundColor:itemData.item.color}}
      ></CategoryGridTile>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        style={{ flex: 1 }}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = (navData)=> {
  return {
    headerTitle: "Meals Categories",
    headerLeft: (
      <View style={styles.menuButtonContainer}>
        <TouchableOpacity onPress={() => navData.navigation.toggleDrawer()}>
          <View>
            <Ionicons name="ios-menu" size={25} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    ),
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    },
    headerTintColor: Platform.OS === "ios" ? Colors.accent : "white",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  menuButtonContainer:{
    marginLeft: 10,
  }
});

export default CategoriesScreen;
