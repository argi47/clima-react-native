import React, { useState } from 'react'
import {
  View,
  TextInput,
  Pressable,
  Text,
  Animated,
  Alert
} from 'react-native'
import { classes } from './Formulario'
import { Picker } from '@react-native-picker/picker'

const Formulario = (props: any) => {
  const { busqueda, setBusqueda } = props
  const { pais, ciudad } = busqueda

  const [animacionBoton] = useState(new Animated.Value(1))

  const estiloAnimacion = {
    transform: [{ scale: animacionBoton }]
  }

  const animacionEntrada = () => {
    Animated.spring(animacionBoton, {
      toValue: .75,
      useNativeDriver: true
    }).start()
  }

  const animacionSalida = () => {
    Animated.spring(animacionBoton, {
      toValue: 1,
      useNativeDriver: true,
      friction: 4,
      tension: 30
    }).start()
  }

  const consultarClima = () => {
    if (pais.trim() === '' || ciudad.trim() === '') {
      mostrarAlerta()
      return
    }
  }

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Agrega una ciudad y un país para la búsqueda',
      [{ text: 'Entendido' }]
    )
  }

  return (
    <>
      <View>
        <View>
          <TextInput
            value={ciudad}
            onChangeText={(ciudad) => setBusqueda({ ...busqueda, ciudad })}
            style={classes.input}
            placeholder='Ciudad'
            placeholderTextColor='#666'
          />
        </View>
        <View>
          <Picker
            selectedValue={pais}
            onValueChange={(pais) => setBusqueda({ ...busqueda, pais })}
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
        <Pressable
          onPressIn={() => animacionEntrada()}
          onPressOut={() => animacionSalida()}
          onPress={() => consultarClima()}
        >
          <Animated.View style={[classes.btnBuscar, estiloAnimacion]}>
            <Text style={classes.textoBuscar}>Buscar Clima</Text>
          </Animated.View>
        </Pressable>
      </View>
    </>
  )
}

export default Formulario
