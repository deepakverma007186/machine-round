import CustomText from '@components/ui/CustomText';
import {hocStyles} from '@styles/index';
import {goBack} from '@utils/navigationUtils';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '@utils/responsive';
import {COLORS, FONTS} from '@utils/theme';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  title: string;
};

const Header = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => goBack()}
        style={[styles.backBtnContainer, {left: moderateScale(10)}]}>
        <Icon name="chevron-back" size={textScale(24)} color={COLORS.white} />
      </Pressable>
      <CustomText
        variant="h2"
        fontFamily={FONTS.SemiBold}
        style={{color: COLORS.white}}>
        {title}
      </CustomText>
      <View style={styles.backBtnContainer} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    ...hocStyles.flexRowSpaceBetween,
    paddingVertical: moderateScaleVertical(12),
    backgroundColor: COLORS.primary,
  },
  backBtnContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
