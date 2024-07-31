import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import Todo from "./Todo";

const TodoList = () => {
    const [title, setTitle] = useState('Tiehoule');
    return (
        <View style={{ width: '80%', marginBottom: 60 }}>
            <Text style={[styles.align, styles.font]}>{title}</Text>
            <Todo name='Red' />
            <Todo name='Blue' />
            <Button title="Change me" onPress={() => setTitle('Set my name')} />
        </View>
    )
}

const styles = StyleSheet.create({
    align: {
        alignSelf: 'center',
    },
    font: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default TodoList;