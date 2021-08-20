import React from "react";
import { View, Text, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  return (
    <Modal visible={props.visable} animationType="slide">
      <View style={styles.goalInputView}>
        <TextInput
          style={styles.inputField}
          placeholder="Enter goal"
          onChangeText={props.onChangeText}
          value={props.value}
        />
        <View style={styles.buttonView}>
          <View style={styles.button}><Button title="ADD" onPress={props.onGoalAdd} /></View>
          <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancelAddGoal} /></View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  goalInputView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonView: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  button:{
      width: "40%"
  }
});
