import {moderateScaleVertical} from '@utils/responsive';
import {COLORS, FONTS, RADIUS} from '@utils/theme';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from './CustomText';

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
}

const CustomButton = ({title, onPress, ...props}: CustomButtonProps) => {
  return (
    <TouchableOpacity {...props} onPress={onPress} style={styles.container}>
      <CustomText
        variant="h2"
        fontFamily={FONTS.SemiBold}
        style={styles.btnText}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScaleVertical(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS,
  },
  btnText: {
    color: COLORS.white,
  },
});
