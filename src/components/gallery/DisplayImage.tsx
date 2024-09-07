import {navigate} from '@utils/navigationUtils';
import {moderateScale} from '@utils/responsive';
import {RADIUS} from '@utils/theme';
import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {Images} from 'types';

interface DisplayImageProps {
  item: Images;
}

const DisplayImage = ({item}: DisplayImageProps) => {
  const [imageDimensions, setImageDimensions] = useState({width: 0, height: 0});

  useEffect(() => {
    // Fetch the original image dimensions to maintain the aspect ratio
    Image.getSize(item?.xt_image, (width, height) => {
      // Calculate dynamic height based on desired width and aspect ratio
      const desiredWidth = 300;
      const aspectRatio = width / height;
      const calculatedHeight = desiredWidth / aspectRatio;
      setImageDimensions({width: desiredWidth, height: calculatedHeight});
    });
  }, [item?.xt_image]);

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigate('DetailForm', {item})}>
      <Image
        source={{uri: item?.xt_image}}
        resizeMode="contain"
        style={{
          width: imageDimensions.width,
          height: imageDimensions.height,
          ...styles.imageContainer,
        }}
      />
    </Pressable>
  );
};

export default DisplayImage;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    padding: moderateScale(10),
  },
  imageContainer: {
    alignSelf: 'center',
    borderRadius: RADIUS,
    // overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
