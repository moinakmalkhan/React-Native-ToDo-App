import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalList, setGoalList] = useState([]);
  const [modalVisable, setModalVisable] = useState(false);
  const onTextChange = (text) => {
    setEnteredGoal(text);
  };
  const onGoalRemove = (goalId)=>{
    setGoalList(goal=>goal.filter(g=>g.id!==goalId))
  }
  const onGoalAdd = () => {
    if (enteredGoal) {
      // if (enteredGoal.toLowerCase() === "clear") {
      //   setGoalList([]);
      //   setEnteredGoal("");
      //   return;
      // }
      setGoalList([
        ...goalList,
        {
          id: Math.random().toString(),
          value: enteredGoal,
        },
      ]);
      setEnteredGoal("");
      setModalVisable(false)
    }
  };
  return (
    <View style={styles.root}>
      <Button title="Add new goal" onPress={()=>setModalVisable(true)}/>
      <GoalInput
        onChangeText={onTextChange}
        value={enteredGoal}
        visable={modalVisable}
        onGoalAdd={onGoalAdd}
        onCancelAddGoal={()=>{setModalVisable(false)}}
      />
      <FlatList
        data={goalList}
        keyExtractor={(item, index) => item.id}
        renderItem={(goal) => (
          <GoalItem onDelete={onGoalRemove} id={goal.item.id}>{goal.item.value}</GoalItem>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    padding: 50,
  }, 
});

export default App;
