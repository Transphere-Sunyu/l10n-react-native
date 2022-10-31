import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from "react-i18next";


export default function Languages() {
    const {i18n} = useTranslation()
    // Supported Languages List

    const supportedLngs = Object.keys(i18n.services.resourceStore.data);


    return (

        <View style={styles.container}>
            <FlatList data={supportedLngs} renderItem={({item}) => (

                <TouchableOpacity onPress={() => i18n.changeLanguage(item)} style={styles.listItem}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            )}/>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

    listItem: {
        padding: '4%',
        width: '100%',
        borderBottomWidth: 1,

    }
});


