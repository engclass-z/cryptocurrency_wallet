/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { RootStackParamList, RootTabParamList } from '~/src/types';
import Colors from '~constants/Colors';
import useColorScheme from '~hooks/useColorScheme';
import HomeScreen from '~screens/HomeScreen';
import NotFoundScreen from '~screens/NotFoundScreen';
import ReceiveScreen from '~screens/ReceiveScreen';
import TransferScreen from '~screens/TransferScreen';
import WalletScreen from '~screens/WalletScreen';
import LinkingConfiguration from './LinkingConfiguration';

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default Navigation;

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />

      {/* Wallet */}
      <Stack.Group>
        <Stack.Screen
          name="Transfer"
          component={TransferScreen}
          options={() => ({
            title: 'Transfer',
          })}
        />
        <Stack.Screen
          name="Trade"
          component={HomeScreen}
          options={() => ({
            title: 'Trade',
          })}
        />
      </Stack.Group>

      {/* Modal */}
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="Receive"
          component={ReceiveScreen}
        />
      </Stack.Group>

      {/* Not Found */}
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="home-sharp" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Wallet"
        component={WalletScreen}
        options={() => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="wallet" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
