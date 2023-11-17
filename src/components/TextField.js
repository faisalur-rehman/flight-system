import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, fonts} from '../utils/theme';

const TextField = ({
  leftIcon,
  rightIcon,
  top = 10,
  textFieldStyle = {},
  rightTop = 10,
  label,
  ...restProps
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={{width: '100%', alignSelf: 'center'}}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={[styles.textField, textFieldStyle]}
          cursorColor={colors.black}
          autoCapitalize="none"
          autoCorrect={false}
          {...restProps}
        />
        {leftIcon ? (
          <View style={{position: 'absolute', left: 10, top}}>{leftIcon}</View>
        ) : null}
        {rightIcon ? (
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 10,
              top: rightTop,
            }}>
            {rightIcon}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  wrapper: {width: '100%', marginVertical: 10},
  textField: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
    width: '100%',
    alignSelf: 'center',
    color: colors.blackText,
    fontSize: 16,
    paddingHorizontal: 20,
    position: 'relative',
    borderRadius: 30,
  },
  label: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.blackText,
    marginBottom: 8,
  },
});
