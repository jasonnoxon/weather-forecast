import React from 'react';
import WeatherItem from './WeatherItem';

const WeatherList = ({ forecast }) => {
  const renderedList = forecast.map(dayForecast => {
    const date = new Date(dayForecast.date);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    dayForecast.day.date = `${
      months[date.getMonth()]
    }, ${date.getDay()} ${date.getFullYear()}`;
    return <WeatherItem key={dayForecast.date} forecast={dayForecast.day} />;
  });

  return <div className="ui divided items">{renderedList}</div>;
};

export default WeatherList;
