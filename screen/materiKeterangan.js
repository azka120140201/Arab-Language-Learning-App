import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch

const materiKeterangan = ({ navigation }) => {
    const words = [
        { arabic: 'الآن', translation: 'sekarang' },
        { arabic: 'غدًا', translation: 'besok' },
        { arabic: 'أمس', translation: 'kemarin' },
        { arabic: 'قريبًا', translation: 'segera' },
        { arabic: 'بالأمس', translation: 'dulu' },
        { arabic: 'ثم', translation: 'kemudian' },
        { arabic: 'حاليًا', translation: 'saat ini' },
        { arabic: 'بعد ذلك', translation: 'setelah itu' },
        { arabic: 'قبل ذلك', translation: 'sebelum itu' },
        { arabic: 'أيضًا', translation: 'juga' },
        { arabic: 'فقط', translation: 'hanya' },
        { arabic: 'كثيرًا', translation: 'banyak' },
        { arabic: 'قليلاً', translation: 'sedikit' },
        { arabic: 'على الفور', translation: 'segera' },
        { arabic: 'بصوت عالٍ', translation: 'dengan keras' },
        { arabic: 'سريعًا', translation: 'cepat' },
        { arabic: 'ببطء', translation: 'lambat' },
        { arabic: 'تمامًا', translation: 'sepenuhnya' },
        { arabic: 'على الأقل', translation: 'setidaknya' },
        { arabic: 'بشكل صحيح', translation: 'dengan benar' },
    ].sort((a, b) => a.arabic.localeCompare(b.arabic));

    const displayedWords = words.slice(0, 20); // Display only the first 20 words

    const dispatch = useDispatch();
    const containerColor = useSelector((state) => state.containerColor);

    const handleScroll = (event) => {
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height;

        if (isEndReached) {
            dispatch({ type: 'SET_CONTAINER_COLOR', payload: '#F9F6EE' });
        } else {
            dispatch({ type: 'SET_CONTAINER_COLOR', payload: '#F9F6EE' });
        }
    };

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
                <Text style={styles.title}>Kata-kata Keterangan Bahasa Arab</Text>
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

export default materiKeterangan;
