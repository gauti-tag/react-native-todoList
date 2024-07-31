import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import Todo from "./Todo";

const TodoList = () => {
    const [title, setTitle] = useState('Tiehoule');
    return (
        <View>
            <Text>
                {title} <br />
                <Todo name='Red' /> <br />
                <Todo name='Blue' />

                <Button title="Change me" onPress={() => setTitle('Set my name')} />
            </Text>
        </View>
    )
}
export default TodoList;