import I18n from 'i18next';
import React from 'react';
import { Text, View } from 'react-native';
import Menu, { MenuDivider, MenuItem } from 'react-native-material-menu';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Routes } from '../Navigation/Routes';
import { Colors } from '../Themes/Colors';
import { FontType } from '../Themes/Fonts';


const HeaderComponent = ({ title, navigation }) => {
    let _menu = null;

    const setMenuRef = ref => {
        _menu = ref;
    };

    const hideMenu = () => {
        _menu.hide();
    };

    const showMenu = () => {
        _menu.show();
    };

    const renderButton = () => {
        return (
            <TouchableRipple onPress={showMenu} rippleColor={Colors.rippleColor}>
                <Icon name="more-vert" size={25} color="black" />
            </TouchableRipple>
        );
    };

    const redirectTo = route => () => {
        hideMenu();
        navigation.navigate(route);
    };

    return (
        <View style={[Styles.headerContainer, Styles.headerWhite]}>
            <View style={Styles.title}>
                <Text style={Styles.text}>{title}</Text>
            </View>
            <TouchableRipple onPress={() => null} rippleColor={Colors.rippleColor}>
                <View style={Styles.viewRowPoint}>
                    <Menu ref={setMenuRef} button={renderButton()} animationDuration={0}>
                        <MenuItem onPress={redirectTo(Routes.SettingsPage)}>
                            {I18n.t('SettingsTitle')}
                        </MenuItem>
                        <MenuItem onPress={redirectTo(Routes.AboutPage)}>
                            {I18n.t('AboutTitle')}
                        </MenuItem>
                        <MenuDivider />
                    </Menu>
                </View>
            </TouchableRipple>
        </View>
    );
};



const Styles = {
    headerContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingLeft: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.iron,
    },
    headerWhite: {
        backgroundColor: Colors.white,
    },
    logoContainer: {
        height: 28,
        width: 142,
        resizeMode: 'stretch',
    },
    title: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: Colors.black,
        fontFamily: FontType.semiBold,
        fontSize: 20,
    },
    icSize: {
        width: 26,
        height: 26,
    },
    viewRowPoint: {
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textPoint: {
        paddingLeft: 8,
        fontFamily: FontType.regular,
    },
};


export default HeaderComponent;
