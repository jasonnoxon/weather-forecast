import React from 'react';
import WeatherItem from './WeatherItem';

const WeatherList = props => {
  const renderedList = props.forecast.map(dayForecast => {
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

  return (
    <div
      className="ui segment"
      style={{ display: props.forecast.length === 0 ? 'none' : 'block' }}
    >
      <h2 style={{ textAlign: 'center' }}>
        Forecast for {props.location.name}, {props.location.region}
      </h2>
      <div
        className={`ui ${props.days === 5 ? 'five' : 'seven'} stackable cards`}
      >
        {renderedList}
      </div>
    </div>
  );
};

export default WeatherList;
