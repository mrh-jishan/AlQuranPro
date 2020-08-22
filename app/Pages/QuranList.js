import React, { useCallback, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { CardSurahList, ModalDialog, Separator } from '../Components';
import { Routes } from './../Navigation/Routes';
import { getQuranList } from './../Redux/Actions/QuranList/QuranList';
import { keyExtractor } from './../Utils/Helper';


const QuranList = ({ getQuranList, navigation, isError, errorMessage, data, refreshing, isLoading }) => {

    useEffect(() => {
        SplashScreen.hide();
        getDataQuran();
    }, [getDataQuran]);

    const getDataQuran = useCallback(async () => {
        await getQuranList();
    }, [getQuranList]);

    const goToDetailpage = dataSurah => {
        navigation.navigate(Routes.QuranDetail, dataSurah);
    };

    const renderListEmpty = () => {
        return (
            <ModalDialog
                type="Peringatan"
                isVisible={isError}
                onPressOke={() => BackHandler.exitApp()}
                message={errorMessage}
            />
        );
    };

    const renderCardContent = ({ item }) => {
        return (
            <CardSurahList
                surahNumber={item?.id}
                surahText={item?.surat_text}
                surahName={item?.surat_name}
                surahMean={item?.surat_terjemahan}
                surahAyat={item?.count_ayat}
                onPress={() => goToDetailpage(item)}
            />
        );
    };

    return (
        <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderCardContent}
            refreshing={refreshing}
            onRefresh={getDataQuran}
            ItemSeparatorComponent={Separator}
            ListEmptyComponent={renderListEmpty}
            showsVerticalScrollIndicator={false}
        />
    )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
    }
});


const mapStateToProps = state => ({
    data: state.quranList.data,
    isLoading: state.quranList.loading,
    isError: state.quranList.error,
    errorMessage: state.quranList.errorMessage,
    refreshing: state.quranList.refreshing,
});

const mapDispatchToProps = dispatch => ({
    getQuranList: () => dispatch(getQuranList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuranList);