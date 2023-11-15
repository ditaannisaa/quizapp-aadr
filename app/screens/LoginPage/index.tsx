import {
  Box,
  Button,
  Text,
  View,
  ButtonIcon,
  AddIcon,
} from '@gluestack-ui/themed';
import { StatusBar } from 'react-native';
import { AppLottieView } from '../../components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { baseApi } from '../../api';

export default function LoginPage({ navigation }) {
  const { login } = useContext(AuthContext);

  // const { data: login } = baseApi.useLoginQuery(null);

  return (
    <Box
      backgroundColor="$primaryBg"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6A5AE0"
      />
      <AppLottieView
        animation={require('./login_animation.json')}
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Box
        bg="white"
        width="90%"
        rounded={'$2xl'}
        padding="$4"
        justifyContent="center"
        alignItems="center"
        gap={'$2'}
      >
        <Text
          fontWeight="bold"
          color="black"
          size="xl"
        >
          Login
        </Text>
        <Text
          color="gray"
          size="sm"
        >
          Ensure you have a Google account before logging in.
        </Text>
        <Button
          size="lg"
          rounded="$lg"
          backgroundColor="$secondaryBg"
          gap="$2"
          // onPress={() => {
          //   login();
          // }}
          width="70%"
          mt={'$5'}
        >
          <Ionicons
            name="logo-google"
            size={20}
            color="white"
          />
          <Text
            fontWeight="bold"
            color="white"
          >
            Login with Google
          </Text>
        </Button>
        <Text
          color="$secondaryBg"
          size="xs"
        >
          * Your account's security is assured.
        </Text>
      </Box>
    </Box>
  );
}
