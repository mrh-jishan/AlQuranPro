import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { Alert, BackHandler, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Routes } from './../Navigation/Routes';
import { setLang } from './../Redux/Actions/Language/Language';
import { Constants } from './../Utils/Constants';
import { isNetworkConnected } from './../Utils/Helper';
import { changeLanguage } from './../Utils/Translation';

const SplashScreenPage = props => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const redirectPage = () => {
      navigate(Routes.QuranList);
    };
    redirectPage();
  }, [navigate]);

  React.useEffect(() => {
    const setLanguage = async () => {
      const userLanguage = await AsyncStorage.getItem('userLanguage');

      switch (userLanguage) {
        case Constants.LANGUAGE.ID:
          changeLanguage(Constants.LANGUAGE.ID);
          await dispatch(setLang(Constants.LANGUAGE.ID));
          break;
        case Constants.LANGUAGE.EN:
          changeLanguage(Constants.LANGUAGE.EN);
          dispatch(setLang(Constants.LANGUAGE.EN));
          break;
        default:
          changeLanguage(Constants.LANGUAGE.EN);
          dispatch(setLang(Constants.LANGUAGE.EN));
          break;
      }
    };
    setLanguage();
  }, [dispatch]);

  const navigate = React.useCallback(
    async screen => {
      try {
        await isNetworkConnected();
        setTimeout(() => {
          props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'HomePage' },
              ],
            })
          );
        }, 1000);
      } catch (error) {
        Alert.alert(
          'Warning',
          'It seems that you are offline, please turn on cellular data to continue.',
          [{ text: 'OK', onPress: () => BackHandler.exitApp() }],
          { cancelable: false },
        );
      }
    },
    [props],
  );

  return (
    <View style={Styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default SplashScreenPage;
