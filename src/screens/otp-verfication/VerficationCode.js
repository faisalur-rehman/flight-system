import React, {useState} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {colors, fonts} from '../../utils/theme';

const CELL_COUNT = 6;
const VerificationCode = ({value, setValue, style = {}}) => {
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View>
      <CodeField
        ref={ref}
        autoFocus={true}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => {
          return (
            <View
              key={index}
              onLayout={getCellOnLayoutHandler(index)}
              style={[
                styles.cell,
                style,
                isFocused || (symbol && styles.focusCell),
              ]}>
              <Text style={[styles.focusCell]}>
                {symbol || (isFocused ? <Cursor cursorSymbol="-" /> : null)}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 50,
    height: 50,
    paddingRight: 5,
    borderWidth: 1.2,
    borderColor: colors.textGray,
    borderRadius: 4,
    color: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  focusCell: {
    borderColor: colors.primary,
    color: colors.primary,
    fontSize: 25,
    textAlign: 'center',
  },
  textStyles: {
    fontSize: 14,
    fontFamily: fonts.medium,
    marginVertical: 15,
  },
  codeFieldRoot: {
    marginVertical: 20,
  },
});

export default VerificationCode;
