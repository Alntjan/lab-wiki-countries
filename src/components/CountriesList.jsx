import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {
  render() {
    return (
      <div className="container m-5">
        <div className="row">
          <div className="list-group">
            {this.props.countries &&
              this.props.countries.map((country) => {
                return (
                  <Link
                    key={country.cca3}
                    className="list-group-item list-group-item-action"
                    to={`/country/${country.alpha3Code}`}
                  >
                    <div>
                      <img src={country.flag} className="w-25" />
                    </div>

                    {country.name}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
