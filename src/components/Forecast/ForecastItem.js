import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import moment from 'moment-timezone';

import styles from './styles';

const ForecastItem = ({forecastItem}) => {
    const img = {uri: "https://openweathermap.org/img/wn/"+forecastItem.weather[0].icon+"@2x.png"}

    return (
        <View style={styles.forecastItemWrapper}>
            <View style={styles.day}>
                <Text style={styles.dayText}>{moment(forecastItem.dt * 1000).format('dddd')}</Text>
            </View>
            
            
            <View>
                <Text style={styles.temp}>Night: {Math.trunc(forecastItem.temp.night)}&#176;C</Text>
                <Text style={styles.temp}>Day: {Math.trunc(forecastItem.temp.day)}&#176;C</Text>
            </View>

            <View style={styles.imageWrapper}>
                <ImageBackground source={img} style={styles.image} />
            </View>
        </View>
    )
}

export default ForecastItem

