import AsyncStorage from '@react-native-community/async-storage';
import I18n from 'i18next';

const changeLanguage = async lang => {
  AsyncStorage.setItem('userLanguage', lang);
  await I18n.changeLanguage(lang, () => {
    return I18n.changeLanguage(lang);
  });
};

export { changeLanguage };
