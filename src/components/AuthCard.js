import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/theme';

const AuthCard = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default AuthCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 35,
    elevation: 5,
  },
});
