import React from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { classes } from './AppClasses'
import Formulario from './src/components/Formulario/Formulario.tsx'

const App = () => {

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <View style={classes.app}>
          <View style={classes.contenido}>
            <Formulario />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

export default App
