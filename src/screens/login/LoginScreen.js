import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BgImage, HeroIcon} from '../../assets';
import {AuthCard} from '../../components';
import {colors, fonts} from '../../utils/theme';
import TextField from '../../components/textfields/TextField';
import {CheckBox} from '@rneui/themed';
import Button from '../../components/Button';
import {NAVIGATION_ROUTES} from '../../navigation/navigationRoutes';

const LoginScreen = ({
  handleLogin,
  handleInput,
  handleChecked,
  checked,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} style={styles.image} resizeMode="cover">
        <View style={styles.wrapper}>
          <AuthCard>
            <HeroIcon />
            <Text style={styles.heading}>Login to Existing User</Text>
            <TextField
              label={'Email *'}
              placeholder="example@gmail.com"
              placeholderTextColor={colors.textGray}
              onChangeText={text => handleInput('email', text)}
            />
            <TextField
              label={'Password *'}
              placeholder="**********"
              placeholderTextColor={colors.textGray}
              onChangeText={text => handleInput('password', text)}
              secureTextEntry
            />
            <View
              style={[
                styles.flexRow,
                {
                  justifyContent: 'space-between',
                  width: '100%',
                  marginVertical: 10,
                },
              ]}>
              <CheckBox
                containerStyle={{padding: 0, marginLeft: 0}}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                checked={checked}
                titleProps={{style: styles.terms}}
                title={'Remember Login Info'}
                onPress={() => handleChecked(!checked)}
              />
              <Text style={styles.forgot}>Forgot Password?</Text>
            </View>
            <Text style={styles.createAccount}>
              Don’t have an account?{' '}
              <Text
                onPress={() => navigation?.navigate(NAVIGATION_ROUTES.SIGNUP)}
                style={{color: colors.primary}}>
                Create Account
              </Text>
            </Text>
            <Button onPress={handleLogin} title="Login" />
          </AuthCard>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  heading: {
    color: colors.primary,
    fontSize: 24,
    fontFamily: fonts.semiBold,
    marginVertical: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgot: {
    color: colors.primary,
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  createAccount: {
    color: colors.textGray,
    fontSize: 14,
    fontFamily: fonts.medium,
    marginVertical: 10,
  },
  terms: {
    textTransform: 'capitalize',
    color: colors.textGray,
    fontFamily: fonts.medium,
    fontSize: 12,
    marginLeft: 5,
  },
});
