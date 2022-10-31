import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";
import Navigation from "./navigation/Navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import React from "react";

export default function App() {
    return (
        <React.Suspense>
            <I18nextProvider i18n={i18n}>
            <SafeAreaProvider>
                <Navigation/>
            </SafeAreaProvider>
        </I18nextProvider>
        </React.Suspense>
    );
}

