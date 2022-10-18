import React, {useState, useEffect} from 'react';

import {
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    FlatList,
    
  } from 'react-native';
import { ButtonAdd } from '../components/ButtonAdd';
import { CardTask } from '../components/Cardtask';

export default function Home(){
  const [newTask, setNewtask] = useState('');
  const [myTasks, setMytasks] = useState([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewTask(){

    if(newTask.trim() === ''){
      return ToastAndroid.show('Digite uma tarefa', ToastAndroid.TOP)
    }
    setMytasks(oldState => [...oldState, newTask])

  }

  function handleClearTasks(){
    setMytasks([])
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12){
      setGretting('Good morning!')
    } else if(currentHour >= 12 && currentHour < 18 ) {
      setGretting('Good aftermoon!')
    } else {
      setGretting('Good night!')
    }
  }, [])

  return(
    <View style={styles.container}>
      
      <Text style={styles.title}>Welcome, Rodrigo!</Text>
      <Text style={styles.grettings}>{gretting}</Text>
      <TextInput
        style={styles.input}
        placeholder="new task"
        placeholderTextColor="#CECECE"
        onChangeText={setNewtask}
      />

      <ButtonAdd onPress={handleAddNewTask} />

      <Text style={[styles.title, {marginTop: 20}]}>
        My Tasks
      </Text>

    <FlatList
      data={myTasks}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <CardTask task={item} />
      )}
    />
    <TouchableOpacity 
      style={styles.buttonClear}
      onPress={handleClearTasks}
      >
      <Text style={styles.buttonClearText}>Clear</Text>
    </TouchableOpacity>
 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 20, 
        paddingVertical: 40,
        paddingHorizontal: 30, 
        backgroundColor: '#121015'
    },

    title: {
      color: '#FFF',
      fontSize: 24,
      fontWeight: 'bold'
    },

    input: {
      backgroundColor: '#1f1e25',
      color: '#FFF',
      fontSize: 18,
      padding: 15,
      marginTop: 30,
      borderRadius: 7
    },

    grettings: {
      color: '#FFF',
      fontSize: 18,
    },

    buttonClear: {
      backgroundColor: '#3296d4',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20,
    },

    buttonClearText: {
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold'
    },
})