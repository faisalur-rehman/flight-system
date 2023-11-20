import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION_ROUTES} from './navigationRoutes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View} from 'react-native';
import {
  BookingContainer,
  FlightBookingContainer,
  FlightsContainer,
  HomeContainer,
  LoginContainer,
  OffersContainer,
  OtpVerficationContainer,
  SignupContainer,
  WalletContainer,
} from '../container';
import {colors, fonts} from '../utils/theme';
import {BookingIcon, HomeIcon, OffersIcon, WalletIcon} from '../assets';

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'rgb(242, 251, 255)',
          borderTopWidth: 0,
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: 5,
          height: 80,
        },
      }}>
      <Tab.Screen
        name={NAVIGATION_ROUTES.HOME_SCREEN}
        component={HomeContainer}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  // justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: '100%',
                }}>
                {focused ? <HomeIcon /> : <HomeIcon />}
                <Text
                  style={[
                    styles.tabText,
                    {
                      color: focused ? colors.primary : colors.textGray,
                    },
                  ]}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={NAVIGATION_ROUTES.WALLET}
        component={WalletContainer}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: '100%',
                }}>
                {focused ? <WalletIcon /> : <WalletIcon />}
                <Text
                  style={[
                    styles.tabText,
                    {
                      color: focused ? colors.primary : colors.textGray,
                    },
                  ]}>
                  Wallet
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={NAVIGATION_ROUTES.OFFERS}
        component={OffersContainer}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: '100%',
                }}>
                {focused ? <OffersIcon /> : <OffersIcon />}
                <Text
                  style={[
                    styles.tabText,
                    {
                      color: focused ? colors.primary : colors.textGray,
                    },
                  ]}>
                  Offers
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={NAVIGATION_ROUTES.BOOKING}
        component={BookingContainer}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: '100%',
                }}>
                {focused ? <BookingIcon /> : <BookingIcon />}
                <Text
                  style={[
                    styles.tabText,
                    {
                      color: focused ? colors.primary : colors.textGray,
                    },
                  ]}>
                  Booking
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function Home() {
  return (
    <HomeStack.Navigator initialRouteName={NAVIGATION_ROUTES.TABS}>
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.TABS}
        component={Tabs}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.FLIGHTS}
        component={FlightsContainer}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.FLIGHT_BOOKING}
        component={FlightBookingContainer}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

function Authentication() {
  return (
    <AuthStack.Navigator initialRouteName={NAVIGATION_ROUTES.HOME}>
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.LOGIN}
        component={LoginContainer}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.SIGNUP}
        component={SignupContainer}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.OTP_VERFICATION}
        component={OtpVerficationContainer}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.HOME}
        component={Home}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <Authentication />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabText: {
    color: colors.textGray,
    fontSize: 12,
    fontFamily: fonts.medium,
  },
});
