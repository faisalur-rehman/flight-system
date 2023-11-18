import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LinesIcon, NotificationIcon, UserImg, WaveIcon} from '../assets';
import {colors, fonts} from '../utils/theme';

const HomeHeader = () => {
  return (
    <View style={[styles.flexRow, styles.container]}>
      <View style={[styles.flexRow]}>
        <Image source={UserImg} style={styles.img} />
        <View>
          <View style={styles.flexRow}>
            <Text style={styles.welcome}>Welcome</Text>
            <WaveIcon />
          </View>
          <Text style={styles.name}>Julia</Text>
        </View>
      </View>
      <View style={[styles.flexRow]}>
        <View style={styles.iconView}>
          <NotificationIcon />
        </View>
        <View style={styles.iconView}>
          <LinesIcon />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {margin: 15},
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  iconView: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#E1EDF2',
    borderRadius: 15,
    marginHorizontal: 5,
  },
  welcome: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.blackText,
    marginRight: 5,
  },
  name: {
    fontFamily: fonts.semiBold,
    fontSize: 20,
    color: colors.blackText,
    marginRight: 5,
  },
});
