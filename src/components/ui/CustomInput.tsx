import {hocStyles} from '@styles/index';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '@utils/responsive';
import {COLORS, FONTS, RADIUS} from '@utils/theme';
import React from 'react';
import {StyleProp, StyleSheet, TextInput, TextStyle, View} from 'react-native';
import CustomText from './CustomText';

interface InputProps {
  label?: string;
  placeholder?: string;
  error?: string | undefined;
  textInputStyle?: StyleProp<TextStyle>;
}

const CustomInput = ({
  label,
  placeholder,
  error,
  textInputStyle,
  ...props
}: InputProps) => {
  return (
    <>
      <View style={hocStyles.flexRowSpaceBetween}>
        <CustomText variant="h3" fontFamily={FONTS.Medium}>
          {label}
        </CustomText>
        <TextInput
          {...props}
          placeholder={placeholder}
          placeholderTextColor={'grey'}
          style={[styles.textContainer, textInputStyle]}
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
  textContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    fontSize: textScale(20),
    color: COLORS.black,
    width: width * 0.6,
    paddingHorizontal: moderateScale(10),
  },
  errorText: {
    marginTop: -moderateScaleVertical(8),
    color: COLORS.danger,
    textAlign: 'right',
  },
});
