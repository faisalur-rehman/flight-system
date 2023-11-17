import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION_ROUTES} from './navigationRoutes';
// import {
//   BadgesScreen,
//   BioScreen,
//   ChangePasswordScreen,
//   ForgotPasswordScreen,
//   LoginScreen,
//   ResetPasswordScreen,
//   SettingsScreen,
//   SplashScreen,
//   TrophiesScreen,
// } from '../screens';
// import SignupScreen from '../screens/SignupScreen';
// import VerficationScreen from '../screens/VerificationScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {
//   AvatarImagesContainer,
//   CoverImagesContainer,
//   HomeContainer,
//   LeaderboardContainer,
//   UsersChatContainer,
//   MovieDetailContainer,
//   NotificationContainer,
//   ProfileContainer,
//   ScoreboardContainer,
//   MessageContainer,
// } from '../containers';
// import {
//   ChatFocusedIcon,
//   ChatIcon,
//   HomeIcon,
//   HomeIconFocused,
//   LeaderboardFocusedIcon,
//   NotificationFocusedIcon,
//   NotificationIcon,
//   ScoreFocused,
//   ScoreIcon,
//   StarIcon,
// } from '../assets/images';
import {StyleSheet, Text, View} from 'react-native';
import {LoginContainer} from '../container';
import {colors} from '../utils/theme';

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function Tabs() {
  // const [showTab, setShowTab] = useState(false);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#222222',
          borderTopWidth: 0,
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: 5,
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
                {focused ? <HomeIconFocused /> : <HomeIcon />}
                <Text
                  style={[
                    styles.tabText,
                    {
                      color: focused ? colors.primaryColor : colors.white,
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
        name={NAVIGATION_ROUTES.MESSAGES}
        component={UsersChatContainer}
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
                {focused ? <ChatFocusedIcon /> : <ChatIcon />}
                <Text
                  style={[
                    styles.tabText,
                    {
                      color: focused ? colors.primaryColor : colors.white,
                    },
                  ]}>
                  Messages
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={NAVIGATION_ROUTES.NOTIFICATION}
        component={NotificationContainer}
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
                {focused ? <NotificationFocusedIcon /> : <NotificationIcon />}
                <Text
                  style={[
                    styles.tabText,
                    {
                      color: focused ? colors.primaryColor : colors.white,
                    },
                  ]}>
                  Notification
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={NAVIGATION_ROUTES.SCORE_BOARD}
        component={ScoreboardContainer}
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
                {focused ? <ScoreFocused /> : <ScoreIcon />}
                <Text
                  style={[
                    styles.tabText,
                    {
                      color: focused ? colors.primaryColor : colors.white,
                    },
                  ]}>
                  Score
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={NAVIGATION_ROUTES.LEADERBOARD}
        component={LeaderboardContainer}
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
                {focused ? <LeaderboardFocusedIcon /> : <StarIcon />}
                <Text
                  style={[
                    styles.tabText,
                    {
                      color: focused ? colors.primaryColor : colors.white,
                    },
                  ]}>
                  Leaderboard
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
        name={NAVIGATION_ROUTES.MOVIE_DETAIL}
        component={MovieDetailContainer}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.PROFILE}
        component={ProfileContainer}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.COVER_IMAGES}
        component={CoverImagesContainer}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.AVATAR_IMAGES}
        component={AvatarImagesContainer}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.TROPHIES}
        component={TrophiesScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.BADGES}
        component={BadgesScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.CHANGE_PASSWORD}
        component={ChangePasswordScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.BIO_SCREEN}
        component={BioScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.MESSAGE_SCREEN}
        component={MessageContainer}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

function Authentication() {
  return (
    <AuthStack.Navigator initialRouteName={NAVIGATION_ROUTES.SPLASH}>
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.LOGIN}
        component={LoginContainer}
        options={{headerShown: false}}
      />
      {/* <AuthStack.Screen
        name={NAVIGATION_ROUTES.SIGNUP}
        component={SignupScreen}
        options={{headerShown: false}}
      /> */}
      {/* <AuthStack.Screen
        name={NAVIGATION_ROUTES.VERIFICATION}
        component={VerficationScreen}
        options={{headerShown: false}}
      /> */}
      {/* <AuthStack.Screen
        name={NAVIGATION_ROUTES.HOME}
        component={Home}
        options={{headerShown: false}}
      /> */}
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
    color: colors.white,
    fontSize: 12,
    // fontFamily: fonts.roboto_bold,
  },
});
