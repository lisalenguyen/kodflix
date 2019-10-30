import React from 'react';
import Australia from './images/australia.jpg';
import France from './images/france.jpg';
import Indonesia from '/images/indonesia.jpg';
import Malta from './images/malta.jpg';
import Monaco from './images/monaco.jpg';
import Romania from '/images/romania.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
<img src ={Australia} alt='Australia' />
<img src ={France} alt='France' />
<img src ={Indonesia} alt='Indonesia' />
<img src ={Malta} alt='Malta' />
<img src ={Monaco} alt='Monaco' />
<img src ={Romania} alt='Romania' />
<br /><br /><br />
<div className='container'>
<div className= 'item'>Australia</div>
<div className= 'item'>France</div>
<div className= 'item'>Indonesia</div>
    </div>
    <div className='container'>
<div className= 'item'>Malta</div>
<div className= 'item'>Monaco</div>
<div className= 'item'>Romania</div>
    </div>
    </div>
);
}

export default App;
