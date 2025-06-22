import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm() {
  return (
    <View style={styles.inputArea}>
      <TextInput style={styles.input} placeholder="Enter task" />
      <Button title="Add" />
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
