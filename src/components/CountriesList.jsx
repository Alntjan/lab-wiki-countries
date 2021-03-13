import {React, Component} from 'react';
import {Link} from 'react-router-dom';

class CountriesList extends Component {

    state = {
        countries: this.props.countries
    }

    render() {
        return <div className="col-5">
            <div className="list-group">
                {this.state.countries.map(country => {
                    return <div className="list-group-item list-group-item-action">
                        <img className='mx-3' src={` https://www.countryflags.io/${country.alpha2Code.toLowerCase()}/flat/64.png`} alt={`${country.alpha2Code}`}/>
                        <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>{country.name}</Link>
                    </div>
                })}
            </div>
          </div>
    }
}

export default CountriesList;