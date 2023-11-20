import React from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BackArrowIcon,
  EditIcon,
  FilterIcon,
  HeroBgImg,
  LightArrowIcon,
  PassengersIcon,
  SwapIcon,
} from '../../assets';
import {colors, fonts} from '../../utils/theme';
import FlightCard from '../../components/cards/FlightCard';
import dayjs from 'dayjs';

const FlightScreen = ({navigation, travelers, flightDetails, flights}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <ImageBackground source={HeroBgImg} style={styles.img}>
          <View style={[styles.flexRow, {width: '100%'}]}>
            <TouchableOpacity onPress={() => navigation?.goBack()}>
              <BackArrowIcon />
            </TouchableOpacity>
            <View style={styles.flexRow}>
              <Text style={styles.title}>{flightDetails?.origin}</Text>
              <SwapIcon />
              <Text style={styles.title}>{flightDetails?.destination}</Text>
            </View>
            <EditIcon />
          </View>
          <Text style={[styles.title, {fontSize: 16}]}>
            {dayjs(flightDetails?.departureDate).format('ddd, D MMM')}{' '}
            {`${
              flightDetails?.returnDate
                ? dayjs(flightDetails?.returnDate).format('ddd, D MMM')
                : ''
            }`}
          </Text>
          <View style={[styles.flexRow, {marginTop: 8}]}>
            <PassengersIcon stroke="white" />
            <Text style={[styles.title, {fontSize: 14}]}>{travelers}</Text>
          </View>
        </ImageBackground>
        <View style={[styles.flexRow, {marginTop: 15}]}>
          <Text style={styles.flightText}>
            {flights?.length} Flights{' '}
            <Text style={{fontFamily: fonts.regular}}>Available</Text>
          </Text>
          <View style={styles.icon}>
            <FilterIcon />
          </View>
        </View>
        <View style={[styles.flexRow, {justifyContent: 'flex-start'}]}>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>Cheap Price</Text>
            <LightArrowIcon />
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>Stop Included</Text>
            <LightArrowIcon />
          </View>
        </View>
        <FlatList
          data={flights}
          renderItem={({item}) => <FlightCard flight={item} />}
          keyExtractor={item => item?.sourceCode}
        />
        <FlightCard />
      </ScrollView>
    </View>
  );
};

export default FlightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 188,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 24,
    color: colors.white,
    marginHorizontal: 8,
  },
  flightText: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: colors.blackText,
  },
  icon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderColor: '#E1EDF2',
    borderRadius: 30,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 5,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 12,
    fontFamily: fonts.semiBold,
    color: colors.textGray,
    marginRight: 5,
  },
});
