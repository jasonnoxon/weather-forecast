import React from 'react';

const WeatherItem = ({ forecast }) => {
  const imgUrl = `http:${forecast.condition.icon}`;

  return (
    <div className="card">
      <div className="image">
        <img src={imgUrl} alt={forecast.condition.text} />
      </div>
      <div className="content">
        <div className="header">{forecast.date}</div>
        <div className="meta">
          <span className="text">{forecast.condition.text}</span>
        </div>
        <div className="description">
          <p>
            The high today will be {Math.ceil(forecast.maxtemp_f)}, and the low
            will be {Math.ceil(forecast.mintemp_f)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherItem;
