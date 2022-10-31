import i18n from 'i18next';
import * as Localization from 'expo-localization';
import {initReactI18next} from "react-i18next";
import Backend from "i18next-service-backend";


const languages = ['en-US', 'zh-Hans-CN']

const backend = {
    // service url to the backend service
    // i.e. https://api.spacetranslate.com or https://api.locize.io
    service: 'https://api.locize.io',

    // the id of your project
    projectId: LOCIZE_PROJECT_ID,

    // add an api key if you want to send missing keys
    apiKey: LOCIZE_API_KEY,

    // the reference language of your project
    referenceLng: 'en-US',

    // version - defaults to latest
    version: 'latest'
}
const languageDetector = {
    type: 'languageDetector',
    async: true, // async detection
    detect: (callback) => {
        // We will get back a string like "en-US".
        callback(Localization.locale);

    },

    init: () => {
    },

    cacheUserLanguage: () => {
    },
};


i18n
    .use(initReactI18next)
    .use(languageDetector)
    .use(Backend)
    .init({
        fallbackLng: 'en-US',
        compatibilityJSON: 'v3',
        lng: Localization.locale,
        backend: backend,
        preload: languages,
        supportedLngs: languages


        // the translations
        // realworld load that via xhr or bundle those using webpack

    })
export default i18n;