import AuthStack from '../AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { View, Spinner, Text } from '@gluestack-ui/themed';
import AppStack from '../AppStack';
import { StatusBar } from 'react-native';


export default function AppNav() {
    const { isLoading, userToken } = useContext(AuthContext);


    if (isLoading) {
        return (
            <View
                flex={1}
                justifyContent="center"
                alignItems="center"
                backgroundColor="$primaryBg"
            >
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6A5AE0"
                />
                <Spinner
                    color="white"
                    size='large'
                />
                <Text
                    color="white"
                    fontWeight="bold"
                >
                    trying to login....
                </Text>
            </View>
        )
    }

    return (
        <NavigationContainer>
            {userToken !== null
                ? <AppStack />
                : <AuthStack />
            }
        </NavigationContainer>
    );
}