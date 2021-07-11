import React, {useState, useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {fetchDataFromApi, fetchCityNameFromApi} from 'services/apiCall';
import {CurrentDay} from 'components/CurrentDay';

import styles from './styles';

const latitudeDelta = 1;
const longitudeDelta = 1;

export const Map = ({navigation}) => {
  const mapRef = useRef();
  const [markerLocation, setMarkerLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState();
  const [error, setErrorMessage] = useState();
  const [region, setRegion] = useState({
    latitude: 50.3862676,
    longitude: 30.7414751,
    latitudeDelta,
    longitudeDelta,
  });

  useEffect(() => {
    if (markerLocation) {
      fetchData();
      fetchCityName();
      setRegion({
        ...region,
        latitude: markerLocation.latitude,
        longitude: markerLocation.longitude,
        latitudeDelta,
        longitudeDelta,
      });
    }
  }, [markerLocation]);

  useEffect(() => {
    animateToRegion();
  }, [region]);

  const animateToRegion = () => {
    mapRef.current.animateToRegion(region, 1000);
  };

  const fetchData = async () => {
    await fetchDataFromApi(
      markerLocation.latitude,
      markerLocation.longitude,
      setWeatherData,
      setErrorMessage,
    );
  };

  const fetchCityName = async () => {
    await fetchCityNameFromApi(
      markerLocation.latitude,
      markerLocation.longitude,
      setCityName,
      setErrorMessage,
    );
  };

  const showMarker = eventObj => {
    setMarkerLocation(eventObj.nativeEvent.coordinate);
  };

  const showWeather = obj => {
    navigation.navigate('Search', {
      coordinate: obj.nativeEvent.coordinate,
      cityName: cityName,
    });
  };

  const hideMarker = () => {
    setMarkerLocation(null);
  };

  const renderMarker = () => {
    return (
      markerLocation &&
      weatherData && (
        <View style={styles.markerWrapper}>
          <Marker coordinate={markerLocation} onPress={showWeather}>
            <LinearGradient
              colors={['#f1f1f1', '#ffffff', '#f1f1f1']}
              style={styles.marker}>
              <CurrentDay
                data={
                  weatherData.daily && weatherData.daily.length > 0
                    ? weatherData.daily[0]
                    : {}
                }
                onMap={true}
                cityName={cityName}
              />
            </LinearGradient>
          </Marker>
        </View>
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <View style={styles.locationWrapper}>
          <Text style={styles.locationLabel}>Location</Text>
        </View>
      </View>

      <View style={styles.hold}>
        <View style={styles.holdIconWrapper}>
          <Icon name="hand-point-up" style={styles.holdIcon} />
        </View>

        <Text style={styles.holdText}>Please tape hold</Text>
      </View>

      <MapView
        ref={mapRef}
        style={styles.map}
        onLongPress={showMarker}
        onPress={hideMarker}
        initialRegion={region}>
        {renderMarker()}
      </MapView>
    </View>
  );
};

export default Map;
