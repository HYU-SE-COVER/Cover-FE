import { Pressable, StyleSheet, Text, View, TextInput, ActivityIndicator } from 'react-native';
import {React, useState, useEffect} from 'react';
import { Link, useRouter, useLocalSearchParams, Stack } from 'expo-router';

function IRremote () {
    const router = useRouter();

    const [startedMatching, setStartedMatching] = useState(false);
    const [isMatching, setIsMatching] = useState(false);

    function startMatching() {
        setStartedMatching(true);
    }

    function Match() {
        setIsMatching(true);
    }

    useEffect(() => {
        let timer;
        if (isMatching) {
          timer = setTimeout(() => {
            setIsMatching(false);
          }, 3000);
        }
    
        return () => clearTimeout(timer); // 컴포넌트가 언마운트되거나 isVisible이 변경될 때 타이머 정리
      }, [isMatching]);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{title: 'IR 자동 연결'}}
            />
            
            <View>
                <Text style={styles.orderText}>1. IR 기기의 리모컨을 LG COVER 근처에 둡니다.</Text>
                <Text style={styles.orderText}>2. 리모컨과 LG COVER 사이에 장애물이 없게 해주세요.</Text>
            </View>

            <Pressable style={({pressed}) => [btnStyles.matchingButton, pressed && btnStyles.pressedItem]}
                onPress={startMatching}>
                <View>
                    <Text style={btnStyles.btnText}>매칭시작</Text>
                </View>
            </Pressable>

            {startedMatching && !isMatching &&
            (<View style={controllerStyles.controllerContainer}>
                <View style={controllerStyles.signalDot}></View>
                <View style={controllerStyles.btnContainer}>
                    <Pressable onPress={Match}>
                        <View style={controllerStyles.controllerBtn}><Text style={controllerStyles.controllerBtnText}>ON</Text></View>
                    </Pressable>
                    <View style={controllerStyles.controllerTextContainer}><Text style={controllerStyles.controllerBtnText}>전원</Text></View>
                    <Pressable onPress={Match}>
                        <View style={controllerStyles.controllerBtn}><Text style={controllerStyles.controllerBtnText}>OFF</Text></View>
                    </Pressable>
                </View>
                <View style={controllerStyles.btnContainer}>
                    <Pressable onPress={Match}>
                        <View style={controllerStyles.controllerBtn}><Text style={controllerStyles.controllerBtnText}>+</Text></View>
                    </Pressable>
                    <View style={controllerStyles.controllerTextContainer}><Text style={controllerStyles.controllerBtnText}>밝기</Text></View>
                    <Pressable onPress={Match}>
                        <View style={controllerStyles.controllerBtn}><Text style={controllerStyles.controllerBtnText}>-</Text></View>
                    </Pressable>
                </View>
                <View style={controllerStyles.btnContainer}>
                    <Pressable onPress={Match}>
                        <View style={controllerStyles.controllerBtn}><Text style={controllerStyles.controllerBtnText}>+</Text></View>
                    </Pressable>
                    <View style={controllerStyles.controllerTextContainer}><Text style={controllerStyles.controllerBtnText}>색 온도</Text></View>
                    <Pressable onPress={Match}>
                        <View style={controllerStyles.controllerBtn}><Text style={controllerStyles.controllerBtnText}>-</Text></View>
                    </Pressable>
                </View>
                <View style={controllerStyles.btnContainer}>
                    <View style={controllerStyles.controllerBtn}></View>
                    <View style={controllerStyles.controllerBtn}></View>
                    <View style={controllerStyles.controllerBtn}></View>
                </View>
            </View>)}

            {isMatching && 
            (<View style={loadingCircle.container}>
                <ActivityIndicator size="large"style={{ transform: [{ scaleX: 4 }, { scaleY: 4 }] }} color={'black'} />
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
        padding: 13
    },
    pressedItem: {
        opacity: 0.7
    },
    btnText: {
        fontSize: 14,
        fontWeight: '600',
        
    }
});

const controllerStyles = StyleSheet.create({
    controllerContainer: {
        width: '100%',
        height: 566,
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
        backgroundColor: 'rgba(213, 38, 38, 0.6)',
        marginBottom: 40
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
    

});

const loadingCircle = StyleSheet.create({
    container: {
        width: '100%',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
  