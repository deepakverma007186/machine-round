import {height} from '@utils/responsive';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

type Props = {
  url: string;
};

const ShowImage = ({url}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: url}}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

export default ShowImage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.3,
  },
});
