import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home'
import Navbar from './components/Navbar'
import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/dynamic" component={AsyncDynamicPAge} />
          <Route component={AsyncNoMatch} /> */}
        </Switch>
        <Navbar />
      </div>
    </BrowserRouter>
  );
};

export default App;
