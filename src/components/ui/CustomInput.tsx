import {moderateScale, textScale} from '@utils/responsive';
import {COLORS, FONTS, RADIUS} from '@utils/theme';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import CustomText from './CustomText';

interface InputProps {
  label?: string;
  placeholder?: string;
  error?: string | undefined;
  onClear?: () => void;
}

const CustomInput = ({
  label,
  onClear,
  placeholder,
  error,
  ...props
}: InputProps) => {
  return (
    <>
      <View style={styles.container}>
        <CustomText variant="h3" fontFamily={FONTS.Medium}>
          {label}
        </CustomText>
        <TextInput
          {...props}
          placeholder={placeholder}
          placeholderTextColor={'grey'}
          style={styles.textContainer}
          autoCapitalize="none"
        />
      </View>
      {error && (
        <CustomText
          variant="h4"
          fontFamily={FONTS.Regular}
          style={styles.errorText}>
          {error}
        </CustomText>
      )}
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    padding: moderateScale(6),
  },
  textContainer: {
    // backgroundColor: 'red',
    fontSize: textScale(20),
    color: COLORS.black,
  },
  errorText: {
    marginTop: -8,
    color: COLORS.danger,
  },
});
