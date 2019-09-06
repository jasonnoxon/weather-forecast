import React from 'react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import weather from '../api/weather';

class App extends React.Component {
  state = { forecast: [], loading: false };
  onTermSubmit = async obj => {
    this.setState({ forecast: [], loading: true });

    const result = await weather.get('', {
      params: {
        key: process.env.REACT_APP_API_KEY,
        q: obj.term,
        days: obj.days
      }
    });

    this.setState({
      forecast: result.data.forecast.forecastday,
      loading: false
    });
  };
  render() {
    return (
      <div>
        <SearchBar
          onFormSubmit={this.onTermSubmit}
          loading={this.state.loading}
        />
        <WeatherList forecast={this.state.forecast} />
      </div>
    );
  }
}

export default App;
