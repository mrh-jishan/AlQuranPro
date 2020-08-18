import I18n from 'i18next';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Header } from '../Components';
import { About, QuranDetail, QuranList, Settings, SplashScreen } from '../Pages';
import { Colors } from '../Themes/Colors';
import { FontType } from '../Themes/Fonts';


const AppStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
    },
    AboutPage: {
      screen: About,
    },
    SettingsPage: {
      screen: Settings,
    },
    QuranList: {
      screen: QuranList,
      navigationOptions: {
        header: props => (
          <Header title={I18n.t('AppTitle')} {...props} />
        ),
      },
    },
    QuranDetail: {
      screen: QuranDetail,
    },
  },
  {
    defaultNavigationOptions: {
      headerPressColorAndroid: Colors.rippleColor,
      headerStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.iron,
        elevation: 0,
      },
      headerTitleStyle: {
        fontFamily: FontType.semiBold,
        fontSize: 18,
        marginLeft: 0,
      },
      headerTintColor: Colors.black,
    },
  },
);

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
