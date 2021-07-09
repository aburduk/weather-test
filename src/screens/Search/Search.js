import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Geocoder from 'react-native-geocoding';
import {
  GOOGLE_API_KEY,
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_API_KEY,
} from 'constants/constants';
import { WeatherScroll } from 'components/WeatherScroll';

import styles from './styles';

Geocoder.init(GOOGLE_API_KEY);
let location;

export const Search = ({route, navigation}) => {
  // const location = route.params.coordinate || {};
  const [location, setLocation] = useState('');
  const {latitude, longitude} = location;
  const [error, setErrorMessage] = useState('');
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    if(route && route.params) {
      setLocation(route.params.coordinate);
      setCityName(route.params.cityName);
    }
  }, [route]);

  useEffect(() => {
      fetchDataFromApi(latitude, longitude);
  }, [location]);

  const fetchDataFromApi = async(lat, lng) => {
    if (lat && lng) {
      try {
        const response = await fetch(`${OPEN_WEATHER_API_URL}lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&appid=${OPEN_WEATHER_API_KEY}`,);
        const result = await response.json();
        if(result) {
          // console.log('data', result);
          setData(result);
        }
      } catch (error) {
        // console.error('Error:', error);
        setErrorMessage(error);
      }
    }
  };

  const onPress = () => {
    if(cityName) {
      // Search by address
      Geocoder.from(cityName)
      .then(json => {
        var location = json.results[0].geometry.location;
        // console.log(location);
        fetchDataFromApi(location.lat, location.lng);
      })
      .catch(error => console.warn(error));
    }
  };

  return (
    <>
      <LinearGradient
        colors={['#4298cb', '#58b2b5', '#6cc9a3']}
        style={styles.container}
      >
        <View style={styles.header}>
          <TextInput 
            style={styles.input} 
            placeholder={'Enter city name'} 
            value={cityName} 
            onChangeText={setCityName} 
            onSubmitEditing={onPress}
          />
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Icon name="search" size={20} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>

        {( !data && error && !location ) ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <WeatherScroll weatherData={data.daily} />
        )}
      </LinearGradient>
    </>
  );
};

export default Search;
