import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Input from './Input';
import Addnode from './Addnode';
import Data from './Data';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Menu />
      <Switch>
        <Route path="/" exact component={Input} />
        <Route path="/input" component={Input} />
        <Route path="/addnode" component={Addnode} />
        <Route path="/data" component={Data} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
