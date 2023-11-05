import Screen1 from "./screens/screen1";
import Screen2 from "./screens/screen2";
import Screen3 from "./screens/screen3";
import Screen4 from './screens/screen4';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image} from 'react-native';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShadowVisible: false, 
        headerStyle:{
          backgroundColor: '#F3F4F6'},
        headerTitleStyle:{
          fontSize: 24, 
          lineHeight: 36,
          fontWeight: 'bold',
        },
        headerRight: ()=>(
          <Image source={require('../15_LeThienNghia_07/assets/Image177.png')} style={{height: 25, width: 25, marginRight: 71}}></Image>
        ),
          
        }}>
        <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }}/>
        <Stack.Screen name="Screen2" component={Screen2} options={{title: 'Shops Near Me'}}/>
        <Stack.Screen name="Screen3" component={Screen3 } options={{title: 'Drinks'}}/>
        <Stack.Screen name="Screen4" component={Screen4 } options={{title: 'Your order'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


