import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { React, useState, useEffect } from 'react';
import { Link, router, useLocalSearchParam, Stack } from 'expo-router';
import Axios from 'axios';

import GetURL from './../components/GetURL';

const prototypeimg = [require('./../../assets/images/thinq.png'), require('./../../assets/images/matter2.png'), require('./../../assets/images/ir2.png')];
const iconimge = [require('./../../assets/images/devices/light.png'), require('./../../assets/images/devices/airconditioner.png'), require('./../../assets/images/devices/tv.png'), require('./../../assets/images/devices/airpurifier.png'), 
require('./../../assets/images/devices/winecellar.png'), require('./../../assets/images/devices/vaccumcleaner.png'), require('./../../assets/images/devices/washingmachine.png')];

const Applehome = () => {
    const [livingroomArr, setLivingroomArr] = useState([]);

    const getDevices = () => {
        const baseurl = GetURL();
        Axios.get(baseurl + '/home')
        .then(res => {
            setLivingroomArr(res.data);
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        getDevices();
    }, []);
    
    return (
        <View style={styles.container}>
            <ScrollView>

                <Stack.Screen
                    options={{title: 'Matter를 이용해 연결하기'}}
                />
                
                <View style={qrBlock.container}>
                    <View style={qrBlock.header}>
                        <Image source={require('./../../assets/images/matter2.png')} style={qrBlock.headerImg}/>
                        <Text style={qrBlock.headerText}>Matter 자동 연결하기</Text>
                        <Text style={qrBlock.headerArrow}>{'>'}</Text>
                    </View>
                    <View style={qrBlock.headerLine}></View>
                    <View style={qrBlock.qrContainer}><Image source={require('./../../assets/images/qrcode.png')} style={qrBlock.qrcode}/></View>
                    <View style={qrBlock.codeNumContainer}><Text style={qrBlock.codeNum}>0016-475-8724</Text></View>
                    <View style={qrBlock.saveContainer}>
                        <View style={qrBlock.saveCopyContainer}>
                            <Image source={require('./../../assets/images/etc/saveQR.png')} style={qrBlock.saveCopyImg}/>
                            <Text style={qrBlock.saveCopyText}>QR 저장</Text>
                        </View>
                        <View style={qrBlock.saveCopyContainer}>
                        <Image source={require('./../../assets/images/etc/copyCode.png')} style={qrBlock.saveCopyImg}/>
                            <Text style={qrBlock.saveCopyText}>코드 복사</Text>
                        </View>
                    </View>
                </View>

                <View style={connectedBlock.container}>
                    <View style={connectedBlock.header}>
                        <Image source={require('./../../assets/images/matter2.png')} style={qrBlock.headerImg}/>
                        <Text style={qrBlock.headerText}>거실 COVER에 연결된 기기</Text>
                        <Text style={connectedBlock.headerArrow}>{'>'}</Text>
                    </View>
                    <View style={qrBlock.headerLine}></View>

                    <View style={connectedBlock.coverRoomContainer}>
                        {livingroomArr.map((item, index) => (
                            <View key={index} style={connectedBlock.deviceBlock}>
                                <Image style={connectedBlock.deviceImage} source={iconimge[item.deviceImg]}/>
                                <Text style={connectedBlock.deviceNameText}>{item.name}</Text>
                                <Text style={connectedBlock.deviceOnOffText}>{item.onoff}</Text>
                                <Text style={connectedBlock.deviceStateText}>{item.state}</Text>
                                <Image style={connectedBlock.networkImage} source={prototypeimg[item.networkImg]} />
                            </View>
                        ))}
                    </View>

                </View>
            </ScrollView>
            
        </View>
    )
}

export default Applehome;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const qrBlock = StyleSheet.create({
    container: {
        width: '100%',
        height: 360,
        backgroundColor: 'rgba(58, 117, 230, 0.15)',
        borderRadius: 15,
        padding: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    headerImg: {
        width: 35,
        height: 35
    },
    headerText: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 5
    },
    headerArrow: {
        fontSize: 20,
        fontWeight: '300',
        lineHeight: 40,
        transform: [{scaleY: 2}],
        marginTop: -5.5
    },
    headerLine: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
        marginVertical: 10
    },
    qrContainer: {
        width: 220,
        height: 220,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 69,
        padding: 10
    },
    qrcode: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    codeNumContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    codeNum: {
        color: 'white',
        fontSize: 14,
        fontWeight: '700',
        marginTop: 3
    },
    saveContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveCopyContainer: {
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveCopyImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    saveCopyText: {
        fontSize: 8,
        fontWeight: '700'
    }
});

const connectedBlock = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 15
    },
    headerArrow: {
        color: 'transparent'
    },
    coverRoomContainer: {
        width: '100%',
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
});