import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAdd = () => {
    addTask(taskText);
    setTaskText('');
  };

  return (
    <View style={styles.inputArea}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
      />
      <Button title="Add Task" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    flex: 1,
    marginRight: 5,
    paddingHorizontal: 8,
  },
});
