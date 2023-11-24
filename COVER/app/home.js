import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Swiper from 'react-native-swiper';

const home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.hamburgerBtn}>
                <View style={styles.hamburgerBtnLine}></View>
                <View style={styles.hamburgerBtnLine}></View>
                <View style={styles.hamburgerBtnLine}></View>
            </View>

            <Swiper style={styles.swiper} dotStyle={styles.dotStyle} activeDotStyle={styles.activeDotStyle}>
                <View>
                <Text>home1</Text>
                </View>
                <View>
                <Text>home2</Text>
                </View>
                <View>
                <Text>home3</Text>
                </View>
            </Swiper>

            <View>
                <Text>Bottom Elements</Text>
            </View>
            
{/* 
            <Link href='/profile?user=myamya'>Go to profile</Link>

            <Link href={{
                pathname: '/profile',
                params: {name: "jina"}
            }}>Go to the profile</Link> */}
        </View>
    )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20,
    },
    hamburgerBtn: {
        width: 20,
        height: 12,
        marginTop: 60,
        justifyContent: 'space-between',
    },
    hamburgerBtnLine: {
        width: 20,
        height: 0,
        borderTopWidth: 2,
        borderColor: 'black',
    },
    swiper: {
        height: 110,
        marginTop: 40,
        borderBottomWidth: 1,
    },
    dotStyle: {
        marginTop: -1280,
    },
    activeDotStyle: {
        marginTop: -1280
    }

})