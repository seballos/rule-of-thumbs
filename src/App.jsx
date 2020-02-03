import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home'
import HowItWorks from './views/HowItWorks';
import PastTrials from './views/Past Trials';
import Navbar from './components/Navbar'
import vendor from './vendor'

import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/how-it-works" component={HowItWorks} />
          <Route exact path="/past-trials" component={PastTrials} />
        </Switch>
        <Navbar />
      </div>
    </BrowserRouter>
  );
};

vendor()

export default App;
