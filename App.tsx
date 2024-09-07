import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { COLORS, FONTS } from '@utils/theme'
import { textScale } from '@utils/responsive'

type Props = {}

const App = (props: Props) => {
  return (
    <View style={styles.container}>
      <Icon name='checkcircle' size={30} color={'teal'}/>
      <Text style={{fontFamily:FONTS.Theme, color:COLORS.primary, fontSize:textScale(30)}}>Machine Round</Text>
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})