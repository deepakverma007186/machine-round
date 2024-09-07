import DisplayImage from '@components/gallery/DisplayImage';
import AppSafeAreaView from '@components/global/AppSafeAreaView';
import CustomText from '@components/ui/CustomText';
import useFetchImages from '@hooks/useFetchImages';
import {moderateScale, moderateScaleVertical} from '@utils/responsive';
import {COLORS, FONTS, RADIUS} from '@utils/theme';
import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type Props = {};

const Gallery = (props: Props) => {
  const [offset, setOffset] = useState(1);

  const {data, loading, hasMore} = useFetchImages(offset);

  const loadMoreImages = useCallback(() => {
    if (!loading && hasMore) {
      setOffset(prevOffset => prevOffset + 1);
    }
  }, [offset]);

  // Memoized `keyExtractor` to prevent re-renders
  const keyExtractor = useCallback(item => `${item.id}img`, []);

  // Memoized `renderItem` to prevent unnecessary re-renders
  const renderItem = useCallback(({item}) => <DisplayImage item={item} />, []);

  return (
    <AppSafeAreaView>
      <CustomText
        variant="h2"
        fontFamily={FONTS.SemiBold}
        style={styles.galleryHead}>
        Gallery
      </CustomText>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <ListFooterComponent onPress={loadMoreImages} />
          )
        }
      />
    </AppSafeAreaView>
  );
};

const ListFooterComponent = ({onPress}: any) => {
  return (
    <TouchableOpacity style={styles.loadBtn} onPress={onPress}>
      <CustomText variant="h3">Click here to Load more...</CustomText>
    </TouchableOpacity>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  galleryHead: {
    textAlign: 'center',
    paddingVertical: moderateScaleVertical(16),
    backgroundColor: COLORS.primary,
    color: COLORS.white,
  },
  listContainer: {
    padding: moderateScale(16),
    paddingBottom: moderateScaleVertical(60),
    rowGap: moderateScaleVertical(16),
  },
  loadBtn: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(20),
  },
});
