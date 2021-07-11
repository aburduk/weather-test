import React from 'react';
import {View} from 'react-native';

import ForecastItem from './ForecastItem';

const Forecast = ({data}) => {
  return (
    <View>
      {data && data.length > 0 ? (
        data.map(
          (data, idx) =>
            idx !== 0 && <ForecastItem key={idx} forecastItem={data} />,
        )
      ) : (
        <View />
      )}
    </View>
  );
};

export default Forecast;
