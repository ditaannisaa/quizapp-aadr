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
} from '@gluestack-ui/themed';
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
        <HStack
          width={'100%'}
          padding="$4"
          bgColor={'$purple200'}
        >
          <Box
            gap={2}
            width={'50%'}
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
              Rp 30.000
            </Text>
            <Text fontSize={'$xs'}>Order ID #sample-123456</Text>
          </Box>
          <Box
            alignItems="flex-end"
            gap={30}
            width={'50%'}
          >
            <Text
              fontSize={'$xs'}
              fontWeight="bold"
            >
              Pay within 23:59:59
            </Text>
            <Text
              fontSize={'$xs'}
              fontWeight="semibold"
            >
              Details
            </Text>
          </Box>
        </HStack>
        <Box
          padding={'$4'}
          gap={2}
        >
          <Text>All Payment Methods</Text>

          <RadioGroup>
            <Radio
              value="change"
              size="md"
              isInvalid={false}
              isDisabled={false}
            >
              <RadioIndicator mr="$2">
                {/* <RadioIcon as={CircleIcon} /> */}
              </RadioIndicator>
              <RadioLabel>Label</RadioLabel>
            </Radio>
          </RadioGroup>
          <HStack>
            <Image
              source={require('../PaymentPage/Gopay.png')}
              alt="Gopay"
              role="img"
              width={80}
              height={40}
              resizeMode="contain"
            />
          </HStack>
        </Box>
      </Box>
    </View>
  );
}
