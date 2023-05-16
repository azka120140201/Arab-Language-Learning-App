import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const materiBenda = ({ navigation }) => {
    const [words, setWords] = useState([
        { arabic: 'مكتبة', translation: 'perpustakaan' },
        { arabic: 'قلم', translation: 'pensil' },
        { arabic: 'كتاب', translation: 'buku' },
        { arabic: 'طاولة', translation: 'meja' },
        { arabic: 'كمبيوتر', translation: 'komputer' },
        { arabic: 'مجلة', translation: 'majalah' },
        { arabic: 'سيارة', translation: 'mobil' },
        { arabic: 'ماء', translation: 'air' },
        { arabic: 'شمس', translation: 'matahari' },
        { arabic: 'باب', translation: 'pintu' },
        { arabic: 'نافذة', translation: 'jendela' },
        { arabic: 'ورقة', translation: 'kertas' },
        { arabic: 'حقيبة', translation: 'tas' },
        { arabic: 'مكتب', translation: 'meja' },
        { arabic: 'مرحاض', translation: 'toilet' },
        { arabic: 'شاشة', translation: 'layar' },
        { arabic: 'ساعة', translation: 'jam' },
        { arabic: 'قلادة', translation: 'liontin' },
        { arabic: 'مظلة', translation: 'payung' },
        { arabic: 'كعكة', translation: 'kue' },
    ].sort((a, b) => a.arabic.localeCompare(b.arabic)));

    const displayedWords = words.slice(0, 20); // Display only the first 20 words

    const handleScroll = (event) => {
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height;

        if (isEndReached) {
            // User has scrolled to the end, change the background color
            setContainerColor('#F9F6EE');
        } else {
            // User is not at the end, reset the background color
            setContainerColor('#F9F6EE');
        }
    };

    const [containerColor, setContainerColor] = useState('#F9F6EE');

    return (
        <ScrollView
            style={{ flex: 1 }}
            onScroll={handleScroll}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={[styles.container, { backgroundColor: containerColor }]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <View style={styles.backButton}>
                        <Icon name="chevron-left" size={17} color="#111" />
                        <Text style={styles.backButtonText}></Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.title}>Kata-kata Benda Bahasa Arab</Text>
                {displayedWords.map((word, index) => (
                    <View key={index} style={styles.wordContainer}>
                        <Text style={styles.arabicText}>{word.arabic}</Text>
                        <Text style={styles.translationText}>{word.translation}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'SpaceGrotesk',
        color: '#212427',
    },
    title: {
        fontFamily: 'SpaceGrotesk',
        color: '#212427',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    wordContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    arabicText: {
        fontFamily: 'SpaceGrotesk',
        fontSize: 20,
        marginRight: 10,
        backgroundColor: '#93C572',
        borderRadius: 5,
    },
    translationText: {
        color: '#212427',
        fontFamily: 'SpaceGrotesk',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default materiBenda;
