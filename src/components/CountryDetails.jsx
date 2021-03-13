import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class CountryDetails extends Component {
  state = {
    country: false,
  };

  componentDidMount() {
    const foundCountry = this.props.findCountry(
      this.props.match.params.batatas
    );
    this.setState({ country: foundCountry });
    console.log('component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.batatas != this.props.match.params.batatas) {
      const foundCountry = this.props.findCountry(
        this.props.match.params.batatas
      );
      this.setState({ country: foundCountry });
    }
    console.log('component did Update');
  }

  render() {
    const { country } = this.state;
    return (
      <div className="sticky-top mt-5">
        {country && (
          <div className="card ml-5">
            <img src={country.flag} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{country.name}</h5>
              <p className="card-text">capital: {country.capital}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                population: {country.population}
              </li>
              <li className="list-group-item">area: {country.area}</li>
            </ul>
            <div className="card-body">
              {country.borders.map((border) => {
                return (
                  <Link to={`/country/${border}`} className="card-link">
                    {this.props.findCountry(border).name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        {!country && <div>loading</div>}
      </div>
    );
  }
}
