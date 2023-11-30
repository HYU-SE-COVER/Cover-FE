import { Redirect } from 'expo-router';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';



// const fetchFonts = () => {
//     return Font.loadAsync({
//       'Inter': require('../assets/fonts/Inter.ttf'),
//     });
//   };

const index = () => {
    // const [fontLoaded, setFontLoaded] = useState(false);

    // if (!fontLoaded) {
    //     return (
    //     <AppLoading
    //         startAsync={fetchFonts}
    //         onFinish={() => setFontLoaded(true)}
    //         onError={console.warn}
    //     />
    //     );
    // }
    

    const [logoVisible, setLogoVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLogoVisible(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.lg}>LG </Text>
                <Text style={styles.cover}>COVER</Text>
            </View>
            {!logoVisible && (
                <Redirect href='auth/login'/>
            )}
        </>
    )
}

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lg: {
        color: '#6b6b6b',
        fontSize: 48,
        fontWeight: 'bold'
    },
    cover: {
        color: '#a50034',
        fontSize: 48,
        fontWeight: 'bold'
    }
})