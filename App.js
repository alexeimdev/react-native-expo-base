import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import Colors from './constants/Colors';
import Shadow from './constants/Shadow';
import MainScreen from './components/screens/MainScreen';

const App = (props) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            {/* <StatusBar style={styles.statusBar} /> */}
            {/* <View style={{ height: 100, backgroundColor: Colors.purple, ...Shadow.small }} /> */}
            <KeyboardAvoidingView behavior="padding">
                <MainScreen />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: Colors.transparent,
    },
    statusBar: {
        height: StatusBar.currentHeight,
        backgroundColor: Colors.purple,
    },
});

export default App