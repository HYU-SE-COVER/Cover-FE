import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Link, useRouter, useLocalSearchParams, Stack } from 'expo-router';

function RegisterIR () {
    const router = useRouter();

    const optionsArr = [
        {name: "에어컨", img: require('../images/matter.png')},
        {name: "전등", img: require('../images/matter.png')},
        {name: "공기청정기", img: require('../images/matter.png')},
        {name: "TV", img: require('../images/matter.png')},
        {name: "청소기", img: require('../images/matter.png')},
        {name: "세탁기", img: require('../images/matter.png')},
        {name: "프로젝터", img: require('../images/matter.png')},
        {name: "스피커", img: require('../images/matter.png')},
        {name: "카메라", img: require('../images/matter.png')},
        {name: "로봇 청소기", img: require('../images/matter.png')},
        {name: "건조기", img: require('../images/matter.png')},
        {name: "기타", img: require('../images/matter.png')},
    ];
    
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{title: '기기 선택'}}
            />

            <Pressable onPress={() => router.push('/register/registerLGdb')} style={nextBtn.otherOptionsBtn}>
                <View>
                    <Text style={nextBtn.btnMainText}>LG 리모컨 설정 가져오기</Text>
                </View>
                <View><Text style={nextBtn.arrow}>{'>'}</Text></View>
            </Pressable>

            <View style={styles.optionsContainer}>
                <Text style={styles.sectionName}>적외선 리모컨</Text>
                <View style={styles.sectionLine}></View>
                <View style={styles.optionItemContainer}>
                    {optionsArr.map((item, index) => (
                        <View key={index}>
                            <Pressable onPress={() => router.push('/register/IRremote')}>
                                <View style={styles.deviceBlock}>
                                    <Image style={styles.deviceImage} source={item.img} />
                                    <Text style={styles.deviceNameText}>{item.name}</Text>
                                </View>
                            </Pressable>
                        </View>
                    ))}                        
                </View>
            </View>
        </View>
        
    )
}

export default RegisterIR;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20,
    },
    optionsContainer: {
        width: '100%',
        borderRadius: 15,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth: 1,
        padding: 20
    },
    sectionName: {
        fontSize: 16,
        fontWeight: '600',
    },
    sectionLine: {
        width: 350,
        height: 1,
        marginVertical: 10,
        backgroundColor: 'black',
        opacity: 0.2
    },
    optionItemContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    deviceBlock: {
        width: 100,
        height: 100,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset:  {width: 0, height: 4},
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 9
    },
    deviceNameText: {
        fontSize: 14,
        fontWeight: '600'
    },
    deviceImage: {
        width: 30, 
        height: 30
    }
    
});

const nextBtn = StyleSheet.create({
    otherOptionsBtn: {
        width: '100%',
        height: 75,
        borderRadius: 15,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: 'row',
        marginBottom: 20
    },
    btnMainText: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 8.5
    },
    arrow: {
        fontSize: 20,
        lineHeight: 40,
        transform: [{scaleY: 2}],
        fontWeight: '200',
        marginTop: -5.5
    }
});