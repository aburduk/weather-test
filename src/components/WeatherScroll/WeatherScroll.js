import React from 'react';
import {ScrollView} from 'react-native';

import {CurrentDay} from 'components/CurrentDay';
import {Forecast} from 'components/Forecast';

import styles from './styles';

const WeatherScroll = ({weatherData}) => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentInset={{bottom: 175}}
      contentContainerStyle={{paddingBottom: 225}}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical>
      <CurrentDay
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
      />

      <Forecast data={weatherData} />
    </ScrollView>
  );
};

export default WeatherScroll;
