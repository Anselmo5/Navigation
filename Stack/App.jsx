import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenA } from './src/screens/ScreenA';
import { ScreenB } from './src/screens/ScreenB';
const Stack = createNativeStackNavigator();




function HomeScreen({navigation}) {
  return (
   <Pressable onPress={() => navigation.navigate('Tela1')} style={styles.container}>
      <View>
        <Text>
          Click aqui
        </Text>
      </View>
   </Pressable>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tela1" component={ScreenA} />
        <Stack.Screen name="Tela2" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
