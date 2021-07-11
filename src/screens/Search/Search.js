import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import {fetchDataFromApi, fetchLocationApi} from 'services/apiCall';
import {WeatherScroll} from 'components/WeatherScroll';

import styles from './styles';

export const Search = ({route, navigation}) => {
  // const location = route.params.coordinate || {};
  const [location, setLocation] = useState('');
  const {latitude, longitude} = location;
  const [error, setErrorMessage] = useState();
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState('');
  const [chosenLocation, setChosenLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  useEffect(() => {
    if (route && route.params) {
      setLocation(route.params.coordinate);
      setCityName(route.params.cityName);
    }
  }, [route]);

  useEffect(() => {
    fetchData(latitude, longitude);
  }, [location]);

  const fetchData = async () => {
    setErrorMessage();
    await fetchDataFromApi(latitude, longitude, setData, setErrorMessage, setIsLoading);
  };

  const fetchCityName = async () => {
    setErrorMessage();
    await fetchLocationApi(cityName, setChosenLocation, setErrorMessage);
    await fetchDataFromApi(
      chosenLocation.lat,
      chosenLocation.lng,
      setData,
      setErrorMessage,
      setIsLoading
    );
  };

  const onPress = () => {
    setData({});
    fetchCityName();
  };

  return (
    <>
      <LinearGradient
        colors={['#4298cb', '#58b2b5', '#6cc9a3']}
        style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder={'Enter city name'}
            value={cityName}
            onChangeText={setCityName}
            onSubmitEditing={onPress}
            returnKeyType="search"
          />
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Icon name="search" size={20} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>

        {error ? (
          <View style={styles.errorWrapper}>
            <Text style={styles.error}>{error.message}</Text>
          </View>
        ) : (
          <WeatherScroll weatherData={data.daily} isLoading={isLoading} />
        )}
      </LinearGradient>
    </>
  );
};

export default Search;
