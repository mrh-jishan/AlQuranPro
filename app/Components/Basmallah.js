import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontType } from './../Themes/Fonts';
import Separator from './Separator';

const dataBasmallah = require('./../Data/Basmallah.json');

const Basmallah = () => {
    return (
        <View style={Styles.CardStyle}>
            <View>
                <Text style={Styles.descTextArabic}>{dataBasmallah.ayat_arab}</Text>
            </View>
            <Separator />
        </View>
    );
};

const Styles = StyleSheet.create({
    CardStyle: {
        height: 'auto',
    },
    descTextArabic: {
        textAlign: 'center',
        paddingVertical: 10,
        paddingRight: 10,
        fontSize: 30,
        fontFamily: FontType.arabic,
    },
});

export default Basmallah;
