import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PROFILE_ROUTES} from '../routes';
import AccountInfo from '../screens/Account/AccountInfo/AccountInfor/AccountInfo';
import EditAccount from '../screens/Account/AccountInfo/EditAccount/EditAccount';
import ChangePassword from '../screens/Account/AccountInfo/ChangePassword/ChangePassword';
import RevenuaInformation from '../screens/Account/InformationRevenua/InformationRevenua';
import FormSupport from '../screens/Account/Support/components/FormSupport';
import Support from '../screens/Account/Support/Support';

const Stack = createNativeStackNavigator<any>();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={PROFILE_ROUTES.ACCOUNT_INFO}
        component={AccountInfo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PROFILE_ROUTES.UPDATE_PROFILE}
        component={EditAccount}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PROFILE_ROUTES.CHANGE_PASSWORD}
        component={ChangePassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PROFILE_ROUTES.REVENUA_INFO}
        component={RevenuaInformation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PROFILE_ROUTES.SUPPORT}
        component={Support}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
