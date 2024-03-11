import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import { classes } from './Clima'

const Clima = (props: any) => {
  const { resultado } = props

  const { name, main } = resultado
  const kelvin = 273.15

  return (
    <View style={classes.clima}>
      <Text style={[classes.texto, classes.actual]}>
        {Math.round(main.temp - kelvin)}
        <Text style={classes.temperatura}>{' '}&#x2103;</Text>
        <Image
          style={classes.image}
          source={{ uri: `http://openweathermap.org/img/w/${resultado.weather[0].icon}.png` }}
        />
      </Text>

      <View style={classes.temperaturas}>
        <Text style={classes.texto}>
          Min{' '}
          <Text style={classes.temperatura}>
            {Math.round(main.temp_min - kelvin)}{' '}&#x2103;
          </Text>
        </Text>

        <Text style={classes.texto}>
          Max{' '}
          <Text style={classes.temperatura}>
            {Math.round(main.temp_max - kelvin)}{' '}&#x2103;
          </Text>
        </Text>
      </View>
    </View>
  )
}

export default Clima
