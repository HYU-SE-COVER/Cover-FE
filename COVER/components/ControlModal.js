import { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image, Pressable, Text, Switch } from "react-native";
import Slider from '@react-native-community/slider';
import Axios from 'axios';

import GetURL from '../components/GetURL';

function ControlModal(props) {
    const [state, setState] = useState(false);
    const [sliderValue, setSliderValue] = useState(26);

    useEffect(() => {
        const getDeviceInfo = () => {
            const baseurl = GetURL();
            Axios.get(baseurl + '/get/1')
            .then(res => {
                console.log(res.data);
                const str = res.data.state;
                const match = str.match(/\d+/);
                const temperature = parseInt(match[0], 10);
                setSliderValue(temperature);
                setState(res.data.isActive);
            })
            .catch(error => console.log(error));
        };

        getDeviceInfo();
    }, []);

    const handleClose = () => {
        props.onClose(state, sliderValue);
    };

    return (
        <Modal visible={props.visible} transparent={true} animationType="slide">
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                            <View style={styles.mainContainer}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title}>에어컨</Text>
                                    <Text style={styles.onOffText}>
                                            {state ? "on" : "off"}
                                    </Text>
                                </View>
                                <View style={styles.switchContainer}>
                                    <View style={{flex: 1, alignItems: "center"}}>
                                        <Switch
                                            style={styles.verticalSwitch}
                                            value={state}
                                            onValueChange={() => setState(!state)}
                                            trackColor={{ false: "rgba(0, 0, 0, 0.8)", true: "blue" }}
                                            thumbColor="white"
                                        />
                        
                                    </View>
                                </View>
                            </View>

                            <View style={styles.sliderContainer}>
                                <Text style={styles.tempText}>온도 {sliderValue}°C</Text>
                                
                                <Slider
                                    style={{width: 200, height: 40}}
                                    minimumValue={16}
                                    maximumValue={35}
                                    minimumTrackTintColor="blue"
                                    maximumTrackTintColor="red"
                                    value={sliderValue}
                                    onValueChange={value => setSliderValue(Math.round(value))}
                                />
                            </View>

                            <Pressable onPress={handleClose}>
                                <View style={styles.close}><Text style={styles.closeText}>Close</Text></View>
                            </Pressable>
                    </View>
                </View>
            
        </Modal>
    )
}

export default ControlModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
    },
    modalView: {
        marginHorizontal: 50,
        marginVertical: 200,
        backgroundColor: 'rgb(150, 150, 150)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 35,
        paddingVertical: 0,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    mainContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        height: 200
    },
    titleContainer: {
        width: '50%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: 'white'
    },
    onOffText: {
        marginTop: 12,
        fontSize: 20,
        color: '#ffffff80'
    },
    switchContainer: {
        width: '50%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: 300
    },
    tempText: {
        fontSize: 18,
        color: '#ffffff80'
    },
    verticalSwitch: {
        transform: [{ scaleX: 3 }, { scaleY: 3 }, { rotate: '-90deg'}],
    },
    sliderContainer: {
        width: '100%',
        height: 50,
        marginTop: 30
        // backgroundColor: 'yellow'
    },
    close: {
        width: 250,
        height: 60,
        // backgroundColor: 'yellow'
    },
    closeText: {
        color: 'transparent'
    }
});