import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {colors, fonts} from '../utils/theme';

const PhoneNumberInput = ({handleInput, label}) => {
  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <PhoneInput
        defaultCode="AE"
        layout="second"
        onChangeFormattedText={text => {
          handleInput('phone', text);
        }}
        containerStyle={styles.container}
        textInputStyle={styles.textInputStyle}
        codeTextStyle={styles.codeTextStyle}
        textContainerStyle={styles.textContainerStyle}
      />
    </View>
  );
};

export default PhoneNumberInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    height: 50,
    borderColor: colors.inputBorderColor,
  },
  codeTextStyle: {
    padding: 0,
    margin: 0,
    height: 22,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textContainerStyle: {
    height: 48,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderLeftColor: colors.inputBorderColor,
    borderBottomColor: colors.inputBorderColor,
    backgroundColor: colors.white,
  },
  textInputStyle: {
    padding: 0,
    height: 40,
  },
  label: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.blackText,
    marginBottom: 8,
  },
});
