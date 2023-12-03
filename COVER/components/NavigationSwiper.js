import { StyleSheet, Text, View, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import { router } from 'expo-router';


const NavigationSwiper = () => {
   
    return (
        <View>
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
        </View>
    )
};

export default NavigationSwiper;

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
        fontSize: 14,
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
    coverRegisterButton: {
        fontSize: 13
    },
    pressedItem: {
        opacity: 0.7
    }
});