import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';

import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import axios from 'axios';

class App extends Component {
  state = {
    countries: null,
  };

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then((res) => {
      this.setState({ countries: res.data });
      console.log(res.data);
    });
  }

  findCountry = (alpha3Code) => {
    return (
      this.state.countries &&
      this.state.countries.find((country) => alpha3Code === country.alpha3Code)
    );
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <CountriesList countries={this.state.countries} />
            </div>
            <div className="col-8">
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route
                  path="/country/:batatas"
                  render={(props) => (
                    <CountryDetails {...props} findCountry={this.findCountry} />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
