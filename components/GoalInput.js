import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Modal} from 'react-native';

const GoalInput = props => {
 const [enteredGoal, setEnteredGoal]= useState('');
 const goalInputHandler = (enteredText)=>{
    setEnteredGoal(enteredText)
  };

  const addGoalHandler =() =>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
  return (
 <Modal visible={props.visible} animationType='slide'>
   <View style={styles.inputContainer}>
    <TextInput
      placeholder="Course Goal"
      style={styles.input}
      onChangeText={goalInputHandler}
      value={enteredGoal}
    />
  <View style={styles.buttonsContainer}>
    <View style={styles.button}>
    <Button title='CANCEL' color="red" onPress={props.onCancel}/>
    </View>
    <View style={styles.button}>
    <Button title="ADD" onPress={addGoalHandler} />
    </View>
  </View>
  </View>
 </Modal>
  );
};
const styles = StyleSheet.create({
 inputContainer:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"},
 input: {
        borderBottomColor : 'black',
        borderBottomWidth: 1,
        width: "80%",
        marginBottom: 20
       },
buttonsContainer:{
       flexDirection: 'row',
       justifyContent: 'space-around',
       width: "60%"
},
button: {
  width: "40%"
}
});

export default GoalInput;
