import React from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';

import {CurrentDay} from 'components/CurrentDay';
import {Forecast} from 'components/Forecast';

import styles from './styles';
import {colors} from 'resources/styles/common';

const WeatherScroll = ({weatherData, isLoading}) => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentInset={{bottom: 175}}
      contentContainerStyle={{paddingBottom: 225}}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical>
       {isLoading && (<ActivityIndicator size="large" color={colors.white} style={styles.activityIndicator} />)}
      <CurrentDay
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
      />
      <Forecast data={weatherData} />
    </ScrollView>
  );
};

export default WeatherScroll;
