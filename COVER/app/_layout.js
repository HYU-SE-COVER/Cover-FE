import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#f5f5f5"
            },
            headerTintColor: "black",
            backgroundColor: '#f5f5f5'
        }}>
            <Stack.Screen name='index' options={{headerShown: false}}/> 
            <Stack.Screen name='auth/login' options={{headerShown: false}}/> 
            <Stack.Screen name='home' options={{headerShown: false}}/> 

        </Stack>
    )
}