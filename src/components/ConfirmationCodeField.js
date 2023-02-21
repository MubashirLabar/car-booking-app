import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import colors from "styles/colors";

export default function ConfirmationCodeField({
  value,
  setValue,
  cellCount,
  ...rest
}) {
  const ref = useBlurOnFulfill({ value, cellCount: cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
      value={value}
      onChangeText={setValue}
      cellCount={cellCount}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  codeFieldRoot: {},
  cell: {
    width: 50,
    height: 50,
    color: colors.white,
    lineHeight: 45,
    fontSize: 28,
    borderBottomWidth: 1.6,
    borderColor: colors.grey[300],
    textAlign: "center",
    fontFamily: "Montserrat_600SemiBold",
  },
  focusCell: {
    borderColor: colors.white,
  },
});
