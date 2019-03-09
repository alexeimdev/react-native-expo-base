import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
} from 'react-native';

import Colors from './constants/Colors';
import Shadow from './constants/Shadow';
import AppContainer from './navigation/AppContainer';

const App = (props) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            {/* <StatusBar style={styles.statusBar} /> */}
            {/* <View style={{ height: 100, backgroundColor: Colors.purple, ...Shadow.small }} /> */}
            <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding">
                <AppContainer />
            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    statusBar: {
        height: StatusBar.currentHeight,
        backgroundColor: Colors.purple,
    },
});

export default App