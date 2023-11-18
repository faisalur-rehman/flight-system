import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VerificationCode from './VerficationCode';
import {colors, fonts} from '../../utils/theme';
import {OtpIcon} from '../../assets';
import Button from '../../components/Button';

const OtpVerficationScreen = ({code, setCode, handleVerfication}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>
        <OtpIcon />
      </View>
      <Text style={styles.heading}>Verify Code</Text>
      <Text style={styles.description}>We sent an OTP code on your Email.</Text>
      <VerificationCode value={code} setValue={setCode} />
      <Button title={'Validate'} onPress={handleVerfication} />
    </SafeAreaView>
  );
};

export default OtpVerficationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  heading: {
    fontFamily: fonts.bold,
    fontSize: 30,
    color: colors.primary,
    textAlign: 'center',
    marginVertical: 10,
  },
  description: {
    fontFamily: fonts.medium,
    fontSize: 18,
    color: colors.blackText,
    marginVertical: 20,
  },
  icon: {
    alignSelf: 'center',
  },
});
