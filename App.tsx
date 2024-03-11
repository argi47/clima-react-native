import React, { useState, useEffect } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native'
import { classes } from './AppClasses'
import Formulario from './src/components/Formulario/Formulario.tsx'

const App = () => {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  })
  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})

  const { ciudad, pais } = busqueda

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Ha ocurrido un error. Inténtalo de nuevo o prueba con otra ciudad y/o país',
      [{ text: 'OK' }]
    )
  }

  useEffect(() => {
    const consultarClima = async () => {
      if (consultar) {
        const appId = 'b43ec0408ae43600a0747619828cf1e2'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        try {
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()

          if (resultado.cod !== '200') {
            mostrarAlerta()
            return
          }

          setResultado(resultado)
          console.log('resultado: ', resultado)
        }
        catch (error) {
          mostrarAlerta()
        }

        setConsultar(false)
      }
    }

    consultarClima()
  }, [consultar])

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <View style={classes.app}>
          <View style={classes.contenido}>
            <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

export default App
