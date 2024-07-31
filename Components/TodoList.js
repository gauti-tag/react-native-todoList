import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView, TextInput } from "react-native";

import Todo from "./Todo";

const TodoList = () => {

    // Setup variables and useStates
    const [title, setTitle] = useState('Todo List');
    const [text, setText] = useState();
    const [list, setList] = useState(['Hello World']);

    // Method to Add Item
    const addItem = () => {
        const updatedList = list;
        updatedList.push(text);
        setList(updatedList);
        setText('');
    }

    // Method to Delete Item
    const deleteItem = (index) => {
        const updatedList = list.filter((todo) => todo !== index);
        setList(updatedList);
    };

    return (
        <View style={{ width: '80%', marginBottom: 60 }}>
            <Text style={[styles.align, styles.font]}>{title}</Text>
            <ScrollView>
                {/* Map list in todo components */}
                {list.map((x, index) => (
                    <Todo key={index} item={x} index={index} delete={deleteItem} />
                ))}
            </ScrollView>
            <View>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                />
                <Button title="Add Item" onPress={addItem} />
            </View>
        </View>
    )
}

// Create style properties
const styles = StyleSheet.create({
    align: {
        alignSelf: 'center',
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 8,
        padding: 8
    }
})

export default TodoList;