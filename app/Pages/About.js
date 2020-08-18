import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FontType } from './../Themes/Fonts';


const About = () => {
    return (
        <View style={Styles.container}>
            <Image
                source={require('./../Assets/Images/ic_icon.png')}
                style={Styles.appImage}
                resizeMode="stretch"
            />
            <Text style={Styles.appName}>Al-Quran Mobile</Text>
            <Text style={Styles.appVersion}>Version 1.0</Text>
            <Text style={Styles.appAuthor}>Robiul Hassan</Text>
        </View>
    )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
    },
    appName: {
        fontSize: 22,
        fontFamily: FontType.semiBold,
    },
    appVersion: {
        fontFamily: FontType.regular,
        color: '#6e848f',
        fontSize: 14,
        paddingTop: 5,
    },
    appAuthor: {
        fontFamily: FontType.regular,
        color: '#6e848f',
        fontSize: 13,
        paddingTop: 5,
    },
    appImage: {
        marginBottom: 10,
        height: 70,
        width: 70,
    },
});


export default About;