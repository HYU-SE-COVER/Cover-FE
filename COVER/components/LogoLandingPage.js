import { StyleSheet, Text, View, Modal } from 'react-native';

const Logo = (props) => {
   
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.container}>
                <Text style={styles.lg}>LG </Text>
                <Text style={styles.cover}>COVER</Text>
            </View>
        </Modal>
    )
}

export default Logo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lg: {
        color: '#6b6b6b',
        fontSize: 48,
        fontWeight: 'bold'
    },
    cover: {
        color: '#a50034',
        fontSize: 48,
        fontWeight: 'bold'
    }
})