import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={.4} onLongPress={props.onDelete.bind(this,props.id)}>
      <View style={styles.listItems}>
        <Text>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItems: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
  },
});
export default GoalItem;
