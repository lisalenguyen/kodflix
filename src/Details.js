import React from 'react';
import { Link } from 'react-router-dom';
import getCountries from './countries-get'

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
        return (
            <div><h1>{this.state.country.name}</h1>
                <Link to='/'>Back to home page</Link>
            </div>
        );
    }
}