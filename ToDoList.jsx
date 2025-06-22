import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <Text>{task}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
