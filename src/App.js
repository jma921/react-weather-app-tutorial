import React, { Component } from 'react';
import Weather from './Weather';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      zip: '',
      weather_data: null
    };
    this.handleZipChange = this.handleZipChange.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.renderWeather = this.renderWeather.bind(this);
  }
  handleZipChange(event) {
    this.setState({ zip: event.target.value });
  }
  async fetchWeather(event) {
    event.preventDefault();
    try {
      const apiKey = 'Replace with your key';
      const { zip } = this.state;
      const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        weather_data: data,
        zip: ''
      });
    } catch (e) {
      console.log(e);
    }
  }
  renderWeather() {
    if (!this.state.weather_data) {
      return;
    } else {
      return (
        <Weather
          weather_data={this.state.weather_data.main}
          city={this.state.weather_data.name}
        />
      );
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Simple Weather App</h1>
        <form onSubmit={this.fetchWeather}>
          <label htmlFor="zip">
            Zip Code:{' '}
            <input
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={this.handleZipChange}
            />
          </label>
          <input type="submit" value="Submit" />
          {this.renderWeather()}
        </form>
      </div>
    );
  }
}

export default App;
