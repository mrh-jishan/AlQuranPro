import I18n from 'i18next';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { TouchableRipple } from 'react-native-paper';
import { Colors } from './../Themes/Colors';
import { FontType } from './../Themes/Fonts';
import { deviceHeight, deviceWidth } from './../Utils/Helper';

const ModalOptions = props => {
    const { isVisible, onPressCancel, type, renderItem } = props;
    return (
        <View style={Styles.container}>
            <Modal
                isVisible={isVisible}
                useNativeDriver
                animationIn="fadeInRight"
                animationOut="fadeOutRight"
                backdropOpacity={0.3}
                deviceHeight={deviceHeight}>
                <View style={Styles.modalContainer}>
                    <StatusBar
                        backgroundColor={Colors.statusbarModal}
                        barStyle="light-content"
                        animated
                    />
                    <View style={Styles.modalTitleContainer}>
                        <Text style={Styles.modalTitleText}>{type}</Text>
                    </View>
                    <View style={Styles.modalOptionsContainer}>{renderItem()}</View>
                    <View style={Styles.modalButtonContainer}>
                        <TouchableRipple
                            onPress={onPressCancel}
                            rippleColor={Colors.rippleColor}
                            centered>
                            <Text style={Styles.buttonText}>{I18n.t('Cancel')}</Text>
                        </TouchableRipple>
                    </View>
                    <StatusBar />
                </View>
            </Modal>
        </View>
    );
};


const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalContainer: {
        width: deviceWidth * 0.9,
        backgroundColor: 'white',
        borderRadius: 3,
    },
    modalTitleContainer: {
        height: 40,
    },
    modalTitleText: {
        fontSize: 18,
        paddingLeft: 20,
        fontFamily: FontType.bold,
        color: Colors.persianGreen,
        paddingTop: 20,
        textTransform: 'capitalize',
    },
    modalOptionsContainer: {
        height: 'auto',
        overflow: 'hidden',
        marginTop: 10,
    },
    modalButtonContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10,
        paddingBottom: 10,
    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontFamily: FontType.semiBold,
        textTransform: 'uppercase',
        color: Colors.persianGreen,
        fontSize: 15,
    },
});


export default ModalOptions;
