import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import React from 'react';
import {OfferImg} from '../../assets';
import {colors, fonts} from '../../utils/theme';

const LimitedOffersScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Text style={[styles.text, {fontSize: 18}]}>Limited Offers</Text>
        <Text style={[styles.text, {color: colors.primary}]}>View All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2].map(_ => (
          <View style={styles.item}>
            <Image source={OfferImg} style={styles.img} />
            <Text style={styles.text}>
              Get Up to 20% OFF On Flights with Us
            </Text>
            <Text style={styles.description}>BreakTheBookingRoutine NOW</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LimitedOffersScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  img: {
    height: 194,
    width: '100%',
    borderRadius: 10,
  },
  text: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: colors.blackText,
    margin: 8,
    marginBottom: 5,
  },
  description: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.textGray,
    marginHorizontal: 8,
  },
  item: {
    marginHorizontal: 8,
    shadowColor: 'rgba(26, 151, 212, 0.9)',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(26, 151, 212, 0.5)',
        shadowOffset: {width: 0, height: 15},
        shadowOpacity: 1,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
