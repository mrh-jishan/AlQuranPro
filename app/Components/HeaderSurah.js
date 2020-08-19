import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './../Themes/Colors';
import { FontType } from './../Themes/Fonts';


const HeaderSurah = ({ suratName, suratArabic, suratTranslate, countAyat, }) => {
    return (
        <View>
            <Text style={Styles.headerTitle}>
                {suratName} ({suratArabic})
            </Text>
            <Text style={Styles.headerSubtitle}>
                {suratTranslate} - {countAyat} Ayat
            </Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    headerTitle: {
        color: Colors.black,
        fontSize: 20,
        fontFamily: FontType.semiBold,
    },
    headerSubtitle: {
        color: Colors.black,
        fontFamily: FontType.regular,
    },
});


export default HeaderSurah;
