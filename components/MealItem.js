import React,{useEffect} from 'react';
import { StyleSheet,TouchableOpacity,TouchableNativeFeedback,Platform, View, Text, ImageBackground } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from "react-redux";

import DefaultText from './DefaultText';

const MealItem = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <TouchableCmp onPress={props.onPress}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: props.item.imageUrl }}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.item.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetailContainer }}>
            <DefaultText style={styles.mealDetail}>
              {props.item.duration}M
            </DefaultText>
            <DefaultText style={styles.mealDetail}>
              {props.item.complexity}
            </DefaultText>
            <DefaultText style={styles.mealDetail}>
              {props.item.affordability}
            </DefaultText>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    borderRadius: 10,
    borderColor: "black",
    // borderWidth: 1,
    overflow: "hidden",
    marginVertical: 8,
    backgroundColor: "#d6d6d6",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetailContainer: {
    height: "15%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  mealDetail: {
    textTransform: 'uppercase',
    fontSize:16,
  }
});

export default MealItem;