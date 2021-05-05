import React,{useCallback,useEffect} from 'react';
import { StyleSheet, Image, TouchableOpacity,ScrollView, View, Text, Button, Icon } from 'react-native';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';

import Colors from "../constants/colors";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from '../store/actions/meals';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={{fontSize:18}} key={props.item}>{props.item}</Text>
    </View>
  );
}

const MealDetailScreen = props => {
  let item = props.navigation.getParam("item").item;
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  const isFav = favMeals.some((meal) => meal.id === item.id);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(item.id));
  },[dispatch, item.id]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  },[toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({ isFav: isFav });
  }, [isFav]);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.imageUrl }}></Image>
        <View style={styles.detail}>
          <DefaultText style={styles.mealDetailText}>
            {item.duration}M
          </DefaultText>
          <DefaultText style={styles.mealDetailText}>
            {item.complexity}
          </DefaultText>
          <DefaultText style={styles.mealDetailText}>
            {item.affordability}
          </DefaultText>
        </View>
      </View>
      <Text style={styles.title}> Ingredients </Text>
      <View style={styles.myHorizonalDivider}></View>
      {item.ingredients.map((ingredient) => (
        <ListItem key={ingredient} item={ingredient}></ListItem>
      ))}
      <Text style={styles.title}> Steps </Text>
      <View style={styles.myHorizonalDivider}></View>
      {item.steps.map((step) => (
        <ListItem key={step} item={step}></ListItem>
      ))}
      <View style={{...styles.myHorizonalDivider, marginVertical:20, marginBottom:30}}></View>
    </ScrollView>
  );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  let item = navigationData.navigation.getParam("item");
  let toggleFav = navigationData.navigation.getParam("toggleFav");
  let isFav = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: item.item.title,
    headerRight: () => (
      <View style={styles.favoriteButtonContainer}>
        <TouchableOpacity onPress={toggleFav}>
          <View>
            <Ionicons
              name={isFav ? "ios-star" : "ios-star-outline"}
              size={26}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    padding: 5,
  },
  favoriteButtonContainer: {
    marginRight: 10,
  },
  image: {
    height: 200,
    width: "100%",
  },
  imageContainer: {
    // padding: 5,
    margin: 5,
    marginBottom: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
    color: Colors.primary,
  },
  mealDetailText: {
    textTransform: "uppercase",
    fontSize: 16,
  },
  detail: {
    flexDirection: "row",
    // height: "15%",
    // borderBottomColor: 'black',
    // borderBottomWidth:1,
    backgroundColor: "#decdde",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
    // marginBottom: 10,
  },
  listItem: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  myHorizonalDivider: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    height: 1,
    width: "50%",
    marginLeft: "25%",
    marginVertical: 10,
  },
});

export default MealDetailScreen;

// borderWidth: 1,
// borderColor:'black'