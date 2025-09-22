import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BOTTOM_TAB_ROUTES } from '../routes';
import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from '../themes/fontFamily';
// import Home from '../screens/Home/Home';

import Home from '../screens/home/HomeScreen'
import AccountScreen from '../screens/Account/AccountScreen'
// import Worksheet from '../screens/Worksheet/Worksheet';
// import TakeOff from '../screens/TakeOff/TakeOff';
import { useAppSelector } from '../redux/hooks';
import {
  IconHome, IconHomeActive, IconOrder, IconOrderActive, IconAccount,
  IconAcountActive
} from '../components/Icons';
import OrdersScreen from '../screens/Oders/OrderScreen';

const Tab = createBottomTabNavigator<any>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={BOTTOM_TAB_ROUTES.HOME}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.TabBarStyle,
        lazy: true,
        tabBarLabelStyle: styles.TabBarLabelStyle,
        tabBarActiveTintColor: '#1354D4',
        tabBarInactiveTintColor: '#52585f',
      }}>
      <Tab.Screen
        name={BOTTOM_TAB_ROUTES.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <IconHomeActive /> : <IconHome />,
        }}
      />
      <Tab.Screen
        name={BOTTOM_TAB_ROUTES.ORDER}
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <IconOrderActive /> : <IconOrder />,
        }}
      />
      <Tab.Screen
        name={BOTTOM_TAB_ROUTES.ACCOUNT}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <IconAcountActive /> : <IconAccount />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  TabBarStyle: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    paddingTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 12,
  },
  TabBarLabelStyle: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.BeVietnamPro_SemiBold,
  },
});
