import { Pressable, StyleSheet, Text, View, Image, Button } from 'react-native';
import {React, useState, useEffect} from 'react';
import { Link, useRouter, useLocalSearchParams, Stack } from 'expo-router';
import {BarCodeScanner} from 'expo-barcode-scanner';
import Axios from 'axios';

function RegisterDevice () {
    const router = useRouter();

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // 
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`); // 아래 제품이 맞나요?
        if (data == "http://thinq.link/QR1?s=309RGLN00840&m=W0082GTB.AKOR") {
            setScanned(false);
            router.push('/register/RegisterThinQ');
        }
        else {
            setScanned(false);
            router.push('/register/RegisterMatter');
        }

    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{title: '거실에 제품 연결하기'}}
            />

            <View style={styles.cameraContainer}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                <View style={styles.overlayTop} />
                <View style={styles.overlayLeft} />
                <View style={styles.overlayRight} />
                <View style={styles.overlayBottom} />

                <View style={styles.scanArea}>
                    <View style={styles.borderTopLeft} />
                    <View style={styles.borderTopRight} />
                    <View style={styles.borderBottomLeft} />
                    <View style={styles.borderBottomRight} />
                </View>

                <View style={styles.orderContainer}>
                    <Text style={styles.orderText}>아래 QR을 제품에서 찾아 스캔해주세요.</Text>
                    <View style={styles.networkContainer}>
                        <View style={styles.networkImgContainer}><Image source={require('./../images/thinqQR.png')} style={styles.qrImg}/></View>
                        <View style={styles.networkImgContainer}><Image source={require('./../images/matterQR.png')} style={styles.qrImg}/></View>
                    </View>
                </View>

                <Pressable style={({pressed}) => [styles.othersBtn, pressed && styles.pressedItem]}
                    onPress={() => router.push('/register/RegisterIR')}>
                    <View>
                        <Text style={styles.othersBtnText}>QR을 찾을 수 없나요?</Text>
                    </View>
                </Pressable>

                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>

            <Pressable onPress={() => router.push('/register/RegisterIR')} style={({pressed}) => [nextBtn.otherOptionsBtn, pressed && nextBtn.pressedItem]}>
                <View>
                    <Text style={nextBtn.btnMainText}>다른 방법으로 추가할래요.</Text>
                    <Text style={nextBtn.btnSubText}>제품을 수동으로 매칭하여 직접 추가할 수 있어요.</Text>
                </View>
                <View><Text style={nextBtn.arrow}>{'>'}</Text></View>
            </Pressable>
        </View>
    )
}

export default RegisterDevice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20,
    },
    cameraContainer: {
        width: '100%',
        height: 680,
        marginBottom: 20,
        borderRadius: 15,
        overflow: 'hidden'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    scanArea: {
        position: 'absolute',
        top: 270,
        left: 70,
        width: 250,
        height: 250,
        overflow: 'hidden',
    },
    borderTopLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 45,
        height: 45,
        borderColor: 'white',
        borderTopWidth: 7,
        borderLeftWidth: 7,
    },
    borderTopRight: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 45,
        height: 45,
        borderColor: 'white',
        borderTopWidth: 7,
        borderRightWidth: 7,
    },
    borderBottomLeft: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 45,
        height: 45,
        borderColor: 'white',
        borderBottomWidth: 7,
        borderLeftWidth: 7,
    },
    borderBottomRight: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 45,
        height: 45,
        borderColor: 'white',
        borderBottomWidth: 7,
        borderRightWidth: 7,
    },
    overlayTop: {
        position: 'absolute',
        top: 0,
        height: 270,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    overlayLeft: {
        position: 'absolute',
        top: 270,
        left: 0,
        width: 70,
        height: 250,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    overlayRight: {
        position: 'absolute',
        top: 270,
        right: 0,
        width: 70,
        height: 250,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    overlayBottom: {
        position: 'absolute',
        bottom: 0,
        height: 160,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    othersBtn: {
        position: 'absolute',
        top: 570,
        left: 114,
        width: 160,
        height: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    othersBtnText: {
        fontSize: 13,
        fontWeight: '400'
    },
    pressedItem: {
        opacity: 0.7
    },
    orderContainer: {
        position: 'absolute',
        top: 90,
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 10
    },
    networkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    networkImgContainer: {
        width: 145,
        height: 60,
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qrImg: {
        height: '100%',
        resizeMode: 'contain'
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
    },
    btnSubText: {
        fontSize: 12,
        fontWeight: '400',
        opacity: 0.6
    },
    arrow: {
        fontSize: 20,
        lineHeight: 40,
        transform: [{scaleY: 2}],
        fontWeight: '200',
        marginTop: -5.5
    },
    pressedItem: {
        opacity: 0.7
    }
});