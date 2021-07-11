import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {Footer} from 'components/Footer';

import {Map} from 'screens/Map';
import {Search} from 'screens/Search';

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: 'transparent',
          card: 'transparent',
        },
      }}>
      <Tab.Navigator
        tabBar={props => <Footer {...props} />}
        screenOptions={({}) => ({
          cardStyle: {backgroundColor: 'transparent'},
        })}>
        <Tab.Screen name="Map" component={Map} options={{headerShown: false}} />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
