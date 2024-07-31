import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const TodoList = () => {
    const [title, setTitle] = useState('Tiehoule');
    return (
        <View>
            <Text>
                {title}
                <Button title="Change me" onPress={() => setTitle('Set my name')} />
            </Text>
        </View>
    )
}

export default TodoList;