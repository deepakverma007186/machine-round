import { API } from '@service/index';
import { Alert } from 'react-native';
import { resetAndNavigate } from '@utils/navigationUtils';

export const submitFormHelper = async (
  values: any,
  imgUrl: string,
  resetForm: () => void,
  setLoading: (value: boolean) => void
) => {
  try {
    setLoading(true);

    // Trim the values to remove extra spaces
    const trimmedValues = {
      first_name: values.first_name.trim(),
      last_name: values.last_name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
    };
    
    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append('first_name', trimmedValues.first_name);
    formData.append('last_name', trimmedValues.last_name);
    formData.append('email', trimmedValues.email);
    formData.append('phone', trimmedValues.phone);

    // Append image as multipart form data
    if (imgUrl) {
      formData.append('user_image', {
        uri: imgUrl,
        name: 'image.jpg',
        type: 'image/jpg',
      });
    }

    // API call to save form data
    const response = await API.post('/savedata.php', formData);

    if (response.status === 200) {
      Alert.alert('Success', 'Form submitted successfully!', [
        {
          text: 'Okay',
          onPress: () => resetAndNavigate('Gallery'),
        },
      ]);
      resetForm();
    } else {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    Alert.alert('Error', 'Failed to submit the form.');
  } finally {
    setLoading(false);
  }
};
