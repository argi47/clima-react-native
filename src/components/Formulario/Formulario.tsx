import React from 'react'
import {
  View,
  TextInput,
  Pressable,
  Text
} from 'react-native'
import { classes } from './Formulario'
import { Picker } from '@react-native-picker/picker'

const Formulario = () => {

  return (
    <>
      <View>
        <View>
          <TextInput
            style={classes.input}
            placeholder='Ciudad'
            placeholderTextColor='#666'
          />
        </View>
        <View>
          <Picker
            style={classes.picker}
          >
            <Picker.Item label='-- Seleccione --' value='' />
            <Picker.Item label='España' value='ES' />
            <Picker.Item label='Estados Unidos' value='US' />
            <Picker.Item label='México' value='MX' />
            <Picker.Item label='Argentina' value='AR' />
            <Picker.Item label='Colombia' value='CO' />
            <Picker.Item label='Costa Rica' value='CR' />
            <Picker.Item label='Perú' value='PE' />
          </Picker>
        </View>
        <Pressable>
          <View style={classes.btnBuscar}>
            <Text style={classes.textoBuscar}>Buscar Clima</Text>
          </View>
        </Pressable>
      </View>
    </>
  )
}

export default Formulario
