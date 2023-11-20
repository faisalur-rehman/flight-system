import {StyleSheet, Text, Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../utils/theme';

const Button = ({
  title,
  onPress,
  disabled = false,
  titleStyle = {},
  containerStyle = {},
  primary = true,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        !primary && {backgroundColor: 'transparent'},
        containerStyle,
      ]}>
      <Text
        style={[
          styles.title,
          !primary && {color: colors.primary},
          ,
          titleStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    paddingHorizontal: 30,
    paddingBottom: 15,
    paddingTop: 10,
    shadowColor: 'rgba(26, 151, 212, 0.5)',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(26, 151, 212, 0.5)',
        shadowOffset: {width: 0, height: 15},
        shadowOpacity: 1,
        shadowRadius: 20,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
  },
});
