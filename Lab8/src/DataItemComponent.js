import React from 'react';

const DataItemComponent = ({ item }) => {
  return (
    <li>
      <h3>City: {item.name}</h3>
      {item.weather && item.weather.length > 0 && (
        <p>Description: {item.weather[0].description}</p>
      )}
      {item.main && (
        <>
          <p>Temperature: {item.main.temp} °C</p>
          <p>Humidity: {item.main.humidity}%</p>
        </>
      )}
    </li>
  );
};

export default DataItemComponent;
