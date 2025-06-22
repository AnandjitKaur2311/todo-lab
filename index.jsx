/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}