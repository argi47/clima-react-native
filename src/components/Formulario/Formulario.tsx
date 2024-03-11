import React from 'react'
import {
  View,
  TextInput
} from 'react-native'
import { classes } from './Formulario'

const Formulario = () => {

  return (
    <>
      <View style={classes.formulario}>
        <View>
          <TextInput
            placeholder='Ciudad'
            placeholderTextColor='#666'
          />
        </View>
      </View>
    </>
  )
}

export default Formulario
