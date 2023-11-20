import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils/theme';
import {Divider} from '@rneui/themed';
import FlightSearchField from '../textfields/FlightSearchField';
import PhoneNumberInput from '../PhoneNumberInput';

const TravelerCard = ({index, traveler}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.travelerText}>
        Traveler {index}: {traveler}
      </Text>
      <Divider style={{marginVertical: 15}} color={colors.textGray} />
      <View style={styles.flexRow}>
        <FlightSearchField
          label={'First Name *'}
          width="48%"
          placeholder="John"
          textFieldStyle={{paddingHorizontal: 0}}
        />
        <FlightSearchField
          label={'Last Name *'}
          width="48%"
          placeholder="Doe"
          textFieldStyle={{paddingHorizontal: 0}}
        />
      </View>
      <View style={styles.flexRow}>
        <FlightSearchField
          label={'Gender'}
          width="48%"
          placeholder="Male"
          textFieldStyle={{paddingHorizontal: 0}}
        />
        <FlightSearchField
          label={'Date of Birth'}
          width="48%"
          placeholder="MM/DD/YYYY"
          textFieldStyle={{paddingHorizontal: 0}}
        />
      </View>
      <FlightSearchField
        label={'Nationality'}
        width="100%"
        placeholder="UAE"
        textFieldStyle={{paddingHorizontal: 0}}
      />
      <PhoneNumberInput
        containerStyles={styles.phoneContainerStyles}
        textInputStyles={styles.textContainerStyle}
        label={'Phone Number *'}
        handleInput={() => {}}
      />
      <FlightSearchField
        label={'Email*'}
        width="100%"
        placeholder="Enter your email address"
        textFieldStyle={{paddingHorizontal: 0}}
      />
      <Text style={styles.lightText}>
        Booking confirmation will be sent to this email address.
      </Text>
      <Text
        style={[
          styles.travelerText,
          {color: colors.primary, marginVertical: 10},
        ]}>
        Passport Details
      </Text>
      <Text style={[styles.lightText, {color: colors.blackText}]}>
        Please enter details exactly as they appear on your passport/travel
        document.
      </Text>
      <View style={styles.flexRow}>
        <FlightSearchField
          label={'Passport Number*'}
          placeholder="Your Passport No."
          width="49%"
          textFieldStyle={{paddingHorizontal: 0}}
        />
        <FlightSearchField
          label={'Date of Birth'}
          placeholder="DD/MM/YYYY"
          width="48%"
          textFieldStyle={{paddingHorizontal: 0}}
        />
      </View>
    </View>
  );
};

export default TravelerCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.70)',
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginHorizontal: 25,
    margin: 15,
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.07)',

    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 35,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  travelerText: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: colors.blackText,
    textTransform: 'capitalize',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phoneContainerStyles: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    height: 50,
    borderBottomColor: colors.inputBorderColor,
  },
  textContainerStyle: {
    height: 48,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: colors.inputBorderColor,
    backgroundColor: 'transparent',
  },
  lightText: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.lightGray,
  },
});
