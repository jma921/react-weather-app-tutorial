import React from 'react';

const Weather = props => {
  const { temp, humidity } = props.weather_data;
  const { city } = props;
  return (
    <div>
      <h2>
        {city}
      </h2>
      <h3>
        Temperature: {temp}&#8457;
      </h3>
      <h3>
        Humidity: {humidity}%
      </h3>
    </div>
  );
};

export default Weather;
