


//*********IMPORTS AND SCREENS  *********************//
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './Screens/Onboarding';
import Enter from './Screens/Enter';
import Verify from './Screens/Verify';
import Dashboard from './Screens/Dashboard';
import HomeScreen from './Screens/HomeScreen';
import Ride from './Screens/Ride';
import SearchResults from './Screens/SearchResults';
import Waiting from './Screens/Waiting';

//*********IMPORTS AND SCREENS  *********************//

//*********STACK NAVIGATOR  *********************//
const Stack = createStackNavigator();

//*********STACK NAVIGATOR *********************//


function App() {
  return (



//*********NAVIGATION CONTAINER *********************//
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
           headerShown: false
           }} initialRouteName="Onboarding">
          
         <Stack.Screen name="Onboarding" component={Onboarding} />
         <Stack.Screen name="Enter" component={Enter} />
         <Stack.Screen name="Verify" component={Verify} />
         <Stack.Screen name="Dashboard" component={Dashboard} />
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
         <Stack.Screen name="Ride" component={Ride} />
         <Stack.Screen name="SearchResults" component={SearchResults} />
         <Stack.Screen name="Waiting" component={Waiting} />
          </Stack.Navigator>
    </NavigationContainer>

//*********NAVIGATION CONTAINER *********************//


  );
}

export default App;