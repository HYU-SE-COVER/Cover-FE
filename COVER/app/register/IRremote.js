import { Pressable, StyleSheet, Text, View, TextInput, ActivityIndicator, Image } from 'react-native';
import {React, useState, useEffect} from 'react';
import { Link, useRouter, useLocalSearchParams, Stack } from 'expo-router';
import Axios from 'axios';

import GetURL from '../../components/GetURL';

function IRremote () {
    const router = useRouter();

    const [startedMatching, setStartedMatching] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [isMatching, setIsMatching] = useState(false);

    function startMatching() {
        setStartedMatching(true);
    }

    const params = useLocalSearchParams();

    useEffect(() => {
        let timer;
        if (startedMatching) {
          timer = setTimeout(() => {
            setStartedMatching(false);
            setShowOptions(true);
          }, 4000);
        }
    
        return () => {
            clearTimeout(timer);
            
        } // 컴포넌트가 언마운트되거나 isVisible이 변경될 때 타이머 정리
    }, [startMatching]);

    function Match() {
        setShowOptions(false);
        setIsMatching(true);
    }

    const [backgroundColor, setBackgroundColor] = useState('transparent');
    const [isBlinking, setIsBlinking] = useState(false);
    function ReceiveSignal() {
        setBackgroundColor('rgba(213, 38, 38, 0.6)');
        setIsBlinking(true);
    }
    useEffect(() => {
        let interval;
        if (isBlinking) {
            interval = setInterval(() => {}, 500);

            setTimeout(() => {
                clearInterval(interval);
                setIsBlinking(false);
                setBackgroundColor('transparent'); 
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isBlinking]);

    function goToHome(params) {
        let deviceTypeNum;
        if (params.deviceType == "에어컨") deviceTypeNum = 1;

        const baseurl = GetURL();
        Axios.post(baseurl + `/registerdevice/${deviceTypeNum}`)
        .then(res => {
            while (router.canGoBack()) {
                router.back();
            }
            router.replace('/Home');
        })
        .catch(error => console.log(error));

    }


    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{title: 'IR 자동 연결'}}
            />
            
            <View>
                <Text style={styles.orderText}>1. IR 기기의 리모컨을 LG COVER 근처에 둡니다.</Text>
                <Text style={styles.orderText}>2. 리모컨과 LG COVER 사이에 장애물이 없게 해주세요.</Text>
                {isMatching && (
                    <Text style={styles.orderText}>3. 신호를 모두 등록 후, 등록 완료 버튼을 누르세요. {'\n'}    기기 등록이 완료됩니다.</Text>
                )}
            </View>

            {!isMatching && 
            (<Pressable style={({pressed}) => [btnStyles.matchingButton, pressed && btnStyles.pressedItem]}
                onPress={startMatching}>
                <View>
                    <Text style={btnStyles.btnText}>매칭시작</Text>
                </View>
            </Pressable>)}
            {isMatching && 
            (<Pressable style={({pressed}) => [btnStyles.matchingButton, pressed && btnStyles.pressedItem]}
                onPress={() => {goToHome(params)}}>
                <View>
                    <Text style={btnStyles.btnText}>등록 완료</Text>
                </View>
            </Pressable>)}

            {startedMatching && 
            (<View style={loadingCircle.container}>
                <ActivityIndicator size="large" style={{ transform: [{ scaleX: 4 }, { scaleY: 4 }] }} color={'black'} />
                <Text style={loadingCircle.text}>매칭 중</Text>
            </View>)}

            {showOptions &&
            (<View style={controllerOptions.container}>
                <Pressable onPress={Match}>
                    <View style={controllerOptions.optionContainer}><Text style={controllerOptions.optiontext}>리모컨 1</Text></View>
                </Pressable>
                <Pressable onPress={Match}>
                    <View style={controllerOptions.optionContainer}><Text style={controllerOptions.optiontext}>리모컨 2</Text></View>
                </Pressable>
                <Pressable onPress={Match}>
                    <View style={controllerOptions.optionContainer}><Text style={controllerOptions.optiontext}>리모컨 3</Text></View>
                </Pressable>
            </View>)}

            {isMatching &&
            (<View style={controllerStyles.controllerContainer}>
                <View style={controllerStyles.signalDot} backgroundColor={backgroundColor}></View>
                <View style={controllerStyles.btnContainer}>
                    <Pressable onPress={ReceiveSignal} style={({pressed}) => [{}, pressed && controllerStyles.pressedItem]}>
                        <View style={controllerStyles.controllerBtn}><Text style={controllerStyles.controllerBtnText}>ON</Text></View>
                    </Pressable>
                    <View style={controllerStyles.controllerTextContainer}><Text style={controllerStyles.controllerBtnText}>전원</Text></View>
                    <Pressable onPress={ReceiveSignal} style={({pressed}) => [{}, pressed && controllerStyles.pressedItem]}>
                        <View style={controllerStyles.controllerBtn}><Text style={controllerStyles.controllerBtnText}>OFF</Text></View>
                    </Pressable>
                </View>
                <View style={controllerStyles.btnContainer}>
                    <Pressable onPress={ReceiveSignal} style={({pressed}) => [{}, pressed && controllerStyles.pressedItem]}>
                        <View style={controllerStyles.controllerBtn}><Text style={controllerStyles.controllerBtnText}>+</Text></View>
                    </Pressable>
                    <View style={controllerStyles.controllerTextContainer}><Text style={controllerStyles.controllerBtnText}>온도</Text></View>
                    <Pressable onPress={ReceiveSignal} style={({pressed}) => [{}, pressed && controllerStyles.pressedItem]}>
                        <View style={controllerStyles.controllerBtn}><Text style={controllerStyles.controllerBtnText}>-</Text></View>
                    </Pressable>
                </View>
                {/* <View style={controllerStyles.btnContainer}>
                    <Pressable onPress={ReceiveSignal} style={({pressed}) => [{}, pressed && controllerStyles.pressedItem]}>
                        <View style={controllerStyles.controllerBtn}><Text style={controllerStyles.controllerBtnText}>+</Text></View>
                    </Pressable>
                    <View style={controllerStyles.controllerTextContainer}><Text style={controllerStyles.controllerBtnText}>색 온도</Text></View>
                    <Pressable onPress={ReceiveSignal} style={({pressed}) => [{}, pressed && controllerStyles.pressedItem]}>
                        <View style={controllerStyles.controllerBtn}><Text style={controllerStyles.controllerBtnText}>-</Text></View>
                    </Pressable>
                </View> */}
                <View style={controllerStyles.btnContainer}>
                    <View style={controllerStyles.controllerBtn}><Image source={require('./../images/etc/option1.png')} style={controllerStyles.img}/></View>
                    <View style={controllerStyles.controllerBtn}><Image source={require('./../images/etc/option2.png')} style={controllerStyles.img}/></View>
                    <View style={controllerStyles.controllerBtn}><Image source={require('./../images/etc/option3.png')} style={controllerStyles.img}/></View>
                </View>
            </View>)}


            
        </View>
    )
}

export default IRremote;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20,
    },
    orderText: {
        fontSize: 14,
        fontWeight: '600',
        marginVertical: 10,
        marginLeft: 15
    }
    
});

