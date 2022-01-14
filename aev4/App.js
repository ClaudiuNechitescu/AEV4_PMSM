import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home';
import Pantalla1 from './Pantalla1';
import Pantalla2 from './Pantalla2';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pantalla1" component={Pantalla1} />
      <Tab.Screen name="Pantalla2" component={Pantalla2} />
    </Tab.Navigator>
  </NavigationContainer>
);
export default App;