import {Button, StyleSheet, Text, View} from 'react-native';
import {useTranslation} from "react-i18next";


export default function Home({navigation}) {
    const {t} = useTranslation()


    return (

        <View style={styles.container}>
            <Text style={{...styles.text, color: '#fff'}}>
                {t('home_title_1')}
            </Text>
            <Text style={{...styles.text, color: '#f97316'}}>
                {t('home_title_2')}
            </Text>
            <Text style={{...styles.body, color: '#fff'}}>
                {t('home_body')}
            </Text>
            <Button color={'#f97316'} title={t('home_button_text')} onPress={() => navigation.navigate('Languages')}/>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#1f2937', alignItems: 'center',
        justifyContent: 'center', padding: '5%'

    }, text: {
        fontSize: 30, fontWeight: 'bold', padding: '4%'
    }, body: {
        fontSize: 14, fontWeight: 'normal', marginBottom: '20%'
    }
});
