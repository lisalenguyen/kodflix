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
    <Country name='Australia' src= {australia} id='australia' />
    <Country name='Austria' src={austria} id='austria'/>
    <Country name='France' src={france} id='france'/>
    </section>
  <section className='row'>
    <Country name='Indonesia' src={indonesia} id='indonesia'/>
    <Country name='Monaco' src={monaco} id='monaco'/>
    <Country name='Romania' src={romania} id='romania'/>
  </section>
  </div>
  )
}