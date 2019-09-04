import React from 'react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import weather from '../api/weather';

class App extends React.Component {
  state = { forecast: [] };
  onTermSubmit = async term => {
    this.setState({ forecast: [] });
    const result = await weather.get('', {
      params: {
        q: term
      }
    });

    this.setState({ forecast: result.data.forecast.forecastday });
  };
  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <WeatherList forecast={this.state.forecast} />
      </div>
    );
  }
}

export default App;
