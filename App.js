import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function App() {
  const [courseGoal, setCourseGoal]= useState([]);
  const [isAddModel, setIsAddModel] = useState(false);
  const addGoalHandler = goalTitle =>{
    setCourseGoal(currentGoal => [...courseGoal, {id: Math.random().toString(), value: goalTitle}]);
    setIsAddModel(false);
  }

  const removeItemHandler = goalId =>{
    setCourseGoal(currentGoal =>{
      return currentGoal.filter((goal)=> goal.id !== goalId)
    })
  }

  const cancelGoalHandler = () =>{
    setIsAddModel(false);
  }
  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={()=> setIsAddModel(true)} />
       <GoalInput 
       onCancel={cancelGoalHandler}
       visible={isAddModel}
        onAddGoal = {addGoalHandler}/>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoal}
          renderItem={(itemData) => (
            <GoalItem id={itemData.item.id} onDelete ={removeItemHandler}
            title={itemData.item.value}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
screen:{
  padding: 50,
},

});
