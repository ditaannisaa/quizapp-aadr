import {
    View,
    Text,
    Box,
    VStack,
    HStack,
    Image,
    Input,
    Button,
    InputField
} from '@gluestack-ui/themed';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function AvatarPage({ navigation }) {
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const handleChooseAvatar = (avatarName) => {
        setSelectedAvatar(avatarName);
    }

    const isAvatarSelected = (avatarName) => {
        return selectedAvatar === avatarName;
    }

    return (
        <View
            backgroundColor="$primaryBg"
            flex={1}
            alignItems="center"
        >
            <Box
                rounded={"$2xl"}
                padding="$4"
                justifyContent="center"
                alignItems="center"
                gap={"$2"}
                bgColor='$secondaryBg'
                width={"90%"}
                mt={'$5'}
            >
                <Text
                    fontSize="$xl"
                    fontWeight="bold"
                    color='white'
                >Choose Free Avatar</Text>
                <Box padding={5}>
                    <VStack w="100%" space={"md"} alignSelf="center">
                        <HStack space={"lg"} justifyContent='center'>
                            <TouchableOpacity
                                onPress={() => handleChooseAvatar('free_fox')}
                            >
                                <Box
                                    backgroundColor={isAvatarSelected('free_fox') ? '$primaryBg' : 'transparent'}
                                    padding={isAvatarSelected('free_fox') ? 2 : 0}
                                    rounded={isAvatarSelected('free_fox') ? '$2xl' : '$none'}
                                >
                                    <Image
                                        source={require('../../../assets/avatars/free_fox.png')}
                                        alt="Free Fox Avatar"
                                        size="sm"
                                        role="img"
                                    />
                                </Box>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleChooseAvatar('free_girraffe')}
                            >
                                <Box
                                    backgroundColor={isAvatarSelected('free_girraffe') ? '$primaryBg' : 'transparent'}
                                    padding={isAvatarSelected('free_girraffe') ? 2 : 0}
                                    rounded={isAvatarSelected('free_girraffe') ? '$2xl' : '$none'}
                                >
                                    <Image
                                        source={require('../../../assets/avatars/free_giraffe.png')}
                                        alt="Free Giraffe Avatar"
                                        size="sm"
                                        role="img"
                                    />
                                </Box>
                            </TouchableOpacity>
                            <Box>
                                <Image
                                    source={require('../../../assets/avatars/free_goat.png')}
                                    alt="Free Goat Avatar"
                                    size="sm"
                                    role="img"
                                />
                            </Box>
                        </HStack>
                        <HStack space={"lg"} justifyContent='center'>
                            <Box>
                                <Image
                                    source={require('../../../assets/avatars/free_hen.png')}
                                    alt="Free Hen Avatar"
                                    size="sm"
                                    role="img"
                                />
                            </Box>
                            <Box>
                                <Image
                                    source={require('../../../assets/avatars/free_horse.png')}
                                    alt="Free Horse Avatar"
                                    size="sm"
                                    role="img"
                                />
                            </Box>
                            <Box>
                                <Image
                                    source={require('../../../assets/avatars/free_rabbit.png')}
                                    alt="Free Rabbit Avatar"
                                    size="sm"
                                    role="img"
                                />
                            </Box>
                        </HStack>
                        <Box justifyContent='center' alignItems='center' my={'$2'} backgroundColor='$primaryBg' rounded={'$2xl'} padding={5}>
                            <Text
                                fontSize="$sm"
                                color='$tertiaryButton'
                                fontWeight="bold"
                            >Buy Premium Avatar</Text>
                            <Text
                                fontSize={10}
                                color='white'
                                padding={'$1'}
                            >Choose a free avatar to start, then explore premium avatars for purchase within the game.</Text>
                            <HStack space={"lg"}>
                                <Box>
                                    <Image
                                        source={require('../../../assets/avatars/premium_cat.png')}
                                        alt="Premium Cat Avatar"
                                        size="xs"
                                        role="img"
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        source={require('../../../assets/avatars/premium_dog.png')}
                                        alt="Premium Dog Avatar"
                                        size="xs"
                                        role="img"
                                    />
                                </Box>
                                <Box>
                                    <Image
                                        source={require('../../../assets/avatars/premium_lion.png')}
                                        alt="Premium Lion Avatar"
                                        size="xs"
                                        role="img"
                                    />
                                </Box>
                            </HStack>
                        </Box>
                    </VStack>
                </Box>
                <Text
                    fontSize="$xl"
                    fontWeight="bold"
                    color='white'
                >Username</Text>
                <Input
                    rounded={'$2xl'}
                    width={'80%'}
                    backgroundColor='white'
                >
                    <InputField placeholder="Input your username" />
                </Input>
                <Button
                    rounded={'$2xl'}
                    backgroundColor="$greenButton"
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text>Continue</Text>
                </Button>
            </Box>
        </View>
    )
}
