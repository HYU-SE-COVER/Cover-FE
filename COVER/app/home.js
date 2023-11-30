import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import Swiper from 'react-native-swiper';

const home = () => {
    // const routing = useRouter();

    const livingroomArr = [
        {name: '전등', onoff: '꺼짐', state: '', deviceImg: require('./images/devices/light.png'), networkImg: require('./images/matter.png')},
        {name: '에어컨', onoff: '켜짐', state: '23°C 냉방', deviceImg: require('./images/devices/airconditioner.png'), networkImg: require('./images/ir.png')},
        {name: 'TV', onoff: '꺼짐', state: 'YouTube 시청 중', deviceImg: require('./images/devices/tv.png'), networkImg: require('./images/matter.png')},
        {name: '공기청정기', onoff: '켜짐', state: '공기질 좋음', deviceImg: require('./images/devices/airpurifier.png'), networkImg: require('./images/thinq.png')},
        {name: '와인 셀러', onoff: '켜짐', state: '16°C', deviceImg: require('./images/devices/winecellar.png'), networkImg: require('./images/matter.png')},
        {name: '청소기', onoff: '꺼짐', state: '충전중', deviceImg: require('./images/devices/vaccumcleaner.png'), networkImg: require('./images/thinq.png')},
        {name: '세탁기', onoff: '꺼짐', state: '오후 6시에 예약', deviceImg: require('./images/devices/washingmachine.png'), networkImg: require('./images/thinq.png')},

    ];

    return (
        <View style={styles.container}>
            <View style={styles.hamburgerBtn}>
                <View style={styles.hamburgerBtnLine}></View>
                <View style={styles.hamburgerBtnLine}></View>
                <View style={styles.hamburgerBtnLine}></View>
            </View>

            <ScrollView>
                <Swiper style={SwiperStyles.swiper} dotStyle={SwiperStyles.dotStyle} activeDotStyle={SwiperStyles.activeDotStyle}>
                    <View>
                        <Text style={SwiperStyles.swiperText}>COVER를 등록해주세요.</Text>
                        <Pressable style={({pressed}) => [SwiperStyles.coverRegisterButtonContainer, pressed && SwiperStyles.pressedItem]}
                            onPress={() => router.push('/register/registerDevice')}>
                            <View>
                                <Text style={SwiperStyles.coverRegisterButton}>제품 등록하기</Text>
                            </View>
                        </Pressable>
                    </View>
                    <View>
                        <Text style={SwiperStyles.swiperText}>Apple Home에 한 번에 연결해보세요.</Text>
                        <Pressable style={({pressed}) => [SwiperStyles.coverRegisterButtonContainer, pressed && SwiperStyles.pressedItem]}
                            onPress={() => router.push('./register/applehome')}>
                            <View>
                                <Text style={SwiperStyles.coverRegisterButton}>한 번에 연결</Text>
                            </View>
                        </Pressable>
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                </Swiper>
                <View >
                    <Text style={styles.userHome}>송우정 홈</Text>
                </View>
                <View >
                    <Text style={styles.roomName}>거실 - COVER</Text>
                    <View style={styles.coverRoomContainer}>
                        {livingroomArr.map((item, index) => (
                            <View key={index} style={styles.deviceBlock}>
                                <Image style={styles.deviceImage} source={item.deviceImg}/>
                                <Text style={styles.deviceNameText}>{item.name}</Text>
                                <Text style={styles.deviceStateText}>{item.onoff}</Text>
                                <Text style={styles.deviceStateText}>{item.state}</Text>
                                <Image style={styles.networkImage} source={item.networkImg} />
                            </View>
                        ))}
                        <View key={"addDeviceBlock1"} style={[styles.deviceBlock, styles.addDeviceBlock]}>
                            
                        </View>
                    </View>
                </View>
                <View >
                    <Text style={styles.roomName}>안방</Text>
                    <View style={styles.coverRoomContainer}>
                        {livingroomArr.map((item, index) => (
                            <View key={index} style={styles.deviceBlock}>
                                <Image style={styles.deviceImage} source={item.deviceImg}/>
                                <Text style={styles.deviceNameText}>{item.name}</Text>
                                <Text style={styles.deviceStateText}>{item.onoff}</Text>
                                <Text style={styles.deviceStateText}>{item.state}</Text>
                                <Image style={styles.networkImage} source={item.networkImg} />
                            </View>
                        ))}
                        <View key={"addDeviceBlock1"} style={[styles.deviceBlock, styles.addDeviceBlock]}>
                            
                        </View>
                    </View>
                </View>
            </ScrollView>
            
            
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
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    hamburgerBtnLine: {
        width: 20,
        height: 0,
        borderTopWidth: 2,
        borderColor: 'black',
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
        backgroundColor: '#ffffff',
        padding: 10,
        margin: 7,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset:  {width: 0, height: 4},
    },
    addDeviceBlock: {
        opacity: 0.75
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
        height: 25,
        width: 'auto',
        marginTop: -20,
        marginRight: -130
    }
});

const SwiperStyles = StyleSheet.create({
    swiper: {
        height: 110,
        marginTop: 20,
        borderBottomWidth: 1,
    },
    dotStyle: {
        margin: 5,
        marginBottom: -20
    },
    activeDotStyle: {
        margin: 5,
        marginBottom: -20
    },
    swiperText: {
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 10
    },
    coverRegisterButtonContainer: {
        width: 100,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset:  {width: 0, height: 4},
        marginLeft: 10,
        marginTop: 10
    },
    pressedItem: {
        opacity: 0.7
    }
});