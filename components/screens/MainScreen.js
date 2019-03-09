
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import BaseScreen from './BaseScreen';
import Colors from '../../constants/Colors';
import Shadow from '../../constants/Shadow';

export default MainScreen = () => {
    return (
        <BaseScreen>
            <View style={styles.content}>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                {/* <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text>
                <Text style={styles.text}>Open up App.js to start working on your app!</Text> */}
                <TextInput style={styles.textInput} returnKeyType="done" value="start" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" />
                <TextInput style={styles.textInput} returnKeyType="done" value="end" />
            </View>
        </BaseScreen>
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 20,
        ...Shadow.medium,
    },
    text: {
        marginVertical: 20,
    },
    textInput: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 3,
        margin: 10,
        padding: 10,
    }
});
