import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, router, useLocalSearchParam, Stack } from 'expo-router';

const Applehome = () => {
    
    return (
        <View>
            <Stack.Screen
                options={{title: 'Matter를 이용해 연결하기'}}
            />
            <Text>applehome</Text>

            
        </View>
    )
}

export default Applehome;

const styles = StyleSheet.create({})