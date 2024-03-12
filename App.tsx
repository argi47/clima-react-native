import React, { useState, useEffect } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native'
import { classes } from './AppClasses'
import Formulario from './src/components/Formulario/Formulario.tsx'
import Clima from './src/components/Clima/Clima.tsx'

const App = () => {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  })
  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState<any>({})
  const [bgcolor, setBgcolor] = useState('rgb(71, 149, 212)')

  const { ciudad, pais } = busqueda

  const bgcolorApp = {
    backgroundColor: bgcolor
  }

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Ha ocurrido un error. Inténtalo de nuevo o prueba con otra ciudad y/o país. Asegúrate también de que la ciudad introducida pertenezca al país seleccionado.',
      [{ text: 'OK' }]
    )

    setResultado({})
  }

  useEffect(() => {
    const consultarClima = async () => {
      if (consultar) {
        const appId = 'b43ec0408ae43600a0747619828cf1e2'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        try {
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()

          if (resultado.cod != '200') {
            mostrarAlerta()
          }
          else {
            setResultado(resultado)

            // Modifica los colores de fondo según la temperatura
            const kelvin = 273.15
            const { main } = resultado
            const tempActual = main.temp - kelvin

            if (tempActual < 10) {
              setBgcolor('rgb(105, 108, 149)')
            }
            else if (tempActual >= 10 && tempActual < 25) {
              setBgcolor('rgb(71, 149, 212)')
            }
            else {
              setBgcolor('rgb(178, 28, 61)')
            }
          }
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
        <View style={[classes.app, bgcolorApp]}>
          <View style={classes.contenido}>
            {resultado.name &&
              <Clima
                resultado={resultado}
              />
            }

            <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
              setResultado={setResultado}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

export default App
