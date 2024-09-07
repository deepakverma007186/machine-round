import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Gallery from '@screens/Gallery';
import SplashScreen from '@screens/SplashScreen';
import {navigatonRef} from '@utils/navigationUtils';
import React, {FC} from 'react';

type Props = {};

// create stack navigation which access to screen names with mantaining the stack
const Stack = createNativeStackNavigator();

const Navigation: FC = (props: Props) => {
  return (
    <NavigationContainer ref={navigatonRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          animation:'slide_from_right'
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
