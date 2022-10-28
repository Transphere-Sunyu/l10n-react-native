import i18n from 'i18next';
import * as Localization from 'expo-localization';
import {initReactI18next} from "react-i18next";

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector

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
    .init({
        fallbackLng: 'en-US',
        compatibilityJSON: 'v3',
        lng:Localization.locale,
        // the translations
        // realworld load that via xhr or bundle those using webpack
        resources: {
            'en-US': {
                translation: {
                    home_title_1: "Meeting scheduling",
                    home_title_2: "made easy",
                    header_title_home: 'Home',
                    header_title_lang: 'Change Language',
                    home_button_text: 'Change Language',
                    home_body: "Never miss a meeting. Never be late for one too. Keep track of your meetings and receive smart reminders in appropriate times. Read your smart “Daily Agenda” every morning.",


                }
            },
            'zh-Hans-CN': {
                translation: {
                    home_title_1: "会议安排",
                    home_title_2: "变得容易",
                    header_title_home: '主页',
                    header_title_lang: '语言',
                    home_button_text: '改变语言',
                    home_body: "永远不要错过会议。也不要迟到。跟踪您的会议并在适当的时间收到智能提醒。每天早上阅读您的智能“每日议程”。",

                }
            },
            // have a initial namespace
            ns: ['translation'],
            supportedLngs: [
                {
                    code: 'en-US',
                    locale: 'English'
                }, {
                    code: 'zh-Hans-CN',
                    locale: 'Chinese (Simplified)'
                }
            ],
            defaultNS: 'translation',
            interpolation: {
                escapeValue: false // not needed for react
            }
        }
    })
export default i18n;