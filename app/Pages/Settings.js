import AsyncStorage from '@react-native-community/async-storage';
import I18n from 'i18next';
import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import RNRestart from 'react-native-restart';
import { useDispatch, useSelector } from 'react-redux';
import { Lists, ModalOptions, Radio, Row, Switch } from './../Components';
import { Routes } from './../Navigation/Routes';
import { setLang } from './../Redux/Actions/Language/Language';
import { Colors } from './../Themes/Colors';
import { FontType } from './../Themes/Fonts';
import { Constants } from './../Utils/Constants';
import { changeLanguage } from './../Utils/Translation';



const Settings = ({ navigation }) => {
    const dispatch = useDispatch();
    const [switchBtn, setSwitchBtn] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalContentType, setModalContentType] = React.useState('');
    const { language } = useSelector(state => ({
        language: state.language.language,
    }));

    const toggleSwitch = val => {
        setSwitchBtn(val);
    };

    const toggleModal = type => {
        setModalContentType(type);
        setModalVisible(!modalVisible);
    };

    const onPressHelp = () => {
        Linking.openURL('https://quran.kemenag.go.id/');
    };

    const setLanguage = lang => async () => {
        Promise.all([
            changeLanguage(lang),
            AsyncStorage.setItem('userLanguage', lang),
            dispatch(setLang(lang)),
        ]);
        setModalVisible(!modalVisible);
        setTimeout(() => {
            RNRestart.Restart();
        }, 500);
    };

    const renderLists = () => {
        switch (modalContentType) {
            case 'lang':
                return renderLang();
            case 'ngasal':
                return renderNgasal();
            default:
                break;
        }
    };

    const GeneralSettings = [
        {
            title: I18n.t('FontType'),
            description: 'LPMQ standar KEMENAG',
            // eslint-disable-next-line no-alert
            onPress: () => alert('Not Ready'),
        },
        {
            title: I18n.t('AppLanguage'),
            description: language === 'id' ? I18n.t('Indonesian') : I18n.t('English'),
            onPress: () => toggleModal('lang'),
        },
    ];

    const OtherSettings = [
        {
            title: I18n.t('Help'),
            description: I18n.t('HelpDesc'),
            onPress: onPressHelp,
        },
        {
            title: I18n.t('AppVersion'),
            description: '1.0',
            onPress: () => navigation.navigate(Routes.AboutPage),
        },
    ];

    const renderLang = () => {
        const { LangLists } = Constants;
        return LangLists.map((item, i) => (
            <Radio
                key={i}
                text={item.title}
                value={item.langId}
                status={language === item.langId ? 'checked' : 'unchecked'}
                onPress={setLanguage(item.langId)}
                radioOnpress={setLanguage(item.langId)}
            />
        ));
    };

    const renderNgasal = () => {
        return (
            <View>
                <Text>Hello World</Text>
            </View>
        );
    };

    const renderTitleOptions = () => {
        switch (modalContentType) {
            case 'lang':
                return I18n.t('ChooseLanguage');
            case 'ngasal':
                return 'Ngasal';
            default:
                break;
        }
    };

    const renderModalOptions = () => {
        return (
            <ModalOptions
                type={renderTitleOptions()}
                isVisible={modalVisible}
                onPressCancel={toggleModal}
                renderItem={renderLists}
            />
        );
    };

    const renderSettingLists = () => {
        return (
            <React.Fragment>
                <Row title={I18n.t('GeneralSettings')}>
                    {GeneralSettings.map((item, i) => (
                        <Lists
                            key={i}
                            title={item.title}
                            description={item.description}
                            onPress={item.onPress}
                        />
                    ))}
                    <Switch
                        title={I18n.t('DarkMode')}
                        description={
                            switchBtn ? I18n.t('DarkModeOn') : I18n.t('DarkModeOff')
                        }
                        value={switchBtn}
                        onValueChange={toggleSwitch}
                    />
                </Row>
                <Row title={I18n.t('OtherSetting')}>
                    {OtherSettings.map((item, i) => (
                        <Lists
                            key={i}
                            title={item.title}
                            description={item.description}
                            onPress={item.onPress}
                        />
                    ))}
                </Row>
            </React.Fragment>
        );
    };

    return (
        <View style={Styles.container}>
            {renderSettingLists()}
            {renderModalOptions()}
        </View>
    );
};


Settings.navigationOptions = () => ({
    title: I18n.t('SettingsTitle'),
});


const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
        color: Colors.slateGray,
        fontFamily: FontType.regular,
    },
});

export default Settings;