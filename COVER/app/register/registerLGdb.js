import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { Link, useRouter, useLocalSearchParams, Stack } from 'expo-router';

function RegisterLGdb () {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{title: 'LG 리모컨'}}
            />
            
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} placeholder='기기의 일련번호를 입력하세요'/>
            </View>

            <View style={styles.dbResultContainer}></View>

            
        </View>
    )
}

export default RegisterLGdb;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20,
    },
    textInputContainer: {
        width: '100%',
        height: 30,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 7,
        borderRadius: 15
    },
    textInput: {
        fontSize: 16,
        marginLeft: 9
    },
    dbResultContainer: {
        width: '100%',
        height: 700,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 7,
        borderRadius: 15,
        marginTop: 15
    }
})