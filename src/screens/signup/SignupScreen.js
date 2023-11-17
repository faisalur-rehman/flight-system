import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {BgImage, HeroIcon} from '../../assets';
import {AuthCard} from '../../components';
import {colors, fonts} from '../../utils/theme';
import TextField from '../../components/TextField';
import {CheckBox} from '@rneui/themed';
import Button from '../../components/Button';
import {NAVIGATION_ROUTES} from '../../navigation/navigationRoutes';
import PhoneNumberInput from '../../components/PhoneNumberInput';

const SignupScreen = ({
  handleSignup,
  handleInput,
  handleChecked,
  checked,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BgImage} style={styles.image} resizeMode="cover">
        <KeyboardAvoidingView
          style={styles.image}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.wrapper}>
            <AuthCard>
              <HeroIcon />
              <Text style={styles.heading}>Register for New User</Text>
              <TextField
                label={'First Name *'}
                placeholder="John"
                placeholderTextColor={colors.textGray}
                onChangeText={text => handleInput('firstName', text)}
              />
              <TextField
                label={'Last Name *'}
                placeholder="Doe"
                placeholderTextColor={colors.textGray}
                onChangeText={text => handleInput('lastName', text)}
              />
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
              <TextField
                label={'Confirm Password *'}
                placeholder="**********"
                placeholderTextColor={colors.textGray}
                onChangeText={text => handleInput('confirmPassword', text)}
                secureTextEntry
              />
              <PhoneNumberInput
                label={'Phone Number *'}
                handleInput={handleInput}
              />
              <CheckBox
                containerStyle={{padding: 0, marginLeft: 0}}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                checked={checked}
                titleProps={{style: styles.terms}}
                title={'I agree to the terms of service and privacy policy'}
                onPress={() => handleChecked(!checked)}
              />

              <Button onPress={handleSignup} title="Register" />
              <Text style={styles.createAccount}>
                Already have an account?{' '}
                <Text
                  onPress={() => navigation?.navigate(NAVIGATION_ROUTES.LOGIN)}
                  style={{color: colors.primary}}>
                  Login
                </Text>
              </Text>
            </AuthCard>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    justifyContent: 'center',
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
