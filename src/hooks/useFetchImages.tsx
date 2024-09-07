import {useEffect, useState} from 'react';
import {API} from '@service/index';
import {Images} from 'types';

export default function useFetchImages(offset: number) {
  const [data, setData] = useState<Images[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      // Skip fetch if there's no more data to load
      if (!hasMore) return;

      setLoading(true);

      const requestData = {
        user_id: 108,
        offset: offset,
        type: 'popular',
      };

      try {
        const formData = new FormData();
        formData.append('user_id', requestData.user_id);
        formData.append('offset', requestData.offset);
        formData.append('type', requestData.type);

        const response = await API.post('/getdata.php', formData);

        if (response?.status === 200) {
          const newImages = response?.data?.images || [];

          // Append new images to the existing list
          setData(prevData => [...prevData, ...newImages]);

          // Stop loading more if no new images are returned
          if (newImages.length === 0) {
            setHasMore(false);
          }
        }
      } catch (error) {
        console.error('Error fetching images:', error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [offset]);

  return {data, loading, error, hasMore};
}
