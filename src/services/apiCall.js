import React, {useState, useEffect, useRef} from 'react';
import Geocoder from 'react-native-geocoding';
import {
  GOOGLE_API_KEY,
  OPEN_WEATHER_API_URL,
  OPEN_WEATHER_API_KEY,
} from 'constants/constants';

Geocoder.init(GOOGLE_API_KEY);

const fetchDataFromApi = async (lat, lng, setWeatherData, setErrorMessage) => {
  try {
    if (lat && lng) {
      const response = await fetch(
        `${OPEN_WEATHER_API_URL}lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&appid=${OPEN_WEATHER_API_KEY}`,
      );
      const result = await response.json();
      if (result) {
        setWeatherData(result);
      }
    }
  } catch (error) {
    // console.error('Error:', error);
    setErrorMessage(error);
  }
};

const fetchCityNameFromApi = async (lat, lng, setCityName, setErrorMessage) => {
  await Geocoder.from(lat, lng)
    .then(json => {
      var addressComponent = json.results[0].formatted_address;
      setCityName(addressComponent);
    })
    .catch(error => setErrorMessage(error));
};

const fetchLocationApi = async (
  cityName,
  setChosenLocation,
  setErrorMessage,
) => {
  if (cityName) {
    // Search by address
    await Geocoder.from(cityName)
      .then(json => {
        var location = json.results[0].geometry.location;

        setChosenLocation(location);
      })
      .catch(error => setErrorMessage(error));
  }
};

export {fetchDataFromApi, fetchCityNameFromApi, fetchLocationApi};
