import { createStackNavigator } from '@react-navigation/stack';
import {
  AvatarPage,
  HomePage,
  QuizPage,
  ShopPage,
  ResultPage,
  FindingOpponentPage,
  PaymentPage,
} from '../../screens';

export default function AppStack() {
  const Stack = createStackNavigator();

  //PR dibikin kondisi, jika user belum memiliki username maka wajib tampilkan screens Choose Avatar/Create Username

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Avatar"
        component={AvatarPage}
        options={{
          headerShown: false, //menghilangkan header
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerLeft: () => null, //menghilangkan arrow back
          headerTitle: 'Quiz',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#5a4ad3',
          },
        }}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizPage}
        options={{
          headerLeft: () => null, //menghilangkan arrow back
          headerTitle: 'Quiz',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#5a4ad3',
          },
        }}
      />
      <Stack.Screen
        name="Shop"
        component={ShopPage}
        options={{
          headerLeft: () => null, //menghilangkan arrow back
          headerTitle: 'Buy Diamonds',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#5a4ad3',
          },
        }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentPage}
        options={{
          headerLeft: () => null, //menghilangkan arrow back
          headerTitle: 'Payment',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#5a4ad3',
          },
        }}
      />
      <Stack.Screen
        name="Result"
        component={ResultPage}
        options={{
          headerLeft: () => null, //menghilangkan arrow back
          headerTitle: 'Quiz',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#5a4ad3',
          },
        }}
      />
      <Stack.Screen
        name="FindingOpponent"
        component={FindingOpponentPage}
        options={{
          headerLeft: () => null, //menghilangkan arrow back
          headerTitle: 'Finding Opponent',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#5a4ad3',
          },
        }}
      />
    </Stack.Navigator>
  );
}
