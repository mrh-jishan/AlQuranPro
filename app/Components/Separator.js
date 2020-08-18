import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from './../Themes/Colors';

const Separator = () => {
    return <View style={Styles.line} />;
};


const Styles = StyleSheet.create({
    line: {
        height: 1,
        backgroundColor: Colors.separator,
    },
});

export default Separator;
