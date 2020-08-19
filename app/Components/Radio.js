import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton, TouchableRipple } from 'react-native-paper';
import { Colors } from './../Themes/Colors';
import { FontType } from './../Themes/Fonts';

const Radio = props => {
    const { text, onPress, value, status, radioOnpress } = props;
    return (
        <TouchableRipple
            onPress={onPress}
            rippleColor={Colors.rippleColor}
            centered>
            <View style={Styles.modalOptionsContent}>
                <Text style={Styles.radioText}>{text}</Text>
                <RadioButton
                    value={value}
                    status={status}
                    onPress={radioOnpress}
                    color={Colors.persianGreen}
                />
            </View>
        </TouchableRipple>
    );
};


const Styles = StyleSheet.create({
    modalOptionsContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginLeft: 20,
        marginRight: 25,
    },
    radioText: {
        fontSize: 16,
        fontFamily: FontType.regular,
        paddingTop: 8,
    },
});


export default Radio;
