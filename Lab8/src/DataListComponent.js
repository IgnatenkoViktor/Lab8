import React, { useState, useEffect } from 'react';
import fetchDataFromApi from './fetchDataFromApi';
import DataItemComponent from './DataItemComponent';

const DataListComponent = () => {
  const [data, setData] = useState([]);
  const apiKey = '196bc45aabe31f92312e2d3a5411366a';
  const cities = ['Kyiv', 'London', 'Paris', 'New York', 'Tokyo']; // Додайте міста, які вас цікавлять

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const promises = cities.map(async (city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        return await fetchDataFromApi(apiUrl, apiKey);
      });

      const results = await Promise.all(promises);
      console.log(results);
      setData(results);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  return (
    <div>
      <h2>Weather Information</h2>
      <button onClick={fetchData}>Fetch Weather</button>
      {data.map((item, index) => (
        <ul key={index}>
          <DataItemComponent item={item} />
        </ul>
      ))}
    </div>
  );
};

export default DataListComponent;
