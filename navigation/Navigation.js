import Home from "../screens/Home";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Languages from "../screens/Languages";
import {useTranslation} from "react-i18next";

const Stack = createNativeStackNavigator();


export default function Navigation() {
    const {t} = useTranslation()


    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"
                              options={{title: t('header_title_home')}}
                              component={Home}/>
                <Stack.Screen name="Languages"
                              options={{title: t('header_title_lang')}}
                              component={Languages}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

