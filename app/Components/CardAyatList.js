import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import HTML from 'react-native-render-html';
import { Colors } from './../Themes/Colors';
import { FontType } from './../Themes/Fonts';

const CardAyatList = props => {
    const { ayatNumber, ayatText, ayatTranslate, onPress } = props;
    return (
        <TouchableRipple
            rippleColor={Colors.rippleColor}
            centered
            onPress={onPress}>
            <View style={Styles.CardStyle}>
                <View style={Styles.cardContainer}>
                    <View style={Styles.numberCircleContainer}>
                        <View style={Styles.NumberCircle}>
                            <Text style={Styles.textNumber}>{ayatNumber}</Text>
                        </View>
                    </View>
                    <View style={Styles.descContainer}>
                        <Text style={Styles.descTextRight}>{ayatText}</Text>
                        <HTML
                            html={ayatTranslate}
                            containerStyle={Styles.descTextLeftContainer}
                            baseFontStyle={Styles.descTextLeft}
                        />
                    </View>
                </View>
            </View>
        </TouchableRipple>
    );
};


const Styles = StyleSheet.create({
    CardStyle: {
        height: 'auto',
        padding: 10,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    numberCircleContainer: {
        flex: 0.75,
    },
    descContainer: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    NumberCircle: {
        height: 45,
        width: 45,
        borderRadius: 100,
        borderColor: Colors.separator,
        borderWidth: 2,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 5,
        marginBottom: 10,
    },
    textNumber: {
        color: Colors.grey,
        fontSize: 18,
        fontFamily: FontType.semiBold,
    },
    descTextRight: {
        textAlign: 'right',
        paddingTop: 10,
        paddingRight: 10,
        fontSize: 27,
        fontFamily: FontType.arabic,
        lineHeight: 70,
    },
    descTextLeftContainer: {
        paddingVertical: 10,
        paddingRight: 10,
    },
    descTextLeft: {
        color: Colors.grey,
        fontSize: 14,
        lineHeight: 30,
        fontFamily: FontType.regular,
    },
});

export default CardAyatList;
