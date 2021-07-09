import React, {useState, useEffect, useRef} from 'react';
import { Text, View } from 'react-native';
import Geocoder from 'react-native-geocoding';
import MapView, {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  GOOGLE_API_KEY,
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_API_KEY
} from 'constants/constants';

import {CurrentDay} from 'components/CurrentDay';

import styles from './styles';

Geocoder.init(GOOGLE_API_KEY);
const latitudeDelta = 1;
const longitudeDelta = 1;

export const Map = ({navigation}) => {
  const mapRef = useRef();
  const [markerLocation, setMarkerLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState();
  const [region, setRegion] = useState({
    latitude: 50.3862676,
    longitude: 30.7414751,
    latitudeDelta,
    longitudeDelta,
  });

  useEffect(() => {
    if(markerLocation) {
      fetchDataFromApi(markerLocation.latitude, markerLocation.longitude);
      fetchCityName(markerLocation.latitude, markerLocation.longitude);
      setRegion({
        ...region,
        latitude: markerLocation.latitude,
        longitude: markerLocation.longitude,
        latitudeDelta,
        longitudeDelta,
      })
    }
  }, [markerLocation]);

  useEffect(() => {
    animateToRegion()
  }, [region]);

  const animateToRegion = () => {
    mapRef.current.animateToRegion(region, 1000);
  }

  const fetchDataFromApi = async(lat, lng) => {
    if (lat && lng) {
      try {
        const response = await fetch(`${OPEN_WEATHER_API_URL}lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&appid=${OPEN_WEATHER_API_KEY}`,);
        const result = await response.json();
        if(result) {
          setWeatherData(result);
        }
      } catch (error) {
        // console.error('Error:', error);
        setErrorMessage(error);
      }
    }
  };

  const fetchCityName = (lat, lng) => {
    Geocoder.from(lat, lng)
		.then(json => {
      var addressComponent = json.results[0].formatted_address;
			setCityName(addressComponent)
		})
		.catch(error => console.warn(error));
  }


  const showMarker = eventObj => {
    setMarkerLocation(eventObj.nativeEvent.coordinate);
  };

  const showWeather = obj => {
    navigation.navigate('Search', {
      coordinate: obj.nativeEvent.coordinate,
      cityName: cityName
    });
  };

  const hideMarker = () => {
    setMarkerLocation(null);
    // setRegion(null)
  }

  const renderMarker = () => {
 
    return markerLocation &&  weatherData && (
      
      <View style={styles.markerWrapper}>
        <Marker coordinate={markerLocation} onPress={showWeather}>
          <LinearGradient
            colors={['#f1f1f1', '#ffffff', '#f1f1f1']}
            style={styles.marker}
          >
            <CurrentDay
              data={weatherData.daily && weatherData.daily.length > 0 ? weatherData.daily[0] : {}}
              onMap={true}
              cityName={cityName}
            />
          </LinearGradient>
        </Marker>
      </View>
      
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
        
        <Text style={styles.holdText}>
          Please tape hold
        </Text>
      </View>
      

      <MapView
        ref={mapRef}
        style={styles.map}
        onLongPress={showMarker}
        onPress={hideMarker}
        initialRegion={region}
      >
        {renderMarker()}
      </MapView>
    </View>
  );
};

export default Map;
