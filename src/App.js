import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Countries from './Countries';
import Details from './Details';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Countries} />
        <Route exact path='/details' component={Details} />
      </div>
    </Router>
  );
}

export default App;
