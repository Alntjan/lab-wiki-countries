import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import countries from './countries.json'
import {Switch, Route} from 'react-router-dom';
import CountryDetails from './components/CountryDetails'
import {React, Component} from 'react'
import axios from 'axios';


class App extends Component {

  state = {
    countries: null
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get('https://restcountries.eu/rest/v2/all')
      .then((countries) => {
        console.log(countries.data)
        this.setState({
          countries: countries.data
        })
      })
      .catch(err => console.log(err))
    }, 5000);
  }

  render() {
    return <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
        {this.state.countries ? <CountriesList countries={this.state.countries}/> : <h4>Loading</h4>}
        <Switch>
          <Route exact path='/'/>
          <Route path='/:cca3' render={(props) => <CountryDetails {...props} countries={this.state.countries}/>}/>
        </Switch>
        </div>
      </div>
    </div>
  };
}

export default App;
