import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { Colors } from './../Themes/Colors';
import { FontType } from './../Themes/Fonts';


const Lists = props => {
    const { title, description, onPress } = props;
    return (
        <TouchableRipple
            onPress={onPress}
            rippleColor={Colors.rippleColor}
            centered>
            <View style={Styles.settingListContainer}>
                <Text style={Styles.settingListTitle}>{title}</Text>
                <Text style={Styles.settingListSubTitle}>{description}</Text>
            </View>
        </TouchableRipple>
    );
};


const Styles = StyleSheet.create({
    settingListContainer: {
        marginHorizontal: 20,
        marginVertical: 15,
    },
    settingListTitle: {
        fontSize: 16,
        fontFamily: FontType.regular,
    },
    settingListSubTitle: {
        paddingTop: 5,
        fontSize: 13.5,
        color: Colors.grey,
        fontFamily: FontType.regular,
    },
});


export default Lists;
