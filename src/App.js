import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Countries from './Countries';
import Details from './Details/Details';
import './App.css';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Countries} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:countryId' component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
