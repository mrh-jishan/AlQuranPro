import React from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { TouchableRipple } from 'react-native-paper';
import { Colors } from './../Themes/Colors';
import { FontType } from './../Themes/Fonts';
import { deviceHeight, deviceWidth } from './../Utils/Helper';

const ModalDialog = props => {
    const { isVisible, onPressOke, type, message } = props;
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
                    <View style={Styles.modalContentContainer}>
                        <Text style={Styles.modalContentText}>{message}</Text>
                    </View>
                    <View style={Styles.modalButtonContainer}>
                        <TouchableRipple
                            onPress={onPressOke}
                            rippleColor={Colors.rippleColor}
                            centered>
                            <Text style={Styles.buttonText}>OK</Text>
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
        height: 180,
        width: deviceWidth * 0.9,
        backgroundColor: 'white',
        borderRadius: 3,
    },
    modalTitleContainer: {
        flex: 1,
    },
    modalTitleText: {
        fontSize: 17,
        paddingLeft: 20,
        fontFamily: FontType.bold,
        color: Colors.persianGreen,
        paddingTop: 20,
        textTransform: 'uppercase',
    },
    modalContentContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        overflow: 'hidden',
    },
    modalContentText: {
        fontSize: 16,
        fontFamily: FontType.regular,
        lineHeight: 25,
    },
    modalButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 20,
        paddingBottom: 10,
    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontFamily: FontType.semiBold,
        textTransform: 'uppercase',
        color: Colors.persianGreen,
        fontSize: 15,
    },
});


export default ModalDialog;
