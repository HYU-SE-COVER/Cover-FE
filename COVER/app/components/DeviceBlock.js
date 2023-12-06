import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';

const prototypeimg = [
    require('./../../assets/images/thinq.png'), 
    require('./../../assets/images/matter2.png'), 
    require('./../../assets/images/ir2.png')
];
const iconimge = [
    require('./../../assets/images/devices/light.png'), 
    require('./../../assets/images/devices/airconditioner.png'), 
    require('./../../assets/images/devices/tv.png'), 
    require('./../../assets/images/devices/airpurifier.png'), 
    require('./../../assets/images/devices/winecellar.png'), 
    require('./../../assets/images/devices/vaccumcleaner.png'), 
    require('./../../assets/images/devices/washingmachine.png')
];


const DeviceBlock = (props) => {
    const item = props.item;
    return (
        <View style={styles.deviceBlock}>
            <Image style={styles.deviceImage} source={iconimge[item.deviceImg]}/>
            <Text style={styles.deviceNameText}>{item.name}</Text>
            <Text style={styles.deviceOnOffText}>{item.onoff}</Text>
            <Text style={styles.deviceStateText}>{item.state}</Text>
            <Image style={styles.networkImage} source={prototypeimg[item.networkImg]} />
        </View>
    )
}

export default DeviceBlock;

const styles = StyleSheet.create({
    deviceImage: {
        resizeMode: 'contain',
        height: 25,
        width: 'auto',
        marginLeft: -130,
        marginBottom: 5
    },
    deviceNameText: {
        position: 'absolute',
        top: 30,
        left: 0,
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 4
    },
    deviceOnOffText: {
        position: 'absolute',
        top: 45,
        left: 0,
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.5)',
        marginVertical: 1.5
    },
    deviceStateText: {
        position: 'absolute',
        top: 59,
        left: 0,
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