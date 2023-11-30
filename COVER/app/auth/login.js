import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button, Modal, Pressable, Image } from "react-native";
import { Link, useRouter } from "expo-router";

function Login() {
    const routing = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.changeLanguageContainer}>
                <View style={styles.changeLanguage}>
                    <Text style={styles.languageText}>Korea, 한국어</Text>
                    <Text style={styles.dropdownTriangle}>&#x25BC;</Text>
                </View>
            </View>

            <View style={styles.logoContainer}>
                <Text style={styles.lgLogo}>LG </Text>
                <Text style={styles.coverLogo}>Cover</Text>
            </View>

            <View style={styles.networkLogoContainer}>
                <View style={styles.LogoImageContainer}>
                    <Image style={styles.logoImage} source={require('../images/logoImages.png')}/>
                </View>
            </View>

            <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>아이디</Text>
                    <TextInput style={styles.textInput} placeholder='이메일 또는 휴대폰 번호 아이디를 입력해 주세요'/>

                    <Text style={styles.inputLabel}>비밀번호</Text>
                    <TextInput secureTextEntry={true} style={styles.textInput} placeholder='비밀번호를 입력해 주세요'/>
            </View>
            <Pressable style={({pressed}) => [styles.loginButton, pressed && styles.pressedItem]}
            onPress={() => routing.replace('/home')}>
                <View>
                    <Text style={styles.loginText}>로그인</Text>
                </View>
            </Pressable>

            <Link href='/auth/findIDpwd' style={styles.authLinks}>아이디 찾기 / 비밀번호 재설정</Link>
            <Link href='/auth/createAccount' style={styles.authLinks}>회원가입</Link>

            <View style={styles.partitionContainer}>
                <View style={styles.partitionLine}></View>
                <Text style={styles.partitionText}>OR</Text>
            </View>

            <Pressable style={({pressed}) => [styles.SNSloginButton, pressed && styles.pressedItem]}
            onPress={() => routing.push('/auth/createAccount')}>
                <View>
                    <Text style={styles.SNSloginText}>SNS 로그인</Text>
                </View>
            </Pressable>
        </View>
    )

}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: 'white'
    },
    changeLanguageContainer: {
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 60,
        marginRight: 8,
    },
    changeLanguage: {
        width: 120,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 50,
        backgroundColor: 'rgba(107, 107, 107, 0.04)'
    },
    languageText: {
        fontSize: 12
    },
    dropdownTriangle: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.25)',
        transform: [{ scaleX: 1.8 }],
        marginLeft: 8
    },
    logoContainer: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 72,
    },
    lgLogo: {
        fontSize: 32,
        // fontFamily: 'Inter',
        fontWeight: '700',
        color: '#6b6b6b',
    },
    coverLogo: {
        fontSize: 32,
        // fontFamily: 'Inter',
        fontWeight: '600',
        color: '#a50034'
    },
    networkLogoContainer: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: -10
    },
    LogoImageContainer: {
        width: 150,
        alignItems: 'flex-start'
    },
    logoImage: {
        width: '100%',
        resizeMode: 'contain'
    },
    inputField: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    inputLabel: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.5)',
        marginTop: 8,
        marginBottom: 4
    },
    textInput: {
        fontSize: 16,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.5)',
        padding: 8,
        marginBottom: 12
    },
    loginButton: {
        width: '100%',
        height: 40,
        backgroundColor: 'rgba(153, 153, 153, 0.15)',
        borderRadius: 30,
        marginTop: 12,
        marginBottom: 8,
        alignItems: 'center',
        padding: 13
    },
    pressedItem: {
        opacity: 0.8
    },
    loginText: {
        fontSize: 14,
        fontWeight: '400',
        opacity: 0.5,
    },
    authLinks: {
        fontSize: 12,
        opacity: 0.8,
        marginTop: 10
    },
    partitionContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    partitionLine: {
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
    },
    partitionText: {
        paddingHorizontal: 5,
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: 'white',
    },
    SNSloginButton: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 12,
        marginBottom: 8,
        alignItems: 'center',
        padding: 10
    },
    SNSloginText: {
        fontSize: 14,
        fontWeight: '400',
        opacity: 0.9,
        marginTop: 2
    },
})