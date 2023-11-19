import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils/theme';
import {Divider} from '@rneui/themed';

const FlightSearchField = ({
  icon,
  top = 10,
  textFieldStyle = {},
  rightTop = 10,
  label,
  width = '50%',
  disabled = false,
  ...restProps
}) => {
  return (
    <View
      pointerEvents={disabled ? 'none' : 'auto'}
      style={[styles.wrapper, {width}]}>
      <View style={{width: '100%', alignSelf: 'center'}}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.flexRow}>
          {icon}
          <TextInput
            editable={!disabled}
            style={[styles.textField, textFieldStyle]}
            cursorColor={colors.black}
            autoCapitalize="none"
            placeholderTextColor={colors.lightGray}
            autoCorrect={false}
            {...restProps}
          />
        </View>
        <Divider style={{width: '90%'}} />
      </View>
    </View>
  );
};

export default FlightSearchField;

const styles = StyleSheet.create({
  wrapper: {width: '50%', marginVertical: 10},
  textField: {
    height: 50,
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
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
