import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TodoList from './Components/TodoList';
import { StrictMode } from 'react';

export default function App() {
  return (
    <StrictMode>
      <View style={styles.container}>
        <TodoList />
      </View>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
