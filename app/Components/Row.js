import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './../Themes/Colors';
import { FontType } from './../Themes/Fonts';

const Row = props => {
    const { children, title } = props;
    return (
        <View style={Styles.rowContainer}>
            <Text style={Styles.rowTitle}>{title}</Text>
            <View>
                <View>{children}</View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    rowContainer: {
        marginTop: 10,
    },
    rowTitle: {
        fontSize: 14,
        marginLeft: 20,
        marginBottom: 10,
        color: Colors.persianGreen,
        fontFamily: FontType.bold,
    },
});

export default Row;
