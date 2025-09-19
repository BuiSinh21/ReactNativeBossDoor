import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AUTH_ROUTES } from '../routes';
import Login from '../screens/Login/Login';


const Stack = createNativeStackNavigator<any>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={AUTH_ROUTES.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name={AUTH_ROUTES.REGISTER}
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AUTH_ROUTES.REGISTER_PERSONAL_INFO}
        component={RegisterPersonalInfo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AUTH_ROUTES.REGISTER_OTHER}
        component={RegisterOther}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AUTH_ROUTES.REGISTER_POLICY}
        component={RegisterPolicy}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AUTH_ROUTES.REGISTER_SUCCESS}
        component={RegisterSuccess}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AUTH_ROUTES.CAMERA_CCCD}
        component={CameraCCCD}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AUTH_ROUTES.SCAN_CCCD}
        component={ScanCCCD}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AUTH_ROUTES.CAMERA_AVATAR}
        component={CameraAvatar}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
