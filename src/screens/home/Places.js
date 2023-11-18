import React from 'react';
import {
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {HeartIcon, PlaceImg1, StarIcon} from '../../assets';
import {colors, fonts} from '../../utils/theme';

const Places = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Text style={[styles.text, {fontSize: 18}]}>Best Places</Text>
        <Text style={[styles.text, {color: colors.primary}]}>View All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[1, 2].map(_ => (
          <ImageBackground
            imageStyle={[
              // styles.item,
              {
                borderRadius: 10,
              },
            ]}
            source={PlaceImg1}
            style={styles.img}>
            <View style={[styles.flexRow]}>
              <View style={[styles.flexRow, styles.rating]}>
                <StarIcon />
                <Text style={styles.description}>4.6</Text>
              </View>
              <HeartIcon />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.name}>Burj Khalifa</Text>
              <Text style={styles.name}>
                $238{' '}
                <Text style={[styles.description, {color: colors.white}]}>
                  / Per Person
                </Text>
              </Text>
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginVertical: 20,
    borderRadius: 10,
  },
  img: {
    height: 245,
    width: 177,
    marginLeft: 5,
    padding: 15,
  },
  text: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: colors.blackText,
    margin: 8,
    marginBottom: 5,
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.white,
  },
  description: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.textGray,
    marginHorizontal: 8,
  },
  item: {
    padding: 15,
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
  },
  rating: {
    backgroundColor: 'rgba(3, 16, 23, 0.30)',
    padding: 8,
    borderRadius: 20,
  },
});
