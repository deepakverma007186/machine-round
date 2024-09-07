import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailForm from '@screens/DetailForm';
import Gallery from '@screens/Gallery';
import SplashScreen from '@screens/SplashScreen';
import {navigatonRef} from '@utils/navigationUtils';
import {COLORS} from '@utils/theme';
import React, {FC} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

type Props = {};

// create stack navigation which access to screen names with mantaining the stack
const Stack = createNativeStackNavigator();

const Navigation: FC = (props: Props) => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={COLORS.primary}
      />
      <SafeAreaView
        style={{
          backgroundColor: COLORS.primary,
        }}
      />
      <NavigationContainer ref={navigatonRef}>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="DetailForm" component={DetailForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
