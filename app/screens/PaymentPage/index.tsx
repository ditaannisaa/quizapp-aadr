import {
  View,
  Box,
  HStack,
  Text,
  Image,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  Radio,
  Icon,
  Button,
} from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
// import { CircleIcon } from 'lucide-react-native';

export default function PaymentPage() {
  return (
    <View
      backgroundColor="white"
      flex={1}
      justifyContent="center"
      alignItems="center"
      gap={'$5'}
    >
      <Box flex={1}>
        <Box
          px={'$4'}
          py={'$2'}
          gap={'$1'}
        >
          <Text
            fontWeight="bold"
            color="$coolGray400"
            pb={5}
          >
            Details
          </Text>
          <HStack width={'100%'}>
            <Box width={'50%'}>
              <Text
                fontWeight="bold"
                fontSize={'$sm'}
              >
                Mystic Package
              </Text>
            </Box>
            <Box width={'50%'}>
              <Text
                textAlign="right"
                fontSize={'$sm'}
              >
                Rp 100.000
              </Text>
            </Box>
          </HStack>
          <HStack width={'100%'}>
            <Box width={'50%'}>
              <Text
                fontWeight="bold"
                fontSize={'$sm'}
              >
                Administration
              </Text>
            </Box>
            <Box width={'50%'}>
              <Text
                textAlign="right"
                fontSize={'$sm'}
              >
                Rp 3000
              </Text>
            </Box>
          </HStack>
        </Box>

        <Box
          px={'$4'}
          py={'$2'}
          gap={2}
        >
          <Text
            fontWeight="bold"
            color="$coolGray400"
            pb={4}
          >
            All Payment Methods
          </Text>
          <Box
            width={'100%'}
            gap={5}
          >
            <Box width={'100%'}>
              <Text
                fontWeight="bold"
                fontSize={'$sm'}
              >
                Gopay
              </Text>
              <TouchableOpacity>
                <HStack>
                  <Image
                    source={require('../PaymentPage/Gopay.png')}
                    alt="Gopay"
                    role="img"
                    width={80}
                    height={30}
                    resizeMode="contain"
                  />
                </HStack>
              </TouchableOpacity>
            </Box>

            <Box width={'100%'}>
              <Text
                fontWeight="bold"
                fontSize={'$sm'}
              >
                Shopeepay
              </Text>
              <TouchableOpacity>
                <HStack py={7}>
                  <Image
                    source={require('../PaymentPage/shopeepay.png')}
                    alt="Shopeepay"
                    role="img"
                    width={80}
                    height={30}
                    resizeMode="cover"
                  />
                </HStack>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
        <Box>
          <HStack
            width={'100%'}
            padding="$4"
            bgColor={'$purple200'}
            mb={'$4'}
          >
            <Box
              alignItems="flex-start"
              gap={30}
              width={'50%'}
            >
              <Text
                fontSize={'$xs'}
                fontWeight="bold"
              >
                Pay within 23:59:59
              </Text>
            </Box>
            <Box
              gap={2}
              width={'50%'}
              alignItems="flex-end"
            >
              <Text
                fontSize={'$xs'}
                fontWeight="bold"
              >
                Total
              </Text>
              <Text
                fontSize={'$2xl'}
                fontWeight="bold"
                justifyContent="center"
                padding={3}
              >
                Rp 103.000
              </Text>
              <Text fontSize={'$xs'}>Order ID #sample-123456</Text>
            </Box>
          </HStack>
          <Button
            bgColor="$primaryBg"
            width={'80%'}
            alignSelf="center"
            justifyContent="center"
          >
            <Text
              fontWeight="semibold"
              alignContent="center"
              color="white"
            >
              Pay now
            </Text>
          </Button>
        </Box>
      </Box>
    </View>
  );
}
