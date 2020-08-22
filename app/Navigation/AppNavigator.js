import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import I18n from 'i18next';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { About, QuranDetail, QuranList, Settings, SplashScreen } from '../Pages';
import { Colors } from '../Themes/Colors';
import { FontType } from '../Themes/Fonts';
import { Header } from './../Components';
import { Routes } from './Routes';


const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.QuranList}
      tabBarOptions={{
        activeTintColor: '#008B8B',
        inactiveTintColor: '#2F4F4F',
        labelStyle: {
          fontSize: 12,
          margin: 1,
          padding: 0,
        },
        style: {
          backgroundColor: '#DDD',
          borderTopWidth: 0,
          marginBottom: 0,
          paddingVertical: 5,
          shadowOpacity: 0.05,
          shadowRadius: 10,
          shadowColor: '#CCC',
          shadowOffset: { height: 0, width: 0 }
        }
      }}
    >
      <Tab.Screen
        name={Routes.QuranList}
        component={QuranList}
        options={{
          tabBarLabel: 'Quran',
          tabBarIcon: ({ color }) => (
            <Icon name="book" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.SettingsPage}
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Icon name="yelp" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.AboutPage}
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <Icon name="info" color={color} size={20} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
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
        }}
        initialRouteName={Routes.SplashScreen} >
        <Stack.Screen name='HomePage' component={HomeTabs} options={{ header: (props) => <Header title={I18n.t('AppTitle')} {...props} />, }} />
        <Stack.Screen name={Routes.QuranDetail} component={QuranDetail} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} options={{ title: 'Welcome', headerLeft: () => { disabled: true }, headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



