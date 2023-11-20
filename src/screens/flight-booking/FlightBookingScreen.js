import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils/theme';
import {
  BackArrowIcon,
  CustomiseIcon,
  PassengersIcon,
  WalletIcon,
} from '../../assets';
import {Divider} from '@rneui/themed';
import {useSelector} from 'react-redux';
import TravelerCard from '../../components/cards/TravelerCard';
import Button from '../../components/Button';

const FlightBooking = ({navigation}) => {
  const travelers = useSelector(state => state?.travelers?.travelers);

  const renderCards = () => {
    let num = 0;
    return Object.entries(travelers)
      .sort()
      .map(([key, count]) => (
        <View key={key}>
          {Array.from({length: count}).map((_, index) => (
            <TravelerCard traveler={key} key={key} index={++num} />
          ))}
        </View>
      ));
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={[styles.header, styles.flexRow]}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <BackArrowIcon />
          </TouchableOpacity>
          <Text style={styles.heading}>Your Flight Booking</Text>
          <View />
        </View>
        <View style={styles.wrapper}>
          <View style={[styles.tabs, styles.flexRow]}>
            <View style={{alignItems: 'center'}}>
              <View
                style={[
                  styles.iconView,
                  {
                    backgroundColor: colors.primary,
                  },
                ]}>
                <CustomiseIcon />
              </View>
              <Text style={styles.tabTitle}>Customize</Text>
            </View>
            <Divider color={colors.primary} style={{width: 50}} />
            <View style={{alignItems: 'center'}}>
              <View style={[styles.iconView]}>
                <PassengersIcon />
              </View>
              <Text style={styles.tabTitle}>Passengers Info</Text>
            </View>

            <Divider color={colors.primary} style={{width: 50}} />
            <View style={{alignItems: 'center'}}>
              <View style={[styles.iconView, {borderColor: colors.lightGray}]}>
                <WalletIcon />
              </View>
              <Text style={styles.tabTitle}>Payment</Text>
            </View>
          </View>
        </View>
        {renderCards()}
        <View style={[styles.flexRow, {width: '70%', alignSelf: 'center'}]}>
          <Button primary={false} title={'Back'} />
          <Button title={'Next'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default FlightBooking;

const styles = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  wrapper: {
    margin: 20,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 20,
  },
  tabTitle: {
    color: colors.blackText,
    fontFamily: fonts.medium,
    fontSize: 12,
    textAlign: 'center',
  },
  iconView: {
    height: 48,
    width: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
