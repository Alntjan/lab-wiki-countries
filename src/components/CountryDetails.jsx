import {React, Component} from 'react'
import {Link} from 'react-router-dom';

class CountryDetails extends Component {

    findCountry = (cca3) => {
        const country = this.props.countries.find(country => country.alpha3Code === cca3)
        return country
    }

    render() {
        if(!this.props.countries) return <div>Loading</div>
        const {params} = this.props.match
        const country = this.findCountry(params.cca3);
        return <div className="col-7">
        <h1>{country.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {country.borders.map(border => <li key={border}><Link to={`/${border}`}>{this.findCountry(border).name}</Link></li>)}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    }
}

export default CountryDetails