import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

const Loading = () => {
    return (
        <View style={Styles.loading}>
            <ActivityIndicator animating={true} color={Colors.grey600} size={40} />
        </View>
    );
};

const Styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default Loading;
