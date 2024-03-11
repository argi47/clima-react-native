import React, { useState } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { classes } from './AppClasses'
import Formulario from './src/components/Formulario/Formulario.tsx'

const App = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

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
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

export default App
