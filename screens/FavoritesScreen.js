import React from "react";
import { StyleSheet, View, Text } from "react-native";

const FavoritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default FavoritesScreen;
