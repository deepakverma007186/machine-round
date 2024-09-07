import {COLORS} from '@utils/theme';
import React, {FC, ReactNode} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface AppSafeAreaViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

/**
 * Globally handles the safe area view and avoid the notch
 */
const AppSafeAreaView: FC<AppSafeAreaViewProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.safeAreaContainer]}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default AppSafeAreaView;
