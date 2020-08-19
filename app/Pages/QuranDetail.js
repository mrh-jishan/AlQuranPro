import Clipboard from '@react-native-community/clipboard';
import get from 'lodash/get';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FlatList, Share, StatusBar, StyleSheet, Text, ToastAndroid, TouchableNativeFeedback, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { Basmallah, CardAyatList, HeaderSurah, Loading, Separator } from '../Components';
import { getDetailQuran } from './../Redux/Actions/QuranDetail/QuranDetail';
import { Colors } from './../Themes/Colors';
import { FontType } from './../Themes/Fonts';
import { RbSheetStyle } from './../Themes/Styles';
import { Constants } from './../Utils/Constants';
import { keyExtractor } from './../Utils/Helper';

function QuranDetail(props) {
    const refRBSheet = useRef();
    const [rbSheetData, setRbSheetData] = useState({});

    useEffect(() => {
        renderDetailSurah();
    }, []);

    const quranOptions = [
        {
            icon: 'play',
            title: 'Mainkan Surat',
            action: () => null,
        },
        {
            icon: 'book-open-variant',
            title: 'Lihat Tafsir',
            action: () => null,
        },
        {
            icon: 'content-copy',
            title: 'Salin Ayat',
            action: () => onTapCopy(),
        },
        {
            icon: 'share-variant',
            title: 'Bagikan Ayat',
            action: () => onTapShare(),
        },
    ];

    const renderDetailSurah = async () => {
        const { getDetailQuran, navigation } = props;

        const surahId = get(navigation, 'state.params.dataSurah.id');
        const countAyat = get(navigation, 'state.params.dataSurah.count_ayat');

        const payload = {
            surahId,
            countAyat,
        };

        await getDetailQuran(payload);
    };

    const openBottomSheet = item => () => {
        console.log(item);
        setRbSheetData(item);
        refRBSheet.current.open();
    };

    const onTapShare = async () => {
        try {
            const result = await Share.share({
                message: `${rbSheetData.aya_text}\n\n${
                    rbSheetData.translation_aya_text
                    }`,
            });
            if (result.action === Share.sharedAction) {
                if (!result.activityType) {
                    ToastAndroid.show(
                        'Pilih aplikasi untuk membagikan',
                        ToastAndroid.SHORT,
                    );
                    setTimeout(() => {
                        refRBSheet.current.close();
                    }, 0);
                }
            }
        } catch (error) {
            // error
        }
    };

    const onTapCopy = () => {
        console.log(rbSheetData);
        Clipboard.setString(
            `${rbSheetData.aya_text}\n\n${rbSheetData.translation_aya_text}`,
        );
        ToastAndroid.show('Ayat disalin', ToastAndroid.SHORT);
        refRBSheet.current.close();
    };

    const listHeaderComponent = () => {
        const { navigation } = props;

        const surahId = get(navigation, 'state.params.dataSurah.id', '');

        switch (surahId) {
            case Constants.DATA_SURAH.AL_FATIHAH:
                return null;
            case Constants.DATA_SURAH.AL_TAUBAH:
                return null;
            default:
                return <Basmallah />;
        }
    };

    const renderCardContent = ({ item }) => {
        return (
            <CardAyatList
                ayatNumber={item?.aya_number}
                ayatText={item?.aya_text}
                ayatTranslate={item?.translation_aya_text}
                onPress={openBottomSheet(item)}
            />
        );
    };

    const renderQuranOptions = () => {
        const { navigation } = props;
        const surahName = get(navigation, 'state.params.dataSurah.surat_name', '');
        return (
            <View style={Styles.bsContainer}>
                <StatusBar
                    backgroundColor={Colors.statusbarModal}
                    barStyle="dark-content"
                    animated
                />
                <Text style={Styles.bsTextInfo}>
                    QS. {surahName}: Ayat {rbSheetData.aya_number}
                </Text>
                {quranOptions.map((item, i) => (
                    <TouchableNativeFeedback onPress={item.action} key={i}>
                        <View style={Styles.bsItemContainer}>
                            <Icon name={item.icon} size={24} color="black" />
                            <Text style={Styles.bsItemText}>{item.title}</Text>
                        </View>
                    </TouchableNativeFeedback>
                ))}
            </View>
        );
    };

    const renderBottomSheet = () => {
        return (
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={300}
                duration={250}
                closeOnPressMask={true}
                customStyles={RbSheetStyle}>
                {renderQuranOptions()}
            </RBSheet>
        );
    };

    const renderData = () => {
        const { dataAyat, refreshing } = props;
        return (
            <FlatList
                data={dataAyat}
                keyExtractor={keyExtractor}
                renderItem={renderCardContent}
                refreshing={refreshing}
                onRefresh={renderDetailSurah}
                ItemSeparatorComponent={Separator}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={listHeaderComponent}
            />
        );
    };

    return props.isLoading ? (
        <Loading />
    ) : (
            <Fragment>
                {renderData()}
                {renderBottomSheet()}
            </Fragment>
        );
}

QuranDetail.navigationOptions = ({
    navigation: {
        state: {
            params: { dataSurah },
        },
    },
}) => {
    const suratName = dataSurah.surat_name;
    const suratArabic = dataSurah.surat_text;
    const suratTranslate = dataSurah.surat_terjemahan;
    const countAyat = dataSurah.count_ayat;
    return {
        headerTitle: (
            <HeaderSurah
                suratName={suratName}
                suratArabic={suratArabic}
                suratTranslate={suratTranslate}
                countAyat={countAyat}
            />
        ),
    };
};

const Styles = StyleSheet.create({
    bsContainer: {
        flex: 1,
        marginTop: 20,
    },
    bsItemContainer: {
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    bsItemText: {
        fontSize: 15,
        paddingLeft: 16,
        fontFamily: FontType.regular,
    },
    bsTextInfo: {
        textAlign: 'center',
        fontFamily: FontType.bold,
        paddingBottom: 20,
    },
});

const mapStateToProps = state => ({
    dataAyat: state.qurandetail.data,
    isLoading: state.qurandetail.loading,
    refreshing: state.qurandetail.refreshing,
});

const mapDispatchToProps = dispatch => ({
    getDetailQuran: payload => dispatch(getDetailQuran(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps,)(QuranDetail);