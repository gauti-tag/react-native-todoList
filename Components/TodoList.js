import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView, TextInput } from "react-native";

import Todo from "./Todo";

const TodoList = () => {
    const [title, setTitle] = useState('Tiehoule');
    return (
        <View style={{ width: '80%', marginBottom: 60 }}>
            <Text style={[styles.align, styles.font]}>{title}</Text>
            <ScrollView>
                <Todo name='Red' />
                <Todo name='Blue' />
            </ScrollView>
            <View>
                <TextInput style={styles.input} />
                <Button title="Change me" onPress={() => setTitle('Set my name')} />
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