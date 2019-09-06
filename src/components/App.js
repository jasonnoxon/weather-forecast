import React from 'react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import weather from '../api/weather';

class App extends React.Component {
  state = { location: [], forecast: [], loading: false, days: 5 };
  onTermSubmit = async obj => {
    this.setState({ location: [], forecast: [], loading: true });

    const result = await weather.get('', {
      params: {
        key: process.env.REACT_APP_API_KEY,
        q: obj.term,
        days: obj.days
      }
    });

    this.setState({
      location: result.data.location,
      forecast: result.data.forecast.forecastday,
      loading: false,
      days: obj.days
    });
  };
  render() {
    return (
      <div>
        <SearchBar
          onFormSubmit={this.onTermSubmit}
          loading={this.state.loading}
        />
        <WeatherList
          location={this.state.location}
          forecast={this.state.forecast}
          days={this.state.days}
        />
      </div>
    );
  }
}

export default App;