const btnStyles = StyleSheet.create({
    matchingButton: {
        width: '100%',
        height: 40,
        backgroundColor: 'rgba(58, 117, 230, 0.15)',
        borderRadius: 30,
        marginTop: 12,
        marginBottom: 8,
        alignItems: 'center',
        padding: 10
    },
    pressedItem: {
        opacity: 0.7
    },
    btnText: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 3
    }
});

const controllerStyles = StyleSheet.create({
    controllerContainer: {
        width: '100%',
        height: 480,
        borderRadius: 15,
        backgroundColor: 'rgba(58, 117, 230, 0.15)',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10
    },
    signalDot: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        // backgroundColor: 'rgba(213, 38, 38, 0.6)',
        marginBottom: 25
    },
    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20
    },
    controllerTextContainer: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    controllerBtn: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    controllerBtnText: {
        fontSize: 24,
        fontWeight: '700'
    },
    pressedItem: {
        opacity: 0.3
    },
    img: {
        height: 35,
        width: 35
    }

});

const loadingCircle = StyleSheet.create({
    container: {
        width: '100%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 80,
        fontSize: 16,
        fontWeight: '600'
    }
});

const controllerOptions = StyleSheet.create({
    container: {
        width: '100%',
        height: 566,
        borderRadius: 15,
        borderColor: 'rgba(58, 117, 230, 0.15)',
        borderWidth: 3,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
    },
    optionContainer: {
        width: 360,
        height: 40,
        backgroundColor: 'rgba(58, 117, 230, 0.15)',
        borderRadius: 20,
        marginBottom: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    optiontext: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 3
    },
    
});