import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import moment from 'moment-timezone';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const CurrentDay = ({data, onMap, cityName}) => {
  if (data && data.weather) {
    const img = {
      uri:
        'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png',
    };

    return (
      <>
        {onMap ? (
          <View>
            {cityName && cityName.length > 0 && (
              <Text style={styles.cityName}>{cityName}</Text>
            )}

            <View style={styles.mapCurrentDay}>
              <View>
                <Text style={styles.temp}>
                  Night: {Math.trunc(data.temp.night)}&#176;C
                </Text>
                <Text style={styles.temp}>
                  Day: {Math.trunc(data.temp.day)}&#176;C
                </Text>
              </View>

              <View style={styles.mapImageWrapper}>
                <ImageBackground source={img} style={styles.image} />
              </View>
            </View>
          </View>
        ) : (
          <LinearGradient
            colors={['#ebebeb', '#ffffff', '#ebebeb']}
              style={styles.item}
          >
            <Text style={styles.day}>
              {moment(data.dt * 1000).format('dddd')}
            </Text>
            <View>
                <Text style={styles.temp}>Night: {Math.trunc(data.temp.night)}&#176;C</Text>
                <Text style={styles.temp}>Day: {Math.trunc(data.temp.day)}&#176;C</Text>
            </View>
            
            <View style={styles.imageWrapper}>
                <ImageBackground source={img} style={styles.image} />
            </View>
          </LinearGradient>
        )}
      </>

      );
  } else {
    return <View />;
  }
};

export default CurrentDay;
