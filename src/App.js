import React from 'react';
import australia from './images/australia.jpg';
import france from './images/france.jpg';
import indonesia from './images/indonesia.jpg';
import malta from './images/malta.jpg';
import romania from './images/romania.jpg';
import monaco from './images/monaco.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className='row'>
        <Country name='Australia' src={australia} />
        <Country name='France' src={france} />
        <Country name='Indonesia' src={indonesia} />
      </section>
      <section className='row'>
        <Country name='Malta' src={malta} />
        <Country name='Monaco' src={monaco} />
        <Country name='Romania' src={romania} />
      </section>
    </div>
  );
}

function Country(props) {
  return (
    <figure className='country'><img src={props.src} alt='Australia' /><div className='overlay'><h3>{props.name}</h3></div></figure>
  );
}
export default App;
