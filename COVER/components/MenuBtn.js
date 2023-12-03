import { StyleSheet, Text, View, Pressable } from 'react-native';

const MenuBtn = () => {
   
    return (
        <View style={styles.hamburgerBtn}>
            <View style={styles.hamburgerBtnLine}></View>
            <View style={styles.hamburgerBtnLine}></View>
            <View style={styles.hamburgerBtnLine}></View>
        </View>
    )
};

export default MenuBtn;

const styles = StyleSheet.create({
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
});