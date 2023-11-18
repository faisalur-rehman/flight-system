import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HeroBgImg} from '../assets';
import {colors, fonts} from '../utils/theme';

const HeroCard = () => {
  return (
    <ImageBackground source={HeroBgImg} style={styles.container}>
      <Text style={styles.text}>Where’s your</Text>
      <Text style={[styles.text, styles.bold]}>Next Destination?</Text>
    </ImageBackground>
  );
};

export default HeroCard;

const styles = StyleSheet.create({
  container: {
    height: 188,
    padding: 20,
  },
  text: {
    color: colors.white,
    fontSize: 30,
    fontFamily: fonts.medium,
  },
  bold: {
    fontFamily: fonts.bold,
  },
});
