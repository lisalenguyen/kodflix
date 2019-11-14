import React from 'react';
import Country from './Country';
import australia from './images/australia.jpg';
import austria from './images/austria.jpg';
import france from './images/france.jpg';
import indonesia from './images/indonesia.jpg';
import romania from './images/romania.jpg';
import monaco from './images/monaco.jpg';

export default function Countries() {
  return (
  <div>
  <section className='row'>
    <Country name='Australia' src= {australia} />
    <Country name='Austria' src={austria} />
    <Country name='France' src={france} />
    </section>
  <section className='row'>
    <Country name='Indonesia' src={indonesia} />
    <Country name='Monaco' src={monaco} />
    <Country name='Romania' src={romania} />
  </section>
  </div>
  )
}