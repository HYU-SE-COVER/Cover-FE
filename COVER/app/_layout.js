import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#f5f5f5",
            },
            headerTintColor: "black",
            backgroundColor: '#f5f5f5',
            headerBackTitleVisible: false
        }}>
            <Stack.Screen name='index' options={{headerShown: false}}/> 
            <Stack.Screen name='auth/Login' options={{headerShown: false}}/> 
            <Stack.Screen name='Home' options={{headerShown: false}}/> 

        </Stack>
    )
}