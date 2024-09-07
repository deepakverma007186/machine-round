import Header from '@components/detail/Header';
import ShowImage from '@components/detail/ShowImage';
import AppSafeAreaView from '@components/global/AppSafeAreaView';
import CustomButton from '@components/ui/CustomButton';
import CustomInput from '@components/ui/CustomInput';
import {useRoute} from '@react-navigation/native';
import {submitFormHelper} from '@service/submitFormHelper';
import {moderateScale, moderateScaleVertical} from '@utils/responsive';
import {savadataValidation} from '@utils/validations';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const DetailForm = () => {
  const {params} = useRoute();
  const imgUrl = params?.item?.xt_image;
  const [loading, setLoading] = useState<boolean>(false);

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
    },
    onSubmit: values => submitFormHelper(values, imgUrl, resetForm, setLoading),
    validationSchema: savadataValidation,
  });
  return (
    <AppSafeAreaView>
      <Header title="Detail Screen" />
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <ShowImage url={imgUrl} />
        <CustomInput
          label="First Name"
          placeholder={'Enter first name...'}
          maxLength={50}
          value={values.first_name}
          onChangeText={handleChange('first_name')}
          onBlur={handleBlur('first_name')}
          error={touched.first_name && errors.first_name && errors.first_name}
        />
        <CustomInput
          label="Last Name"
          placeholder={'Enter last name...'}
          maxLength={50}
          value={values.last_name}
          onChangeText={handleChange('last_name')}
          onBlur={handleBlur('last_name')}
          error={touched.last_name && errors.last_name && errors.last_name}
        />
        <CustomInput
          label="Email"
          placeholder={'Enter your email...'}
          keyboardType="email-address"
          maxLength={100}
          autoCapitalize="none"
          value={values.email}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={touched.email && errors.email && errors.email}
        />
        <CustomInput
          label="Phone"
          placeholder={'Enter phone number...'}
          keyboardType="number-pad"
          maxLength={10}
          value={values.phone}
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          error={touched.phone && errors.phone && errors.phone}
        />
        <CustomButton
          title={loading ? 'Submitting...' : 'Submit'}
          onPress={handleSubmit}
          disabled={loading}
        />
      </ScrollView>
    </AppSafeAreaView>
  );
};

export default DetailForm;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: moderateScale(16),
    rowGap: moderateScaleVertical(10),
  },
});
