import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Restaurant from '../views/Restaurant';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/restaurant/:id' component={Restaurant} />
    </Switch>
  </BrowserRouter>
);

export default App;
