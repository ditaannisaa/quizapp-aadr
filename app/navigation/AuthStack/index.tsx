import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../../screens/LoginPage';


export default function AuthStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{
                    headerShown: false, //menghilangkan header
                }}
            />
        </Stack.Navigator>
    )
}