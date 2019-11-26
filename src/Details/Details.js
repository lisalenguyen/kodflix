import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getCountries from '../countries-get'
import './Details.css'

export default class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            country: {}
        };
    }

    componentDidMount() {
        let countryId = this.props.match.params.countryId;
        let country = getCountries()
            .find((country) => country.id === countryId);
        this.setState({ country });
    }

    render() {
        if (this.state.country === undefined) {
            return <Redirect to='/not-found' />;
        } else {
            return (
                <div className='Details'>
                    <h1 className='text'>{this.state.country.name}</h1>
                    <div className='content'>
                    <div className='text'>{this.state.country.details}</div>
                        <img className='img'
                            src={this.state.country.src}
                            alt={this.state.country.name} />
                    </div>
                    <Link to='/'>Back to home page</Link>
                </div>
            );
        }
    }
}