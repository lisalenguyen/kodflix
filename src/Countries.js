import React from 'react';
import Country from './Country';
import getCountries from './countries-get';

export default function Countries() {
  return (
    <div>
      <section className='row'>
        {
          getCountries().map(country => (
            <Country 
            key={country.id}
            id={country.id} 
            name={country.name} 
            src={country.src} />
      ))
        }
      </section>
    </div>
  );
}