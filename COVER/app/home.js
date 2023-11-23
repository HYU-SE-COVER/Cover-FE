import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const home = () => {
    return (
        <View>
            <Text>home</Text>

            <Link href='/profile?user=myamya'>Go to profile</Link>

            <Link href={{
                pathname: '/profile',
                params: {name: "jina"}
            }}>Go to the profile</Link>
        </View>
    )
}

export default home

const styles = StyleSheet.create({})