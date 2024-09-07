import CustomText from '@components/ui/CustomText'
import { FONTS } from '@utils/theme'
import React, { FC, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import {moderateScaleVertical} from '@utils/responsive';
import { navigate, resetAndNavigate } from '@utils/navigationUtils'

type Props = {}

const SplashScreen:FC = (props: Props) => {
    useEffect(() => {
      const splash = setTimeout(()=>{
        resetAndNavigate('Gallery');
      },2000)
    
      return () => clearTimeout(splash);
    }, [])
    
  return (
    <View style={styles.container}>
      <Icon name='codesquare' size={120} color={'teal'}/>
      <CustomText variant='h1' fontFamily={FONTS.ExtraBold}>Machine Round</CustomText>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      gap:moderateScaleVertical(10)
    }
  })