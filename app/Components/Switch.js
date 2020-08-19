import React from 'react';
import { StyleSheet, Switch as SwitchCom, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { Colors } from './../Themes/Colors';
import { FontType } from './../Themes/Fonts';


const Switch = props => {
    const { value, onValueChange, title, description } = props;
    return (
        <TouchableRipple
            onPress={() => null}
            rippleColor={Colors.rippleColor}
            centered>
            <View style={Styles.settingSwitchContainer}>
                <View style={Styles.descView}>
                    <Text style={Styles.settingListTitle}>{title}</Text>
                    <Text style={Styles.settingListSubTitle}>{description}</Text>
                </View>
                <View style={Styles.switchView}>
                    <SwitchCom value={value} onValueChange={onValueChange} />
                </View>
            </View>
        </TouchableRipple>
    );
};

const Styles = StyleSheet.create({
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
    settingSwitchContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 15,
    },
    descView: {
        flex: 6,
    },
    switchView: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Switch;
