import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';

const BaseScreen = (props) => {
    return (
        <ScrollView style={defalutStyles.scrollView}
            showsVerticalScrollIndicator={true}>
            <View style={defalutStyles.view}>
                {props.children}
            </View>
        </ScrollView>
    );
}

const defalutStyles = StyleSheet.create({
    scrollView: {
    },
    view: {
        minHeight: Dimensions.get('screen').height,
    },
});

export default BaseScreen