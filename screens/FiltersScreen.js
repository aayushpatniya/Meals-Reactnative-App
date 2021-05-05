import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Switch, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/colors";
// import { Switch } from "react-native-paper";

import { setFilters } from "../store/actions/meals";

const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setisGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const dispatch = useDispatch();
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree: isGlutenFree,
      isVegan: isVegan,
      isVegetarian: isVegetarian,
      isLactoseFree: isLactoseFree,
    };
    dispatch(setFilters(appliedFilters));
    navigation.navigate({
      routeName: "Categories"
    });
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  const FilterSwitch = (props) => {
    return (
      <View style={styles.FilterSwitch}>
        <Text style={styles.label}>{props.label}</Text>
        <Switch
          trackColor={{ true: Colors.primary, false: "#ababab" }}
          thumbColor={Colors.primary}
          value={props.value}
          onValueChange={props.onValueChange}
        ></Switch>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <View style={styles.myHorizonalDivider}></View>
      <View style={styles.FilterContainer}>
        <FilterSwitch
          label="Glutin Free"
          value={isGlutenFree}
          onValueChange={(newValue) => setisGlutenFree(newValue)}
        ></FilterSwitch>
        <FilterSwitch
          label="Vegan"
          value={isVegan}
          onValueChange={(newValue) => setIsVegan(newValue)}
        ></FilterSwitch>
        <FilterSwitch
          label="Vegetarian"
          value={isVegetarian}
          onValueChange={(newValue) => setIsVegetarian(newValue)}
        ></FilterSwitch>
        <FilterSwitch
          label="Lactose Free"
          value={isLactoseFree}
          onValueChange={(newValue) => setIsLactoseFree(newValue)}
        ></FilterSwitch>
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters Screen",
    headerLeft: (
      <View style={styles.menuButtonContainer}>
        <TouchableOpacity onPress={() => navData.navigation.toggleDrawer()}>
          <View>
            <Ionicons name="ios-menu" size={25} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    ),
    headerRight: (
      <View style={styles.saveButtonContainer}>
        <TouchableOpacity onPress={navData.navigation.getParam("save")}>
          <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
            <Ionicons name="ios-checkmark" size={22} color={Colors.primary} />
            <Text
              style={{ color: Colors.primary, fontSize: 16, marginLeft: 10 }}
            >
              Apply Filters
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
  },
  menuButtonContainer: {
    marginLeft: 10,
  },
  saveButtonContainer: {
    marginRight: 10,
    backgroundColor: "white",
    paddingVertical: 5,
    borderRadius: 5,
  },
  FilterSwitch: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  FilterContainer: {
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
  },
  label: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
  myHorizonalDivider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: 1,
    width: "30%",
    marginLeft: "35%",
    marginVertical: 10,
  },
});

export default FiltersScreen;
