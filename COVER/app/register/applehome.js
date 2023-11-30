import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { Link, router, useLocalSearchParam, Stack } from 'expo-router';

const Applehome = () => {

    const livingroomArr = [
        {name: '전등', onoff: '꺼짐', state: '', deviceImg: require('./../images/devices/light.png'), networkImg: require('./../images/matter2.png')},
        {name: '에어컨', onoff: '켜짐', state: '23°C 냉방', deviceImg: require('./../images/devices/airconditioner.png'), networkImg: require('./../images/ir2.png')},
        {name: 'TV', onoff: '꺼짐', state: 'YouTube 시청 중', deviceImg: require('./../images/devices/tv.png'), networkImg: require('./../images/matter2.png')},
        {name: '공기청정기', onoff: '켜짐', state: '공기질 좋음', deviceImg: require('./../images/devices/airpurifier.png'), networkImg: require('./../images/thinq.png')},
        {name: '와인 셀러', onoff: '켜짐', state: '16°C', deviceImg: require('./../images/devices/winecellar.png'), networkImg: require('./../images/matter2.png')},
        {name: '청소기', onoff: '꺼짐', state: '충전중', deviceImg: require('./../images/devices/vaccumcleaner.png'), networkImg: require('./../images/thinq.png')},
        {name: '세탁기', onoff: '꺼짐', state: '오후 6시에 예약', deviceImg: require('./../images/devices/washingmachine.png'), networkImg: require('./../images/thinq.png')},

    ];
    
    return (
        <View style={styles.container}>
            <ScrollView>

                <Stack.Screen
                    options={{title: 'Matter를 이용해 연결하기'}}
                />
                
                <View style={qrBlock.container}>
                    <View style={qrBlock.header}>
                        <Image source={require('./../images/matter2.png')} style={qrBlock.headerImg}/>
                        <Text style={qrBlock.headerText}>Matter 자동 연결하기</Text>
                        <Text style={qrBlock.headerArrow}>{'>'}</Text>
                    </View>
                    <View style={qrBlock.headerLine}></View>
                    <View style={qrBlock.qrContainer}><Image source={require('./../images/qrcode.png')} style={qrBlock.qrcode}/></View>
                    <View style={qrBlock.codeNumContainer}><Text style={qrBlock.codeNum}>0016-475-8724</Text></View>
                    <View style={qrBlock.saveContainer}>
                        <View style={qrBlock.saveCopyContainer}>
                            <Image source={require('./../images/etc/saveQR.png')} style={qrBlock.saveCopyImg}/>
                            <Text style={qrBlock.saveCopyText}>QR 저장</Text>
                        </View>
                        <View style={qrBlock.saveCopyContainer}>
                        <Image source={require('./../images/etc/copyCode.png')} style={qrBlock.saveCopyImg}/>
                            <Text style={qrBlock.saveCopyText}>코드 복사</Text>
                        </View>
                    </View>
                </View>

                <View style={connectedBlock.container}>
                    <View style={connectedBlock.header}>
                        <Image source={require('./../images/matter2.png')} style={qrBlock.headerImg}/>
                        <Text style={qrBlock.headerText}>거실 COVER에 연결된 기기</Text>
                        <Text style={connectedBlock.headerArrow}>{'>'}</Text>
                    </View>
                    <View style={qrBlock.headerLine}></View>

                    <View style={connectedBlock.coverRoomContainer}>
                        {livingroomArr.map((item, index) => (
                            <View key={index} style={connectedBlock.deviceBlock}>
                                <Image style={connectedBlock.deviceImage} source={item.deviceImg}/>
                                <Text style={connectedBlock.deviceNameText}>{item.name}</Text>
                                <Text style={connectedBlock.deviceStateText}>{item.onoff}</Text>
                                <Text style={connectedBlock.deviceStateText}>{item.state}</Text>
                                <Image style={connectedBlock.networkImage} source={item.networkImg} />
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
        backgroundColor: '#ffffff',
        padding: 10,
        margin: 7,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset:  {width: 0, height: 4},
    },
    deviceImage: {
        resizeMode: 'contain',
        height: 25,
        width: 'auto',
        marginLeft: -130,
        marginBottom: 5
    },
    deviceNameText: {
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 4
    },
    deviceStateText: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.5)',
        marginVertical: 1.5
    },
    networkImage: {
        resizeMode: 'contain',
        height: 20,
        width: 'auto',
        marginTop: -15,
        marginRight: -145,
    },
});