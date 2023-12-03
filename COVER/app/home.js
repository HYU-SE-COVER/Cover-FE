import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';
import Swiper from 'react-native-swiper';
import Axios from 'axios';

import MenuBtn from '../components/MenuBtn';
import NavigationSwiper from '../components/NavigationSwiper';

const BedroomArr = [
    {name: '전등', onoff: '꺼짐', state: '', deviceImg: require('./images/devices/light.png'), networkImg: require('./images/matter2.png'), isActive: false},
    {name: '에어컨', onoff: '꺼짐', state: '23°C 냉방', deviceImg: require('./images/devices/airconditioner.png'), networkImg: require('./images/ir2.png'), isActive: false},
    {name: 'TV', onoff: '꺼짐', state: 'YouTube 시청 중', deviceImg: require('./images/devices/tv.png'), networkImg: require('./images/matter2.png'), isActive: false},
    {name: '공기청정기', onoff: '켜짐', state: '공기질 좋음', deviceImg: require('./images/devices/airpurifier.png'), networkImg: require('./images/thinq.png'), isActive: true},
    {name: '와인 셀러', onoff: '켜짐', state: '16°C', deviceImg: require('./images/devices/winecellar.png'), networkImg: require('./images/thinq.png'), isActive: true},
    {name: '청소기', onoff: '꺼짐', state: '충전중', deviceImg: require('./images/devices/vaccumcleaner.png'), networkImg: require('./images/thinq.png'), isActive: false},
    {name: '세탁기', onoff: '꺼짐', state: '오후 6시에 예약', deviceImg: require('./images/devices/washingmachine.png'), networkImg: require('./images/thinq.png'), isActive: false},
];


const prototypeimg = [require('./images/thinq.png'), require('./images/matter2.png'), require('./images/ir2.png')];
const iconimge = [require('./images/devices/light.png'), require('./images/devices/airconditioner.png'), require('./images/devices/tv.png'), require('./images/devices/airpurifier.png'), 
require('./images/devices/winecellar.png'), require('./images/devices/vaccumcleaner.png'), require('./images/devices/washingmachine.png')];


const home = () => {    
    const [livingroomArr, setLivingroomArr] = useState([]);

    const getDevices = () => {
        Axios.get('http://192.168.35.239:5000/home')
        .then(res => {
            setLivingroomArr(res.data);
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        getDevices();
    }, []);


    const toggleDevice = (id) => {
        Axios.post(`http://192.168.35.239:5000/togglepower/${id}`)
        .then(res => {
            setLivingroomArr(res.data);
            console.log(res.data);
        })
        .catch(error => console.log(error));
    };

    return (
        <View style={styles.container}>
            <MenuBtn/>

            <ScrollView>
                <NavigationSwiper/>
                <View >
                    <Text style={styles.userHome}>송우정 홈</Text>
                </View>
                <View >
                    <Text style={styles.roomName}>거실 - COVER</Text>
                    <View style={styles.coverRoomContainer}>
                        {livingroomArr.map((item, index) => (
                            <Pressable key={item.id} onPress={() => toggleDevice(item.id)}>
                                <View style={[styles.deviceBlock, item.isActive ? styles.activeDevice : styles.inactiveDevice]}>
                                    <Image style={styles.deviceImage} source={iconimge[item.deviceImg]}/>
                                    <Text style={styles.deviceNameText}>{item.name}</Text>
                                    <Text style={styles.deviceOnOffText}>{item.onoff}</Text>
                                    <Text style={styles.deviceStateText}>{item.state}</Text>
                                    <Image style={styles.networkImage} source={prototypeimg[item.networkImg]} />
                                </View>
                            </Pressable>
                        ))}
                        <Pressable style={({pressed}) => [{}, pressed && styles.pressedItem]}
                            onPress={() => router.push('./register/RegisterDevice')}>
                            <View key={"addDeviceBlock1"} style={[styles.deviceBlock, styles.addDeviceBlock]}>
                                <Image source={require('./images/devices/plus.png')} style={styles.plus}/>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <View >
                    <Text style={styles.roomName}>안방</Text>
                    <View style={styles.coverRoomContainer}>
                        {BedroomArr.map((item, index) => (
                            <View key={index} style={[styles.deviceBlock, item.isActive ? styles.activeDevice : styles.inactiveDevice]}>
                                <Image style={styles.deviceImage} source={item.deviceImg}/>
                                <Text style={styles.deviceNameText}>{item.name}</Text>
                                <Text style={styles.deviceOnOffText}>{item.onoff}</Text>
                                <Text style={styles.deviceStateText}>{item.state}</Text>
                                <Image style={styles.networkImage} source={item.networkImg} />
                            </View>
                        ))}
                        <View key={"addDeviceBlock1"} style={[styles.deviceBlock, styles.addDeviceBlock]}>
                            <Image source={require('./images/devices/plus.png')} style={styles.plus}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20,
    },
    userHome: {
        fontSize: 17,
        fontWeight: '700',
        marginVertical: 10
    },
    roomName: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 10,
        marginVertical: 5
    },
    coverRoomContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: 390,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20
    },
    deviceBlock: {
        width: 180,
        height: 100,
        borderRadius: 10, 
        backgroundColor: 'white',
        padding: 10,
        margin: 7,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset:  {width: 0, height: 4},
        borderWidth: 2,
        borderColor: 'white',
    },
    activeDevice: {
        backgroundColor: 'white'
    },
    inactiveDevice: {
        backgroundColor: 'rgb(210, 210, 210)'
    },
    deviceImage: {
        resizeMode: 'contain',
        height: 25,
        width: 'auto',
        marginLeft: -130,
        marginBottom: 5
    },
    deviceNameText: {
        position: 'absolute',
        top: 40,
        left: 10,
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 4
    },
    deviceOnOffText: {
        position: 'absolute',
        top: 55,
        left: 10,
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.5)',
        marginVertical: 1.5
    },
    deviceStateText: {
        position: 'absolute',
        top: 69,
        left: 10,
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.5)',
        marginVertical: 1.5
    },
    networkImage: {
        // position: 'absolute',
        resizeMode: 'contain',
        height: 20,
        width: 'auto',
        // marginTop: -15,
        // marginRight: -145,
        marginTop: 30,
        marginRight: -140
    },
    addDeviceBlock: {
        opacity: 0.75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    plus: {
        height: 60,
        width: 60
    },
    pressedItem: {
        opacity: 0.7
    }
});
